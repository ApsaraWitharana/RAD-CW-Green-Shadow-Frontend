import {Field} from "../model/Field.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FieldSlice {
    fields:Field[];
}

export const initialState: FieldSlice = {
    fields: [],
};

const fieldSlice = createSlice({
    name:"field",
    initialState,
    reducers: {
        setField: (state, action: PayloadAction<Field>) => {
            state.fields.push(action.payload);
        },
        updateField: (state, action: PayloadAction<Field>) => {
            const index = state.fields.findIndex((field) => field.fieldCode === action.payload.fieldCode);
            if (index !== -1) {
                state.fields[index] = action.payload;
            }
        },
        deleteField: (state, action: PayloadAction<string>) => {
            state.fields = state.fields.filter(
                (field) => field.fieldCode !== action.payload);
        }
    },
});
export const {setField,updateField,deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;