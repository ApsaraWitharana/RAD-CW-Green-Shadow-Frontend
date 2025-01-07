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
        }

    },
});
export const {setField,updateField} = fieldSlice.actions;
export default fieldSlice.reducer;