import {Equipment} from "../model/Equipment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState:Equipment[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/equipment",
    headers:{
        "Content-Type": "application/json"
    },
});

export const saveEquipment = createAsyncThunk(
    'equipments/add',
    async (equipment:Equipment)=>{
        try {
            const resp = await api.post('add',equipment)
            return resp.data;
        }catch(error){
            return console.error('error',error);
        }
    }
);

export const updateEquipment = createAsyncThunk(
    'equipments/update',
    async (equipment:Equipment)=>{
        try {
            const resp = await api.put(`/update/${equipment.equipmentCode}`,equipment)
            return resp.data;
        }catch (error){
            return console.error('error',error);
        }
    }
);

export const getEquipment= createAsyncThunk(
    'equipments/get',
    async ()=>{
        try {
            const resp = await api.get('/get');
            return resp.data;
        }catch (error){
            return console.error('error',error);
        }
    }
);

export const deleteEquipment = createAsyncThunk(
    'equipments/delete',
    async (equipmentCode:string)=>{
        try {
            const resp = await api.delete(`/delete/${equipmentCode}`);
            return resp.data;
        }catch (error){
            return console.error('error',error);
        }
    }
);


const equipmentReducer = createSlice({
    name:"equipment",
    initialState,
    reducers:{
         addEquipment(state, action:PayloadAction<Equipment>){
             state.push(action.payload);
         }
    },

    extraReducers:(builder) => {
        builder
            .addCase(saveEquipment.fulfilled, (state, action) => {
            state.push(action.payload);
        })
        .addCase(saveEquipment.rejected, (state, action) => {
            console.error('Rejected to save Equipment',action.payload);
        })
        .addCase(saveEquipment.pending, (state, action) => {
            console.log("Pending:",action.payload);
        });

        builder
        .addCase(updateEquipment.rejected, (state, action) => {
            console.error('Rejected to update Equipment',action.payload);
        })
        .addCase(updateEquipment.fulfilled, (state, action) => {
            const equipment = state.find((equipment:Equipment) => equipment.equipmentCode === action.payload.equipmentCode);
            if (equipment) {
                equipment.equipmentName = action.payload.equipmentName;
                equipment.equipmentType = action.payload.equipmentType;
                equipment.status = action.payload.status;
                equipment.fieldCode = action.payload.fieldCode;
                equipment.staffCode = action.payload.staffCode;
            }
        })
        .addCase(updateEquipment.pending, (state, action) => {
            console.error('Pending to update Equipment',action.payload);
        });

        //get
        builder
            .addCase(getEquipment.fulfilled, (state, action) => {
                action.payload.map((equipment:Equipment) => {
                    state.push(equipment);
                })
            })
            .addCase(getEquipment.pending, (state, action) => {
                console.error('pending',action.payload);
            })
        .addCase(getEquipment.rejected, (state, action) => {
            console.error('Rejected to get Equipment',action.payload);
        });
        builder
        .addCase(deleteEquipment.rejected, (state, action) => {
            console.error('Rejected to delete Equipment',action.payload);
        })
        .addCase(deleteEquipment.fulfilled, (state, action) => {
            return state = state.filter((equipment:Equipment) => equipment.equipmentCode !== action.payload.equipmentCode);
        })
        .addCase(deleteEquipment.pending, (state, action) => {
            console.error('Pending to delete Equipment',action.payload);
        })

    }
});
export const {addEquipment} = equipmentReducer.actions;
export default equipmentReducer.reducer;