import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { PlaceHolder, theme } from '../../../Theme/theme';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import Tts from 'react-native-tts';
import { Image } from 'react-native-elements';
import { Card } from '../../../storage/Card/CardTypes';
import { navigateBack, setSelectedCard } from '../../../storage/Card/CardStorage';
import { useDispatch } from 'react-redux';
import { addChip } from '../../../storage/TTSChip/ChipStorage';

export const PainTypeButton = (props:any) =>{


    const dispatch = useDispatch()

    async function OnClick(...params:any)
    {

        if((props?.cardData as Card)?.cardType == "CARD_MENU")
        {
            Tts.stop();
            Tts.speak((props?.cardData as Card)?.cardName ?? "Kart")
            dispatch(setSelectedCard((props?.cardData as Card)?.cardName))
        }
        if((props?.cardData as Card)?.cardType == "CARD_ITEM")
        {
            Tts.stop();
            Tts.speak((props?.cardData as Card)?.cardName ?? "Kart")
        }

    }

    async function OnLongPress(...params:any)
    {

        if((props?.cardData as Card)?.cardType == "CARD_ITEM" ||  (props?.cardData as Card)?.cardType == "CARD_MENU")
        {
            dispatch(addChip(props?.cardData?.cardName))
        }
    }

    return(
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onLongPress={OnLongPress}
        onPress={OnClick}
        style ={styles.ButtonContainer}
        >
        <View style={{alignContent:"center",justifyContent:"center"}}>
        <View>
        <Image
        source={{uri:(props?.cardData as Card)?.cardData ?? PlaceHolder}}
        style={styles.ButtonImage}
        />
        </View>
        <View style={styles.QuickButtonLabelContainer}>
        <Text style={styles.QuickButtonLabel} adjustsFontSizeToFit={true} numberOfLines={1}>{(props?.cardData as Card)?.cardName ?? "TEST"}</Text>
        </View>
        </View>
        </TouchableHighlight>

    )
} 


const styles = StyleSheet.create({
    ButtonContainer:{
    height:"98%",
    aspectRatio:1,
    justifyContent:"center",
    borderWidth:1,
    borderColor:theme.colors?.primary,
    shadowColor:"#000000",
    shadowRadius:1,
    shadowOpacity:0.5,
    },
    ButtonImage:{
    width:"80%",
    aspectRatio:1,
    resizeMode:"contain",
    marginTop:"5%",
    alignItems:"center",
    marginLeft:"10%"

    },
    QuickButtonLabelContainer:{
        justifyContent:"center",
        alignContent:"center",
    },
    QuickButtonLabel:{
        textAlign:"center",
        fontWeight:"bold",
    }
})