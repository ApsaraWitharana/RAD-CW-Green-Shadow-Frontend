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
        },
        updateMonitoring:(state, action:PayloadAction<Monitoring>)=>{
            const index = state.monitorings.findIndex(monitoring => monitoring.logCode ===action.payload.logCode);
            if (index !== -1){
                state.monitorings[index] = action.payload;
            }

        },
        deleteMonitoring:(state, action:PayloadAction<string>)=>{
            state.monitorings = state.monitorings.filter(
                (monitoring)=> monitoring.logCode !== action.payload);
        }
    },
});
export const {setMonitoring,updateMonitoring,deleteMonitoring} = monitoringSlice.actions;
export default monitoringSlice.reducer;