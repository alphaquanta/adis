import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataType } from "./UserTypes";

const initialUser: UserDataType = 
{
    isInit: false,
    uuid: "NONE",
    name: "İsmail Barış",
    surname: "BOZKUŞ",
    skillLevel: 0,
    emergencyContact: "",
    caretakerUUID: "",
    gender:"MALE",
    isTTS:true
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
        setUserData:(userData,action:PayloadAction<UserDataType>) =>
        {
            return {...action.payload,isInit:true}
        }
    }
})

export const {setInit,setUserData} = userDataSlice.actions
