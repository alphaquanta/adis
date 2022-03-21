import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { PlaceHolder, theme } from '../../../Theme/theme';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import Tts from 'react-native-tts';
import { Image } from 'react-native-elements';


export const CardItem = (...props:any) => {


    async function OnClick(...params:any)
    {

    }

    async function OnLongPress(...params:any)
    {
        Tts.stop();
        Tts.speak(props?.Data?.TTSText ?? "Kart")
    }

    return(
        <View style={styles.CardItemWrapper}>
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onLongPress={OnLongPress}
        onPress={OnClick}>
        <View 
        style={styles.QuickButtonContentWrapper}
        >
        <Image
        source={{uri:PlaceHolder}}
        style={styles.ButtonImage}
        />
        <View style={styles.QuickButtonLabelContainer}>
        <Text style={styles.QuickButtonLabel} adjustsFontSizeToFit={true} numberOfLines={1}>Hızlı Menü Butonu</Text>
        </View>
        </View>
        </TouchableHighlight>
        </View>
    )
}


  const styles = StyleSheet.create({
    CardItemWrapper:
    {
        width:vw(15),
        height:vw(15) + 20,
        borderColor:theme.colors?.primary,
        borderWidth:1,
        borderRadius:5,
        marginVertical:25,
        marginHorizontal:10,
    
    },
    QuickAccessButton: {
        height:"25%",
        aspectRatio: .9,
        maxWidth:"90%",
        alignSelf:"center",
        borderWidth:1,
        borderColor:theme.colors?.primary,
        borderRadius:5,
        shadowColor:"#000000",
        shadowRadius:5,
        shadowOpacity:0.5,
    },
    ButtonImage:
    {
        width:"100%",
        aspectRatio:1,
    },
    QuickButtonContentWrapper:
    {
        width:"100%",
        height:"100%",
        padding:5,
    },
    QuickButtonLabelContainer:
    {
        flexGrow:1,
        justifyContent:"center",
        alignContent:"center",
    },
    QuickButtonLabel:
    {
        textAlign:"center",
        fontWeight:"bold",
    }
  });