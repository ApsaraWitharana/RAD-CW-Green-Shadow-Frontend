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
        setVehicle(state,action:PayloadAction<Vehicle>){
            state.vehicles.push(action.payload);
        }
    }
});

export const {setVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;