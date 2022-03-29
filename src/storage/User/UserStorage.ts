import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "./UserTypes";

const initialUser: UserData = 
{
    isInit: false,
    uuid: "NONE",
    name: "Not Initilized",
    surname: "",
    skillLevel: 0,
    emergencyContact: "",
    caretakerUUID: ""
} 

export const userDataSlice = createSlice({
    name: 'UserData',
    initialState: initialUser,
    reducers:
    {
        setInit:(userData,action:PayloadAction<boolean>) =>
        {
            return {...userData,isInit:action.payload}
        },
        setUserData:(userData,action:PayloadAction<UserData>) =>
        {
            return {...action.payload,isInit:true}
        }
    }
})

export const {setInit,setUserData} = userDataSlice.actions
