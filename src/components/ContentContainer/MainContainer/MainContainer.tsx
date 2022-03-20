import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../../Theme/theme';
import {format} from 'date-fns'
import tr from 'date-fns/locale/tr'
import { InfoBar } from './InfoBar';
import { TTS } from './TTSChips';


export const MainContainer = () => {


    return(
        <View
        style={styles.MainContainer}
        >
      <InfoBar/>
      <TTS/>
      </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      borderLeftColor: theme.colors?.divider,
      borderLeftWidth: 1,
      borderRightColor: theme.colors?.divider,
      borderRightWidth: 1,
    }
  });
  