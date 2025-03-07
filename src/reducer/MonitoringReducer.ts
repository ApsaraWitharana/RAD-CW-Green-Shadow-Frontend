import {Monitoring} from "../model/Monitoring.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";


export const initialState: Monitoring [] = [];

const api = axios.create({
    baseURL: 'http://localhost:3000/monitoring',
    headers: {
        "Content-Type": "application/json",
    },
});

export const saveMonitoring = createAsyncThunk(
    'monitoring/add',
    async (monitoring: Monitoring) => {
        try {
            const resp = await api.post('/add', monitoring)
            return resp.data;
        } catch (err) {
            return console.error('Error while saving monitoring', err);
        }
    }
);

export const UpdateMonitoring = createAsyncThunk(
    'monitoring/update',
    async (monitoring: Monitoring) => {
        try {
            const resp = await api.put(`/update/${monitoring.logCode}`, monitoring)
            return resp.data;
        } catch (error) {
            return console.error('Error while saving monitoring', error);
        }
    }
);

export const getMonitoring = createAsyncThunk(
    'monitoring/get',
    async () => {
        try {
            const resp = await api.get('/get');
            return resp.data;
        } catch (error) {
            return console.error('Error while saving monitoring', error);
        }
    }
);

export const deleteMonitoring = createAsyncThunk(
    'monitoring/delete',
    async (logCode: string) => {
        try {
            const resp = await api.delete(`/delete/${logCode}`);
            return resp.data;
        } catch (error) {
            return console.error('Error while saving monitoring', error);
        }
    }
);


const monitoringSlice = createSlice({
    name: "monitoring",
    initialState,
    reducers: {
        addMonitoring(state, action: PayloadAction<Monitoring>) {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveMonitoring.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveMonitoring.rejected, (state, action) => {
                console.log('error', action.payload);
            })
            .addCase(saveMonitoring.pending, (state, action) => {
                console.log('Pending:', action.payload);
            });
        builder
            .addCase(UpdateMonitoring.rejected, (state, action) => {
                console.log('error', action.payload);
            })
            .addCase(UpdateMonitoring.fulfilled, (state, action) => {
                const monitoring = state.find((monitoring: Monitoring) => monitoring.logCode == action.payload.logCode);
                if (monitoring) {
                    monitoring.logCode = action.payload.logCode;
                    monitoring.logDate = action.payload.logDate;
                    monitoring.logDetails = action.payload.logDetails;
                    monitoring.observedImage = action.payload.observedImage;
                    monitoring.cropCode = action.payload.cropCode;
                }
            })
            .addCase(UpdateMonitoring.pending, (state, action) => {
                console.log('Pending', action.payload);
            });
        //get
        builder
            .addCase(getMonitoring.fulfilled, (state, action) => {
                action.payload.map((monitoring: Monitoring) => {
                    state.push(monitoring);
                })
            })
            .addCase(getMonitoring.pending, (state, action) => {
                console.log('pending', action.payload);
            })
            .addCase(getMonitoring.rejected, (state, action) => {
                console.log('failed to get', action.payload);
            });
        builder
            .addCase(deleteMonitoring.rejected, (state, action) => {
                console.log('failed to delete', action.payload);
            })
            .addCase(deleteMonitoring.fulfilled, (state, action) => {
                return state = state.filter((monitoring: Monitoring) => monitoring.logCode !== action.payload.logCode);
            })
            .addCase(deleteMonitoring.pending, (state, action) => {
                console.log('pending', action.payload);
            })
    }
});
export const {addMonitoring} = monitoringSlice.actions;
export default monitoringSlice.reducer;