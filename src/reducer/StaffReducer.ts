import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Staff } from "../model/Staff.ts";
import axios from "axios";

export const initialState: Staff[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/staff",
    headers: {
        "Content-Type": "application/json",
    },
});

// Async actions
export const saveStaff = createAsyncThunk("staff/add", async (staff: Staff, { rejectWithValue }) => {
    try {
        const resp = await api.post("/add", staff);
        return resp.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to save staff");
    }
});

export const UpdateStaff = createAsyncThunk("staff/update", async (staff: Staff, { rejectWithValue }) => {
    try {
        const resp = await api.put(`/update/${staff.id}`, staff);
        return resp.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to update staff");
    }
});

export const getStaff = createAsyncThunk("staff/get", async (_, { rejectWithValue }) => {
    try {
        const resp = await api.get("/get");
        return resp.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to fetch staff");
    }
});

export const deleteStaff = createAsyncThunk("staff/delete", async (id: string, { rejectWithValue }) => {
    try {
        const resp = await api.delete(`/delete/${id}`);
        return { id };
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to delete staff");
    }
});

// Staff Reducer
const staffReducer = createSlice({
    name: "staffs",
    initialState,
    reducers: {
        addStaff: (state, action: PayloadAction<Staff>) => {
            state.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            // Save Staff
            .addCase(saveStaff.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveStaff.rejected, (state, action) => {
                console.error("Error saving staff:", action.payload);
            });

        // Update Staff
        builder
            .addCase(UpdateStaff.fulfilled, (state, action) => {
                const index = state.findIndex((staff) => staff.id === action.payload.id);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(UpdateStaff.rejected, (state, action) => {
                console.error("Failed to update staff:", action.payload);
            });

        // Get Staff
        builder
            .addCase(getStaff.fulfilled, (state, action) => {
                return action.payload; // Replace state with the fetched data
            })
            .addCase(getStaff.rejected, (state, action) => {
                console.error("Failed to fetch staff:", action.payload);
            });

        // Delete Staff
        builder
            .addCase(deleteStaff.fulfilled, (state, action) => {
                return state.filter((staff) => staff.id !== action.payload.id);
            })
            .addCase(deleteStaff.rejected, (state, action) => {
                console.error("Failed to delete staff:", action.payload);
            });
    },
});

export const { addStaff } = staffReducer.actions;
export default staffReducer.reducer;
