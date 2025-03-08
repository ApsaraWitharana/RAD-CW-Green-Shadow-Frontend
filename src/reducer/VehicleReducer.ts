import {Vehicle} from "../model/Vehicle.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState: Vehicle [] = [];

const api = axios.create({
    baseURL: 'https://localhost:3000/vehicles',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const saveVehicle = createAsyncThunk(
    'vehicles/saveVehicle',
    async (vehicle: Vehicle) => {
        try {
            const resp = await api.post('/add', vehicle)
            return resp.data
        } catch (error) {
            return console.log('error', error);
        }
    }
);
export const UpdateVehicle = createAsyncThunk(
    'vehicles/update',
    async () => {
        try {
            const resp = await api.get('/get');
            return resp.data
        } catch (error) {
            return console.log('error', error);
        }
    }
);
export const getVehicle = createAsyncThunk(
    'vehicles/get',
    async () => {
        try {
            const resp = await api.get('/get');
            return resp.data
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const deleteVehicle = createAsyncThunk(
    'vehicles/delete',
    async () => {
        try {
            const resp = await api.get('/delete');
            return resp.data
        } catch (error) {
            return console.log('error', error);
        }
    }
);

const vehicleSlice = createSlice({
    name: "vehicle",
    initialState,
    reducers: {

        addVehicle(state, action: PayloadAction<Vehicle>) {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveVehicle.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveVehicle.rejected, (state, action) => {
                console.log('error', action.payload);
            })
            .addCase(saveVehicle.pending, (state, action) => {
                console.log('Pending', action.payload);
            });
        //update
        builder
        .addCase(UpdateVehicle.rejected, (state, action) => {
            console.log('Error', action.payload);
        })
        .addCase(UpdateVehicle.fulfilled, (state, action) => {
            const vehicle = state.find((vehicle:Vehicle) => vehicle.vehicleCode == action.payload.vehicleCode);
            if (vehicle) {
                vehicle.licensePlateNumber = action.payload.licensePlateNumber;
                vehicle.vehicleCategory = action.payload.vehicleCategory;
                vehicle.fuelType = action.payload.fuelType;
                vehicle.status = action.payload.status;
                vehicle.staffId = action.payload.staffId;
                vehicle.remarks = action.payload.remarks;
            }
        })
        .addCase(UpdateVehicle.pending, (state, action) => {
            console.log('Error', action.payload);
        });
        //get
        builder
        .addCase(getVehicle.fulfilled, (state, action) => {
            action.payload.map((vehicle:Vehicle) => {
                state.push(vehicle);
            })
        })
        .addCase(getVehicle.pending, (state, action) => {
            console.log('Pending', action.payload);
        })
        .addCase(getVehicle.rejected, (state, action) => {
            console.log('Error', action.payload);
        });
        //delete
        builder
        .addCase(deleteVehicle.rejected, (state, action) => {
            console.log('Error', action.payload);
        })
        .addCase(deleteVehicle.fulfilled, (state, action) => {
            return state = state.filter((vehicle:Vehicle) => vehicle.vehicleCode !== action.payload.vehicleCode);
        })
        .addCase(deleteVehicle.pending, (state, action) => {
            console.log('Pending', action.payload);
        })
    }
});

export const {addVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;