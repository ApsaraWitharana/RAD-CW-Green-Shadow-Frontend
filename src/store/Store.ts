import { configureStore, combineReducers } from '@reduxjs/toolkit';
import staffSlice from "../slice/StaffSlice.ts";
import fieldSlice from "../slice/FieldSlice.ts";
import cropSlice from "../slice/CropSlice.ts";
import equipmentSlice from "../slice/Equipment.ts";
import vehicleSlice from "../slice/Vehicle.ts";
import userSlice from "../slice/UserSlice.ts";


const rootReducer = combineReducers({
    user:userSlice,
    staff: staffSlice,
    field:fieldSlice,
    crop:cropSlice,
    equipment:equipmentSlice,
    vehicle:vehicleSlice

});

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
