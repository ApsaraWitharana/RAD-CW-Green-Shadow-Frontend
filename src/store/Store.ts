import { configureStore, combineReducers } from '@reduxjs/toolkit';
import staffSlice from "../reducer/StaffReducer.ts";
import vehicleSlice from "../reducer/Vehicle.ts";
import userSlice from "../reducer/UserSlice.ts";
import cropReducer from "../reducer/CropReducer.ts";
import equipmentReducer from "../reducer/EquipmentReducer.ts";
import monitoringReducer from "../reducer/MonitoringReducer.ts";
import fieldReducer from "../reducer/FieldReducer.ts";


const rootReducer = combineReducers({
    user:userSlice,
    staff: staffSlice,
    field:fieldReducer,
    crop:cropReducer,
    equipment:equipmentReducer,
    vehicle:vehicleSlice,
    monitoring:monitoringReducer,

});

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
