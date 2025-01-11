import {Equipment} from "../model/Equipment.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface EquipmentSlice {
    equipments:Equipment[];
}

export const initialState:EquipmentSlice = {
    equipments:[],
}

const equipmentSlice = createSlice({
    name:"equipment",
    initialState,
    reducers:{
        setEquipment:(state,action:PayloadAction<Equipment>)=>{
            state.equipments.push(action.payload);
        }
    }
});
export const {setEquipment} = equipmentSlice.actions;
export default equipmentSlice.reducer;