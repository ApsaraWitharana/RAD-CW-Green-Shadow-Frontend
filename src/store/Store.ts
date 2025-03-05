import { configureStore, combineReducers } from '@reduxjs/toolkit';
import staffSlice from "../reducer/StaffSlice.ts";
import fieldSlice from "../reducer/FieldReducer.ts";
import cropSlice from "../reducer/CropReducer.ts";
import equipmentSlice from "../reducer/EquipmentReducer.ts";
import vehicleSlice from "../reducer/Vehicle.ts";
import userSlice from "../reducer/UserSlice.ts";
import monitoring from "../reducer/Monitoring.ts";


const rootReducer = combineReducers({
    user:userSlice,
    staff: staffSlice,
    field:fieldSlice,
    crop:cropSlice,
    equipment:equipmentSlice,
    vehicle:vehicleSlice,
    monitoring:monitoring

});

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
