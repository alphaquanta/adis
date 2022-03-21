import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../../Theme/theme';
import {format} from 'date-fns'
import tr from 'date-fns/locale/tr'
import { InfoBar } from '../../InfoBar/InfoBar';
import { TTS } from '../../TTS/TTSChips';
import { CardItem } from './CardNavItem';


export const CardsModule = () => {


    return(
        <View
        style={styles.MainContainer}
        >
      <TTS/>
      <ScrollView contentContainerStyle = {styles.CardsContainer}>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      flexDirection: 'column',
      borderLeftColor: theme.colors?.divider,
      borderLeftWidth: 1,
      borderRightColor: theme.colors?.divider,
      borderRightWidth: 1,
    },
    CardsContainer:{
      flexDirection:"row",
      flexWrap:"wrap",
      backgroundColor:theme.colors?.secondary,
      justifyContent:"space-around",
      paddingBottom:50,
      paddingHorizontal:50
    }
  });
  