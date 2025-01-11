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
        },
        updateCrop:(state,action:PayloadAction<Crop>)=>{
            const index = state.crops.findIndex(crop => crop.cropCode === action.payload.cropCode);
            if(index !== -1){
                state.crops[index] = action.payload;
            }
        },
        deleteCrop:(state,action:PayloadAction<string>)=>{
            state.crops = state.crops.filter(
                (crop) =>crop.cropCode !== action.payload);
        }
    },
});
export const {setCrop,updateCrop,deleteCrop} = cropSlice.actions;
export default cropSlice.reducer;