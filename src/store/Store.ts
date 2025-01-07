import { configureStore, combineReducers } from '@reduxjs/toolkit';
import staffSlice from "../slice/StaffSlice.ts";
import fieldSlice from "../slice/FieldSlice.ts";

const rootReducer = combineReducers({
    staff: staffSlice,
    field:fieldSlice,

});

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
