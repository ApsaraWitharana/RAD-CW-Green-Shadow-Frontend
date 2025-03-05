import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Staff } from "../model/Staff.ts";

interface StaffSlice{
    staffs: Staff[];
}

export const initialState: StaffSlice = {
    staffs: [],
};

const staffSlice = createSlice({
    name:"staffs",
    initialState,
    reducers: {
        setStaff: (state, action: PayloadAction<Staff>) => {
            state.staffs.push(action.payload);
        },
        updateStaff: (state, action: PayloadAction<Staff>) => {
            const index = state.staffs.findIndex(staff => staff.id === action.payload.id);
            if (index !== -1) {
                state.staffs[index] = action.payload;
            }
        },
        deleteStaff: (state, action: PayloadAction<string>) => {
          state.staffs = state.staffs.filter(
              (staff) => staff.email !== action.payload
          );
        }
    },
});


export const {setStaff,updateStaff,deleteStaff} = staffSlice.actions;
export default  staffSlice.reducer;
