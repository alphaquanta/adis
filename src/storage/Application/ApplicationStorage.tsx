import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-test-renderer";
import { Application, ApplicationStateType, ModuleType } from "./ApplicationTypes";

const initialApplication:Application = 
{
    "state":"LOADING",
    "selectedModule":"CARDS",
    "previousModule":"CARDS",
    showKeyboard:false
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
        },
        toggleKeyboard:(application,action?:PayloadAction<boolean|undefined>)=>
        {
            application.showKeyboard = action?.payload ? action.payload : !application.showKeyboard;
            console.log(application.showKeyboard)
        }
    }
})

export const {setSelectedModule,setInitialModule,setApplicationState,toggleKeyboard} = applicationSlice.actions