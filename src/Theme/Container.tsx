import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsModule } from "../components/ContentContainer/CardsModule/CardsContainer";
import { DrawModule } from "../components/ContentContainer/DrawModule/DrawContainer";
import { PainModule } from "../components/ContentContainer/PainModule/PainContainer";
import { SideBar } from "../components/QuickAccess/QuickAccessBar";
import { setInitialModule } from "../storage/Application/ApplicationStorage";
import { ModuleType } from "../storage/Application/ApplicationTypes";
import { ApplicationData } from "../storage/Store";

export const ModuleContainer = () =>
{
    const applicationState = useSelector(ApplicationData);

    function containerSwitch(module:ModuleType)
    {
        switch(module)
        {
            case "CARDS":
                return <CardsModule/>
            case "PAIN":
                return <PainModule/>
            case "DRAW":
                return <DrawModule/>
            default:
                return <></>
        }
    }
    return(
        <>
        <SideBar side ={"left"}/>
        {containerSwitch(applicationState.selectedModule)}
        <SideBar side ={"right"}/>
        </>
    )
}