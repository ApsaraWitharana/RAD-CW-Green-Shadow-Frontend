import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Staff } from "../model/Staff.ts";

interface StaffSlice{
    staff: Staff[];
}

export const initialState: StaffSlice = {
    staff: [],
};

const staffSlice = createSlice({
    name:"staffs",
    initialState,
    reducers:{
        setStaff:(state,action:PayloadAction<Staff>)=>{
            state.staff.push(action.payload);
        }
    }
})

export const {setStaff} = staffSlice.actions;
export default  staffSlice.reducer;
