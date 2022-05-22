import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ClearChipsIcon, SpeechIcon, theme } from '../../Theme/theme';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Chip, colors, Image } from 'react-native-elements';
import { color, ScreenHeight } from 'react-native-elements/dist/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { clearChips, removeChip } from '../../storage/TTSChip/ChipStorage';
import { ApplicationData, ChipBucketData } from '../../storage/Store';
import Tts from 'react-native-tts';
import { toggleKeyboard } from '../../storage/Application/ApplicationStorage';


export const TTS = () =>
{
    const dispatch = useDispatch();
    const chips = useSelector(ChipBucketData)
    const applicationState = useSelector(ApplicationData);
    async function showKeyboard()
    {
        dispatch(toggleKeyboard())
    }
    async function ReadTTS(...params:any[])
    {
        if(applicationState.showKeyboard == false)
        {
        const sentence = chips.map(item => item.chipWord).join(' ');
        Tts.stop()
        Tts.speak(sentence);
    }
    else
    dispatch(toggleKeyboard())
    }
    async function ClearChips(...params:any[])
    {
        dispatch(clearChips())
    }
    return(
        <View style={styles.TTSContainer}>
        <View style={styles.TTSButton}>
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={ReadTTS}
        onLongPress={showKeyboard}
        >
        <View style={styles.TTSButtonWrapper}>
        <Image
        style={styles.TTSButtonIcon}
        source={{uri:SpeechIcon}}
        />
        {
        applicationState.showKeyboard ? 
        <Text style = {styles.TTSButtonLabel} adjustsFontSizeToFit={true} numberOfLines={1}>Yazmayı Bitir</Text> 
        :
        <Text style = {styles.TTSButtonLabel} adjustsFontSizeToFit={true} numberOfLines={1}>Dinle/Yaz</Text>
        
        }
        </View>
        </TouchableHighlight>
        </View>
        <View style={styles.TTSChipsContainer}>
        <ScrollView contentContainerStyle={styles.TTSChipsScrollView}>
        {
            chips.map(item => <TTSChip key = {item.chipID} chip = {item} />)
        }
        </ScrollView>
        </View>
        <View style={styles.TTSButton}>
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => ClearChips()}>
        <View style={styles.TTSButtonWrapper}>    
        <Image
        style={styles.TTSButtonIcon}
        source={{uri:ClearChipsIcon}}
        />
        <Text style = {styles.TTSButtonLabel} adjustsFontSizeToFit={true}  numberOfLines={1}>Temizle</Text>
        </View>
        </TouchableHighlight>
        </View>
        </View>
    )
}


const TTSChip = (props:any) => 
{
    const dispatch = useDispatch();
    //This requires connection to the redux storage and passing relevant shit to that
    return(
        <>
        <Chip
            title={`${props.chip.chipWord}`}
            type='outline'
            containerStyle={{marginVertical:10,marginHorizontal:5}}
            icon={{
                name:"close",
                type:"font-awesome",
                size:20,
                color:colors.primary
            }}
            iconRight
            onPress={() => dispatch(removeChip(props.chip.chipID))}
         />
        </>
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
  