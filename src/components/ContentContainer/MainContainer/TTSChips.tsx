import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ClearChipsIcon, SpeechIcon, theme } from '../../../Theme/theme';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Image } from 'react-native-elements';


export const TTS = () =>
{
    async function ReadTTS(...params:any[])
    {
        return;
    }
    async function ClearChips(...params:any[])
    {
        return;
    }
    return(
        <View style={styles.TTSContainer}>
        <View style={styles.TTSButton}>
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={ReadTTS}>
        <View style={styles.TTSButtonWrapper}>
        <Image
        style={styles.TTSButtonIcon}
        source={{uri:SpeechIcon}}
        />
        <Text adjustsFontSizeToFit={true} numberOfLines={1}>Dinle</Text>
        </View>
        </TouchableHighlight>
        </View>
        <View style={styles.TTSChipsContainer}></View>
        <View style={styles.TTSButton}>
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={ReadTTS}>
        <View style={styles.TTSButtonWrapper}>    
        <Image
        style={styles.TTSButtonIcon}
        source={{uri:ClearChipsIcon}}
        />
        <Text adjustsFontSizeToFit={true} numberOfLines={1}>Temizle</Text>
        </View>
        </TouchableHighlight>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    TTSContainer:
    {
        flexDirection:"row",
        width:"100%",
        height: vh(20),
        backgroundColor:theme.colors?.secondary,
        borderBottomColor:theme.colors?.divider,
        borderBottomWidth:.50
    },
    TTSButton:
    {
        height:"100%",
        aspectRatio:1,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"black",
        borderRadius:5,
    },
    TTSButtonWrapper:
    {
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        aspectRatio:1,
    },
    TTSButtonIcon:
    {
        height:"75%",
        aspectRatio:1
    },
    TTSChipsContainer:
    {
     flex:1,
     height:"100%",
    }
  });
  