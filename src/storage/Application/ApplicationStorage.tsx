import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Application, ModuleType } from "./ApplicationTypes";

const initialApplication:Application = 
{
    "selectedModule":"PAIN",
    "previousModule":"PAIN"
}
export const applicationSlice = createSlice({
    name: 'ApplicationData',
    initialState: initialApplication,
    reducers:
    {
        setInitialModule:(application,action:PayloadAction<ModuleType>)=>
        {
            return {"previousModule":action.payload,"selectedModule":action.payload}
        },
        setSelectedApplication:(application,action:PayloadAction<ModuleType>) =>
        {
            application.previousModule = application.selectedModule;
            application.selectedModule = action.payload
            return application;
        }
    }
})

export const {setSelectedApplication,setInitialModule} = applicationSlice.actions