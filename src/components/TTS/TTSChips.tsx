import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ClearChipsIcon, SpeechIcon, theme } from '../../Theme/theme';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Chip, colors, Image } from 'react-native-elements';
import { color, ScreenHeight } from 'react-native-elements/dist/helpers';


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
        <Text style = {styles.TTSButtonLabel} adjustsFontSizeToFit={true} numberOfLines={1}>Dinle</Text>
        </View>
        </TouchableHighlight>
        </View>
        <View style={styles.TTSChipsContainer}>
            <ScrollView contentContainerStyle={styles.TTSChipsScrollView}>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>
            <TTSChip/>




            </ScrollView>
        </View>
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
        <Text style = {styles.TTSButtonLabel} adjustsFontSizeToFit={true} numberOfLines={1}>Temizle</Text>
        </View>
        </TouchableHighlight>
        </View>
        </View>
    )
}


const TTSChip = () => 
{
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const rand = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam vel beatae quae repudiandae magnam labore dolor quaerat! Veritatis odit nemo qui maiores blanditiis magni esse harum, unde expedita quasi sunt officiis quam voluptates illum exercitationem. Reiciendis, earum. Blanditiis inventore possimus dolores assumenda atque officiis nobis? Rerum aspernatur impedit deserunt.`.split(' ')
    return(
        <Chip
        title={`${rand[random(0,rand.length-1)]}`}
        type='outline'
        containerStyle={{marginVertical:10,marginHorizontal:5}}
        icon={{
            name:"close",
            type:"font-awesome",
            size:20,
            color:colors.primary
        }}
        iconRight
        onPress={() => console.log("CHİP")}
        />
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
        borderBottomWidth:.50,
        paddingVertical:10
    },
    TTSButton:
    {
        aspectRatio:1,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:'center',
        borderWidth:1,
        borderColor:"black",
        borderRadius:5,
        margin:5
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
        aspectRatio:1,
    },
    TTSChipsContainer:
    {
     flex:1,
     padding:5,
     borderColor:"black",
     borderWidth:0.5
    },
    TTSChipsScrollView:
    {
      flexDirection:"row",
      justifyContent:"flex-start",
      flexWrap:'wrap'
    },
    TTSButtonLabel:
    {
        fontWeight:"900"
    }
  });
  