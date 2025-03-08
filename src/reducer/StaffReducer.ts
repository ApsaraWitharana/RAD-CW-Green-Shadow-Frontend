import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Staff} from "../model/Staff.ts";
import axios from "axios";


export const initialState: Staff[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/staff",
    headers: {
        'Content-Type': 'application/json',
    },
});

export const saveStaff = createAsyncThunk(
    'staff/add',
    async (staff: Staff) => {
        try {
            const resp = await api.post('/add', staff)
            return resp.data
        } catch (error) {
            return console.error('error', error);
        }
    }
);

export const UpdateStaff = createAsyncThunk(
    'staff/update',
    async (staff: Staff) => {
        try {
            const resp = await api.put(`/update/${staff.id}`, staff)
            return resp.data
        } catch (error) {
            return console.error('error', error);
        }
    }
);

export const getStaff = createAsyncThunk(
    'staff/get',
    async () => {
        try {
            const resp = await api.get('/get');
            return resp.data
        } catch (error) {
            return console.error('error', error);
        }
    }
);

export const deleteStaff = createAsyncThunk(
    'staff/delete',
    async (id: string) => {
        try {
            const resp = await api.delete(`/delete/${id}`);
            return resp.data;
        } catch (error) {
            return console.error('error', error);
        }
    }
);


const staffReducer = createSlice({
    name: "staffs",
    initialState,
    reducers: {
        addStaff: (state, action: PayloadAction<Staff>) => {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveStaff.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveStaff.rejected, (state, action) => {

            })
            .addCase(saveStaff.fulfilled, (state, action) => {

            });
        builder
            .addCase(UpdateStaff.rejected, (state, action) => {
                console.log('Failed to update ', action.payload);
            })
            .addCase(UpdateStaff.fulfilled, (state, action) => {
                const staff = state.find((staff: Staff) => staff.id == action.payload.id);
                if (staff) {
                    staff.firstName = action.payload.firstName;
                    staff.lastName = action.payload.lastName;
                    staff.designation = action.payload.designation;
                    staff.gender = action.payload.gender;
                    staff.joinDate = action.payload.joinDate;
                    staff.dob = action.payload.dob;
                    staff.addressLine1 = action.payload.addressLine1;
                    staff.addressLine2 = action.payload.addressLine2;
                    staff.addressLine3 = action.payload.addressLine3;
                    staff.addressLine4 = action.payload.addressLine4;
                    staff.contactNumber = action.payload.contactNumber;
                    staff.email = action.payload.email;
                    staff.role = action.payload.role;

                }
            })
            .addCase(UpdateStaff.pending, (state, action) => {
                console.log(action.payload);
            });
        //get
        builder
            .addCase(getStaff.fulfilled, (state, action) => {
                action.payload.map((staff: Staff) => {
                    state.push(staff)
                })
            })
            .addCase(getStaff.pending, (state, action) => {
                console.log('Pending', action.payload);
            })
           .addCase(getStaff.rejected, (state, action) => {
               console.log('Failed to update ', action.payload);
           });
        //delete
        builder
        .addCase(deleteStaff.rejected, (state, action) => {
            console.log('failed to delete', action.payload);
        })
        .addCase(deleteStaff.fulfilled, (state, action) => {
            return state = state.filter((staff: Staff) => staff.id !== action.payload.id);
        })
        .addCase(deleteStaff.pending, (state, action) => {
            console.log('Pending', action.payload);
        })

    }
});


export const {addStaff} = staffReducer.actions;
export default staffReducer.reducer;
