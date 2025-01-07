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
        }

    },
});
export const {setField} = fieldSlice.actions;
export default fieldSlice.reducer;