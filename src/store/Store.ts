import { configureStore, combineReducers } from '@reduxjs/toolkit';
import vehicleSlice from "../reducer/VehicleReducer.ts";
import userSlice from "../reducer/UserSlice.ts";
import cropReducer from "../reducer/CropReducer.ts";
import equipmentReducer from "../reducer/EquipmentReducer.ts";
import monitoringReducer from "../reducer/MonitoringReducer.ts";
import fieldReducer from "../reducer/FieldReducer.ts";
import staffReducer from "../reducer/StaffReducer.ts";


export const store = configureStore({
    reducer: {
        user:userSlice,
        staff: staffReducer,
        field:fieldReducer,
        crop:cropReducer,
        equipment:equipmentReducer,
        vehicle:vehicleSlice,
        monitoring:monitoringReducer,
    }
});


export type AppDispatch = typeof store.dispatch;
