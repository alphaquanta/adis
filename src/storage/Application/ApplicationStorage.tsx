import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-test-renderer";
import { Application, ApplicationStateType, ModuleType } from "./ApplicationTypes";

const initialApplication:Application = 
{
    "state":"LOADING",
    "selectedModule":"PAIN",
    "previousModule":"CARDS"
}
export const applicationSlice = createSlice({
    name: 'ApplicationData',
    initialState: initialApplication,
    reducers:
    {
        setInitialModule:(application,action:PayloadAction<ModuleType>)=>
        {
            return {...application,"previousModule":action.payload,"selectedModule":action.payload}
        },
        setSelectedModule:(application,action:PayloadAction<ModuleType>) =>
        {
            application.previousModule = application.selectedModule;
            application.selectedModule = action.payload
            return application;
        },
        setApplicationState:(application,action:PayloadAction<ApplicationStateType>) =>
        {
            application.state = action.payload;
            return application;
        }
    }
})

export const {setSelectedModule,setInitialModule,setApplicationState} = applicationSlice.actions