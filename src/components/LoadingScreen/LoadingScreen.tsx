import React, { useEffect } from "react"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { setApplicationState } from "../../storage/Application/ApplicationStorage"
import { ApplicationData } from "../../storage/Store"





export const LoadingScreen = () => 
{
    const applicationState = useSelector(ApplicationData)
    const dispatch = useDispatch();
    useEffect(()=> {
        setTimeout( ()=> 
        {
            dispatch(setApplicationState("READY"))
        },5000)
    })
    return <View>

    </View>
}