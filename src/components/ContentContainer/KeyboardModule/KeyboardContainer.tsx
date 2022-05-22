import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ClearChipsIcon, SpeechIcon, theme } from '../../../Theme/theme';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Button, Chip, colors, Icon, Image, Input } from 'react-native-elements';
import { color, ScreenHeight } from 'react-native-elements/dist/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { clearChips, removeChip,addChip } from '../../../storage/TTSChip/ChipStorage';
import { ChipBucketData } from '../../../storage/Store';
import Tts from 'react-native-tts';

export const KeyboardModule = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState<string>("");

    async function addWords (){
        inputData.split(' ').map(part => dispatch(addChip(part)));
        setInputData("");
    }

    async function readWords(){
        try{
            Tts.speak(inputData);
        }
        catch(ex)
        {
            console.log("Keyboard can't start the TTS")
        }
    }
    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style ={styles.KeyboardContainer}>
        <Button
        containerStyle = {styles.readButton}
        type='outline'
        onPress={readWords}
        iconPosition='top'
        icon={
        <Icon
            name="arrow-right"
            size={28}
            color={theme.colors?.primary} 
            tvParallaxProperties={undefined}
        />
        }
        title="OKU"
        />
            <Input 
            autoCompleteType={"undefined"}
            containerStyle={styles.inputField}
            multiline={true}
            placeholder = "Buraya dokunun ve yazmaya başlayın"
            placeholderTextColor={theme.colors?.warning}
            onChangeText={value => setInputData(value)}
            value = {inputData}
            />
        <Button
        containerStyle = {styles.readButton}
        type='outline'
        onPress={addWords}
        iconPosition='top'
        icon={
        <Icon
            name="add"
            size={28}
            color={theme.colors?.primary} 
            tvParallaxProperties={undefined}
        />
        }
        title="EKLE"
        />
        </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({
    KeyboardContainer:
    {
        flex: 1,
        width:"100%",
        height:"100%",
        flexDirection: 'row',
        borderLeftColor: theme.colors?.divider,
        borderLeftWidth: 1,
        borderRightColor: theme.colors?.divider,
        borderRightWidth: 1,
    },
    inputField:
    {
        flex:1,
        height:"100%",
        textAlignVertical:'top'
    },
    readButton:
    {
        width:"10%",
        aspectRatio:1
    }
})



