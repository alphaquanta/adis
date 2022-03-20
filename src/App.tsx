import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThemeProvider from 'react-native-elements/dist/config/ThemeProvider';
import { MainContainer } from './components/ContentContainer/MainContainer/MainContainer';
import { SideBar } from './components/QuickAccess/QuickAccessBar';
import { theme } from './Theme/theme';
import SystemNavigationBar from "react-native-system-navigation-bar";
import Orientation from 'react-native-orientation-locker';


export default function App() {
  useEffect(()=> 
  {
    SystemNavigationBar.immersive()
    Orientation.lockToLandscape()
  },[])
  return (
    <ThemeProvider theme={theme}>
    <View style={styles.container}>
      <SideBar/>
      <MainContainer/>
      <SideBar/>
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#fff'
  },
});
