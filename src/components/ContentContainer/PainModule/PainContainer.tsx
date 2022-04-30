import React, { useState } from "react"
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { Button, colors } from "react-native-elements"
import { theme } from "../../../Theme/theme"
import { PainIndicator } from "./PainIndicator"
import PainSlider from "./PainSlider"
import { PainTypeButton } from "./PainTypeButton"



export const PainModule = () =>
{

   const [pvalue, setValue] = useState(0);
    return(
    <View style={styles.PainContainer}>
        <View style={styles.PainSlider}>
            <PainSlider pvalue = {pvalue} setValue = {setValue}/>
        </View>
            <View style={styles.AreaSelection}>
                <PainIndicator pvalue = {pvalue} />
            </View>
        <View style={styles.ProblemSelector}>
            <PainTypeButton/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    PainContainer:
    {
        flex: 1,
        width:"100%",
        height:"100%",
        flexDirection: 'column',
        borderLeftColor: theme.colors?.divider,
        borderLeftWidth: 1,
        borderRightColor: theme.colors?.divider,
        borderRightWidth: 1,
    },
    AreaSelection:
    {
        flex:1,
    },
    PainSlider:
    {
        flex:0.2,
        paddingLeft:"10%",
        paddingRight:"10%",
        backgroundColor: "#FBFEF9",
        zIndex:3
    },
    ProblemSelector:
    {
        flex:.35,
        backgroundColor: "#FBFEF9",
        zIndex:3,
        paddingLeft:10,
        paddingRight:10
    }
    
    
})