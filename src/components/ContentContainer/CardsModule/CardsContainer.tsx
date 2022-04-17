import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../../Theme/theme';
import {format} from 'date-fns'
import tr from 'date-fns/locale/tr'
import { InfoBar } from '../../InfoBar/InfoBar';
import { TTS } from '../../TTS/TTSChips';
import { CardItem } from './CardNavItem';
import { useSelector } from 'react-redux';
import { CardDeck } from '../../../storage/Store';


export const CardsModule = () => {
  const deckData = useSelector(CardDeck)
  console.log("Card Module call")
  console.log(deckData.deck.length)
    return(
        <View
        style={styles.MainContainer}
        >
      <TTS/>
      <ScrollView contentContainerStyle = {styles.CardsContainer}>
        {
          deckData.deck.map(card =>
            {
              if(card.cardParrent == deckData.selectedCard)
              {
                return <CardItem key = {card.cardUUID} cardData = {card}/>
              }
            })
        }
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
  