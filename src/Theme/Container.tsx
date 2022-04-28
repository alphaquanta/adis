import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsModule } from "../components/ContentContainer/CardsModule/CardsContainer";
import { setInitialModule } from "../storage/Application/ApplicationStorage";
import { ApplicationData } from "../storage/Store";

export const ModuleContainer = () =>
{
    const applicationState = useSelector(ApplicationData);
    return(
        <>  
        {applicationState?.selectedModule == "CARDS" || applicationState?.selectedModule == "CARDS_TTS" ? <CardsModule/> : <></>}
        </>
    )
}