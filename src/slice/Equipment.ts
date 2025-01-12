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
        },
        updateEquipment:(state,action:PayloadAction<Equipment>)=>{
            const index = state.equipments.findIndex((equipment)=> equipment.equipmentCode === action.payload.equipmentCode);
            if (index !== -1){
                state.equipments[index] = action.payload;
            }
        },
        deleteEquipment:(state,action:PayloadAction<string>)=>{
            state.equipments = state.equipments.filter(
                (equipment) => equipment.equipmentCode !== action.payload);
        }
    },
});
export const {setEquipment,updateEquipment,deleteEquipment} = equipmentSlice.actions;
export default equipmentSlice.reducer;