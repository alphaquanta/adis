import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThemeProvider from 'react-native-elements/dist/config/ThemeProvider';
import { CardsModule } from './components/ContentContainer/CardsModule/CardsContainer';
import { SideBar } from './components/QuickAccess/QuickAccessBar';
import { theme } from './Theme/theme';
import SystemNavigationBar from "react-native-system-navigation-bar";
import Orientation from 'react-native-orientation-locker';
import Tts from 'react-native-tts';
import { InfoBar } from './components/InfoBar/InfoBar';


export default function App() {
  useEffect(()=> 
  {
    SystemNavigationBar.stickyImmersive()
    Orientation.lockToLandscape()
    CheckAndSetTTS()
    setInterval(RegularChecks,10000)
  },[])

  async function CheckAndSetTTS():Promise<Boolean> 
  {
    let isAvaiable: Boolean = false
    Tts.voices().then(voices => {
      isAvaiable = voices.some((voice) => 
      {
        if(voice.language === "tr-TR" && !voice.notInstalled && !voice.networkConnectionRequired)
        {
          Tts.speak("Uygulama Başlatılıyor")
          return true
        }
        else
        return false
      })
    });
    if(isAvaiable)
    {
      await Tts.setDefaultLanguage('tr-TR')
    }
    return isAvaiable
  } 

  async function RegularChecks()
  {
    SystemNavigationBar.stickyImmersive()
  }
  return (
    <ThemeProvider theme={theme}>
    <InfoBar/>
    <View style={styles.container}>
      <SideBar/>
      <CardsModule/>
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
