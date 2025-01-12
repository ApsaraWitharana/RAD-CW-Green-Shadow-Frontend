import {Vehicle} from "../model/Vehicle.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface VehicleSlice{
    vehicles:Vehicle[];
}

export const initialState: VehicleSlice = {
    vehicles: [],
}

const vehicleSlice = createSlice({
    name:"vehicle",
    initialState,
    reducers:{
        setVehicle:(state,action:PayloadAction<Vehicle>)=>{
            state.vehicles.push(action.payload);
        },
        updateVehicle:(state,action:PayloadAction<Vehicle>)=>{
            const index = state.vehicles.findIndex(vehicle=>vehicle.vehicleCode === action.payload.vehicleCode);
            if (index !== -1){
                state.vehicles[index] = action.payload;
            }
        }
    }
});

export const {setVehicle,updateVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;