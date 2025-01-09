import { configureStore, combineReducers } from '@reduxjs/toolkit';
import staffSlice from "../slice/StaffSlice.ts";
import fieldSlice from "../slice/FieldSlice.ts";
import cropSlice from "../slice/CropSlice.ts";

const rootReducer = combineReducers({
    staff: staffSlice,
    field:fieldSlice,
    crop:cropSlice

});

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
