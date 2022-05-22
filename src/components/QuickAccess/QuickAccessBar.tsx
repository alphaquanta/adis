import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../Theme/theme';
import { QuickAccessButton } from './QuickAccessButton';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { useSelector } from 'react-redux';
import { ApplicationData } from '../../storage/Store';

export const SideBar = (props:any) => {
  const applicationState = useSelector(ApplicationData)
  const baseIndex = props?.side == "left" ? 0 : 3  
  
  const ModuleChangeHandler = (side:string) => 
  {
    if(side === "left")
    {
      return applicationState.selectedModule === "PAIN" ? <QuickAccessButton buttonIndex = {6}/> : <QuickAccessButton buttonIndex = {baseIndex+1}/> 
    }
    else if(side === "right")
    {
      return applicationState.selectedModule === "DRAW" ? <QuickAccessButton buttonIndex = {6}/> : <QuickAccessButton buttonIndex = {baseIndex+1}/> 
    }
  }
    return(
        <View
        style={styles.SideBar}
        >
        
        <QuickAccessButton buttonIndex = {baseIndex}/>
        {ModuleChangeHandler(props?.side)}
        <QuickAccessButton buttonIndex = {baseIndex+2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    SideBar: {
      flex: .20,
      height:vh(100),
      maxWidth:250,
      flexDirection: 'column',
      justifyContent:"space-evenly",
      backgroundColor:theme.colors?.secondary,
      zIndex:3
      
    },
  });
  