import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../../Theme/theme';
import { useSelector } from 'react-redux';




export const DrawModule = (props) => 
{
    return (
        <View style = {styles.MainContainer}>

        </View>
    )
}



const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        flexDirection: 'column',
        borderLeftColor: theme.colors?.divider,
        borderLeftWidth: 1,
        borderRightColor: theme.colors?.divider,
        borderRightWidth: 1,
        backgroundColor:"red"
      },
  });
  



