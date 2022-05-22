import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../../Theme/theme';
import { TTS } from '../../TTS/TTSChips';
import { CardItem } from './CardNavItem';
import { useSelector } from 'react-redux';
import { ApplicationData, CardDeck, UserData } from '../../../storage/Store';
import { KeyboardModule } from '../KeyboardModule/KeyboardContainer';


export const CardsModule = () => {
  const deckData = useSelector(CardDeck)
  const userState = useSelector(UserData);
  const applicationState = useSelector(ApplicationData)
    return(
        <View
        style={styles.MainContainer}
        >
      {userState.isTTS ? <TTS/> : <></>}
      {applicationState.showKeyboard ? <KeyboardModule/> : <></>}
      <ScrollView contentContainerStyle = {styles.CardsContainer}>
        {
          applicationState.showKeyboard ? 
          <></> : 
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
  