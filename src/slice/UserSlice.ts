import {User} from "../model/User.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserSlice {
    users:User[];
}

export const initialState: UserSlice = {
    users:[]
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action:PayloadAction<User>)=>{
            state.users.push(action.payload);
        }
    }
});
export const {setUser} = userSlice.actions;
export default userSlice.reducer;
