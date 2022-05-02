import React, { useState } from "react"
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { Button, colors } from "react-native-elements"
import { theme } from "../../../Theme/theme"
import { painCards } from "./PainButtonData"
import { PainDegree } from "./PainDegree"
import { PainIndicator } from "./PainIndicator"
import { PainTypeButton } from "./PainTypeButton"



export const PainModule = () =>
{

   const [pvalue, setValue] = useState(0);
    return(
    <View style={styles.PainContainer}>
        <View style={styles.PainDegree}>
            <PainDegree pvalue = {1} setValue = {setValue}/>
            <PainDegree pvalue = {2} setValue = {setValue}/>
            <PainDegree pvalue = {3} setValue = {setValue}/>
            <PainDegree pvalue = {4} setValue = {setValue}/>
            <PainDegree pvalue = {5} setValue = {setValue}/>
            <PainDegree pvalue = {6} setValue = {setValue}/>
            <PainDegree pvalue = {7} setValue = {setValue}/>
            <PainDegree pvalue = {8} setValue = {setValue}/>
            <PainDegree pvalue = {9} setValue = {setValue}/>
            <PainDegree pvalue = {10} setValue = {setValue}/>
        </View>
            <View style={styles.AreaSelection}>
                <PainIndicator pvalue = {pvalue} />
            </View>
        <View style={styles.ProblemSelector}>
            {painCards.map((item) => 
            {
                return <PainTypeButton key={item.uuid} cardData = {item}/>
            })
            }
        
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
    PainDegree:
    {
        flex:0.2,
        flexDirection:"row",
        zIndex:3,
        justifyContent:"space-evenly",
        alignItems:"center",
        marginBottom:10,
        borderBottomColor:theme.colors?.divider,
        borderBottomWidth:1,
        
    },
    ProblemSelector:
    {
        flex:.35,
        flexDirection:"row",
        backgroundColor: "#FBFEF9",
        zIndex:3,
        
    }
    
    
})