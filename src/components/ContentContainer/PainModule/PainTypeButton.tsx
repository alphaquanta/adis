import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { PlaceHolder, theme } from '../../../Theme/theme';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import Tts from 'react-native-tts';
import { Image } from 'react-native-elements';
import { Card, PainProblemCard } from '../../../storage/Card/CardTypes';
import { navigateBack, setSelectedCard } from '../../../storage/Card/CardStorage';
import { useDispatch } from 'react-redux';
import { addChip } from '../../../storage/TTSChip/ChipStorage';
import { painCards } from './PainButtonData';

export const PainTypeButton = (props:any) =>{


    const dispatch = useDispatch()

    async function OnClick(...params:any)
    {
            Tts.stop();
            Tts.speak((props?.cardData as PainProblemCard)?.cardName ?? "Rahatsızlık")
    }



    return(
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={OnClick}
        style ={styles.ButtonContainer}
        >
        <>
        <View style={{alignContent:"center",justifyContent:"center"}}>
        <Image
        source={{uri:(props?.cardData as PainProblemCard)?.data ?? PlaceHolder}}
        style={styles.ButtonImage}
        />
        </View>
        <View style={styles.QuickButtonLabelContainer}>
        <Text style={styles.QuickButtonLabel} adjustsFontSizeToFit={true} numberOfLines={1}>{(props?.cardData as Card)?.cardName ?? "TEST"}</Text>
        </View>
        </>
        
        </TouchableHighlight>

    )
} 


const styles = StyleSheet.create({
    ButtonContainer:{
    height:"100%",
    aspectRatio:1,
    borderWidth:1,
    borderColor:theme.colors?.primary,
    shadowColor:"#000000",
    shadowRadius:1,
    shadowOpacity:0.5,
    maxWidth:`${(100/painCards.length)}%`
    },
    ButtonImage:{
    width:"80%",
    aspectRatio:1,
    resizeMode:"cover",
    marginTop:"5%",

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