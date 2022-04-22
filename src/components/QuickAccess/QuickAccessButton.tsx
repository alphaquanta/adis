import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableHighlight, View ,Text} from 'react-native';
import { Image } from 'react-native-elements';
import { PlaceHolder, theme } from '../../Theme/theme';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import Tts from 'react-native-tts';
import { useDispatch, useSelector } from 'react-redux';
import { CardDeck } from '../../storage/Store';
import { navigateBack } from '../../storage/Card/CardStorage';
import { Card } from '../../storage/Card/CardTypes';
import Sound from 'react-native-sound';

export const QuickAccessButton = (props:any) => {
    const deckData = useSelector(CardDeck)
    const bIndex = props?.buttonIndex ?? 0
    const dispatchBack = useDispatch();
    const [audio,setAudio] = useState<Sound>();
    useEffect(()=> {
        if(deckData?.deck[bIndex]?.cardQuickButtonType == "QUICK_BUTTON_ALARM")
        {

            try{
                setAudio(new Sound('alarm.wav',Sound.MAIN_BUNDLE));
                console.log("stuff")
            }
            catch(Error)
            {
                console.error("Alarm audio couldn't loaded")
            }
        }
    },[deckData?.deck[bIndex]?.cardQuickButtonType]);

    async function OnClick(...params:any)
    {
        if((deckData?.deck[bIndex])?.cardType == "QUICK_BUTTON" )
        {
            switch((deckData?.deck[bIndex])?.cardQuickButtonType)
            {
                case "QUICK_BUTTON_ALARM":
                    if(!audio?.isPlaying())
                    audio?.play().setNumberOfLoops(-1);
                    else
                    {
                        audio?.stop()
                    }
                    return;
                case "QUICK_BUTTON_BACK":
                    //back in stack
                    dispatchBack(navigateBack())
                    return;
                case "QUICK_BUTTON_NO":
                case "QUICK_BUTTON_YES":
                    Tts.stop();
                    Tts.speak((deckData?.deck[bIndex])?.cardName ?? "Kart")
                    return;
                case "QUICK_BUTTON_PAIN":
                    //switch to pain module
                    return;
            }
        }
    }

    async function OnLongPress(...params:any)
    {
        Tts.stop();
        Tts.speak(props?.Data?.cardName ?? "Kart")
    }

    return(
        
        <View
        style={styles.QuickAccessButton}
        >
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onLongPress={OnLongPress}
        onPress={OnClick}>
        <View 
        style={styles.QuickButtonContentWrapper}
        >
        <Image
        source={{uri:(deckData?.deck[bIndex])?.cardData ?? PlaceHolder}}
        style={styles.ButtonImage}
        />
        <View style={styles.QuickButtonLabelContainer}>
        <Text style={styles.QuickButtonLabel} adjustsFontSizeToFit={true} numberOfLines={1}>{(deckData?.deck[bIndex]).cardName}</Text>
        </View>
        </View>
        </TouchableHighlight>
        </View>

    )
}

const styles = StyleSheet.create({
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
  