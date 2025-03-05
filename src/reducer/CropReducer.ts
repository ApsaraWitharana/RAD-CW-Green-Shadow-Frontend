import {Crop} from "../model/Crop.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from 'axios';
export const initialState: Crop [] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/crop",
    headers: {
        "Content-Type": "application/json",
    },
});

export const saveCrop = createAsyncThunk(
    'crop/add',
    async (crop: Crop) => {
        try {
            const resp = await api.post('/add', crop)
            return resp.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const UpdateCrop = createAsyncThunk(
    'crop/update',
    async (crop:Crop) => {
        try {
            const resp = await api.put(`/update/${crop.cropCode}`, crop)
            return resp.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const getCrop = createAsyncThunk(
    'crop/get',
    async () => {
        try {
            const resp = await api.get('/get');
            return resp.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const deleteCrop = createAsyncThunk(
    'crop/delete',
    async (cropCode: string) => {
        try {
            const resp = await api.delete(`/delete/${cropCode}`);
            return resp.data;
        } catch (error) {
            return console.log('error delete crop', error);
        }
    }
)

const cropReducer = createSlice({
    name: "crop",
    initialState,
    reducers: {
        addCrop(state, action: PayloadAction<Crop>) {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(saveCrop.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveCrop.rejected, (state, action) => {
                console.log("Failed to save crop:", action.payload);
            })
            .addCase(saveCrop.pending, (state, action) => {
                console.log("Pending:", action.payload);
            });
        builder
            .addCase(UpdateCrop.rejected, (state, action) => {
                console.log("Failed to save crop:", action.payload);
            })
            .addCase(UpdateCrop.fulfilled, (state, action) => {
                const crop = state.find((crop: Crop) => crop.cropCode === action.payload.cropCode);
                if (crop) {
                    crop.cropCommonName = action.payload.cropCommonName;
                    crop.cropScientificName = action.payload.cropScientificName;
                    crop.cropImage = action.payload.cropImage;
                    crop.category = action.payload.category;
                    crop.cropSeason = action.payload.cropSeason;
                    crop.fieldCode = action.payload.fieldCode;
                }
            })
            .addCase(UpdateCrop.pending, (state, action) => {
                console.log("Pending:", action.payload);
            });
        //get all
        builder
            .addCase(getCrop.fulfilled, (state, action) => {
                action.payload.map((crop: Crop) => {
                    state.push(crop);
                })
            })
            .addCase(getCrop.pending, (state, action) => {
                console.log("Pending:", action.payload);
            })
            .addCase(getCrop.rejected, (state, action) => {
                console.log("Rejected to get crop:", action.payload);
            });
        //delete
        builder
            .addCase(deleteCrop.rejected, (state, action) => {
                console.log("Pending:", action.payload);
            })
            .addCase(deleteCrop.fulfilled, (state, action) => {
                return state = state.filter((crop:Crop) => crop.cropCode !== action.payload.cropCode);
            })
            .addCase(deleteCrop.pending, (state, action) => {
                console.log("Pending to delete crop:", action.payload);
            })
    }
});

export const {addCrop} = cropReducer.actions;
export default cropReducer.reducer;