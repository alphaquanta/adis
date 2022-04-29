import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsModule } from "../components/ContentContainer/CardsModule/CardsContainer";
import { PainModule } from "../components/ContentContainer/CardsModule/PainModule/PainContainer";
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
            default:
                return <></>
        }
    }
    return(
        <>
        {containerSwitch(applicationState.selectedModule)}
        </>
    )
}