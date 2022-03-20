import React from 'react';
import { StyleSheet, TouchableHighlight, View ,Text} from 'react-native';
import { Image } from 'react-native-elements';
import { PlaceHolder, theme } from '../../Theme/theme';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export const QuickAccessButton = (props:any) => {

    async function OnClick(...params:any)
    {
        console.log("pressed quick button")
    }
    return(
        
        <View
        style={styles.QuickAccessButton}
        >
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
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
  