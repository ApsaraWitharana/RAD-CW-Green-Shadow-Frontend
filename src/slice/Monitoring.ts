import {Monitoring} from "../model/Monitoring.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface MonitoringSlice{
    monitorings : Monitoring[];

}

export const initialState: MonitoringSlice = {
    monitorings : [],
};

const monitoringSlice = createSlice({
    name:"monitoring",
    initialState,
    reducers:{
        setMonitoring:(state, action:PayloadAction<Monitoring>)=>{
            state.monitorings.push(action.payload);
        }
    }
});
export const {setMonitoring} = monitoringSlice.actions;
export default monitoringSlice.reducer;