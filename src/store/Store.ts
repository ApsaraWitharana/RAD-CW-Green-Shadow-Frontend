import { configureStore, combineReducers } from '@reduxjs/toolkit';
import staffSlice from "../slice/StaffSlice.ts";

const rootReducer = combineReducers({
    staff: staffSlice

});

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
