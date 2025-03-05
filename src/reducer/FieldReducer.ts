import {Field} from "../model/Field.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState: Field [] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/field",
    headers: {
        "Content-Type": "application/json",
    },
});

export const saveField = createAsyncThunk(
    'fields/add',
    async (field: Field) => {
        try {
            const resp = await api.post('/add', field)
            return resp.data;
        } catch (error) {
            return console.error('error', error);
        }
    }
);

export const UpdateField = createAsyncThunk(
    'fields/update',
    async (field: Field) => {
        try {
            const resp = await api.put(`/update/${field.fieldCode}`, field)
            return resp.data;
        } catch (error) {
            return console.error('error', error);
        }
    }
);

export const getField = createAsyncThunk(
    'fields/get',
    async () => {
        try {
            const resp = await api.get('/get');
            return resp.data;
        } catch (error) {
            return console.error('error', error);
        }
    }
);

export const deleteField = createAsyncThunk(
    'fields/delete',
    async (fieldCode: string) => {
        try {
            const resp = await api.delete(`/delete/${fieldCode}`);
            return resp.data;
        } catch (error) {
            return console.error('error', error);
        }
    }
)

const fieldReducer = createSlice({
    name: "field",
    initialState,
    reducers: {
        addField(state, action: PayloadAction<Field>) {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveField.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveField.rejected, (state, action) => {
                console.error('error', action.payload);
            })
            .addCase(saveField.pending, (state, action) => {
                console.log("Pending:", action.payload);
            });
        builder
            .addCase(UpdateField.rejected, (state, action) => {
                console.error('Failed to update', action.payload);
            })
            .addCase(UpdateField.fulfilled, (state, action) => {
                const field = state.find((field:Field)=> field.fieldCode == action.payload.fieldCode);
                if (field) {
                    field.fieldName = action.payload.fieldName;
                    field.fieldLocation = action.payload.fieldLocation;
                    field.extentSize = action.payload.extentSize;
                    field.fieldImage1 = action.payload.fieldImage1;
                    field.fieldImage2 = action.payload.fieldImage2;
                }
            })
        .addCase(UpdateField.pending, (state, action) => {
            console.error('Pending', action.payload);
        });
        //get
        builder
        .addCase(getField.fulfilled, (state, action) => {
            action.payload.map((field:Field) => {
                state.push(field);
            })
        })
        .addCase(getField.pending, (state, action) => {
            console.log("Pending:", action.payload);
        })
        .addCase(getField.rejected, (state, action) => {
            console.error('Failed to get', action.payload);
        })

        //delete
        builder
        .addCase(deleteField.rejected, (state, action) => {
            console.error('Failed to delete', action.payload);
        })
        .addCase(deleteField.fulfilled, (state, action) => {
            return state = state.filter((field:Field) => field.fieldCode!== action.payload.fieldCode);
        })
        .addCase(deleteField.pending, (state, action) => {
            console.error('Pending', action.payload);
        })
    }
});
export const {addField} = fieldReducer.actions;
export default fieldReducer.reducer;