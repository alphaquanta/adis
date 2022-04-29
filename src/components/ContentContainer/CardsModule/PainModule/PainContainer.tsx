import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-elements"
import { theme } from "../../../../Theme/theme"
import PainSlider from "./PainSlider"



export const PainModule = () =>
{

    return(
    <View style={styles.PainContainer}>
        <View style ={styles.Title}>
            <Text>ACI/AĞRI DERECESİ</Text>
        </View>
        <View style={styles.PainSlider}>
            <PainSlider/>
        </View>
        <View style={styles.AreaSelection}></View>
        <View style={styles.ProblemSelector}></View>
    </View>
    )
}

const styles = StyleSheet.create({
    PainContainer:
    {
        flex: 1,
        flexDirection: 'column',
        borderLeftColor: theme.colors?.divider,
        borderLeftWidth: 1,
        borderRightColor: theme.colors?.divider,
        borderRightWidth: 1,
    },
    AreaSelection:
    {
        flex:.8,
        backgroundColor:"red"
    },
    Title:
    {
        flex:.1,
        justifyContent:"center",
        alignItems:"center"
    },
    PainSlider:
    {
        flex:.1,
        paddingLeft:"10%",
        paddingRight:"10%",
        
    },
    ProblemSelector:
    {
        flex:.2,
        backgroundColor:"green"
    }
    
    
})