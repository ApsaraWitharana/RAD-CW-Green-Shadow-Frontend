import {Crop} from "../model/Crop.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CropSlice{
    crops:Crop[];
}
export const initialState:CropSlice = {
    crops:[],
}

const cropSlice = createSlice({
    name:"crop",
    initialState,
    reducers:{
        setCrop:(state,action:PayloadAction<Crop>)=>{
            state.crops.push(action.payload);
        }
    },
});
export const {setCrop} = cropSlice.actions;
export default cropSlice.reducer;