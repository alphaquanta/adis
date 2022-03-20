import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../Theme/theme';
import { QuickAccessButton } from './QuickAccessButton';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export const SideBar = (props:any) => {


    return(
        <View
        style={styles.SideBar}
        >
        <QuickAccessButton/>
        <QuickAccessButton/>
        <QuickAccessButton/>
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
      backgroundColor:theme.colors?.secondary
      
    },
  });
  