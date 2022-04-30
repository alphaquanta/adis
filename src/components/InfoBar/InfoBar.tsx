import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../Theme/theme';
import {format} from 'date-fns'
import tr from 'date-fns/locale/tr'
import { useSelector,useDispatch } from 'react-redux';
import { UserData } from '../../storage/Store';


export const InfoBar = () => {
    const [dateTime,setDateTime] = useState<Date>(new Date())
    const userData = useSelector(UserData)
    useEffect(() => 
    {
    },[])
    return(
      <View style={styles.InfoBarContainer}>
      <View style={styles.InfoBarDataColumn}><Text style={styles.InfoBarDataColumnLabel} adjustsFontSizeToFit={true} numberOfLines={1}>{userData.name} {userData.surname}</Text></View>
      <View style={styles.InfoBarDataColumn}><Text style={styles.InfoBarDataColumnLabel} adjustsFontSizeToFit={true} numberOfLines={1}>{format(dateTime,'EEEE',{locale:tr})}</Text></View>
      <View style={styles.InfoBarDataColumn}><Text style={styles.InfoBarDataColumnLabel} adjustsFontSizeToFit={true} numberOfLines={1}>{format(dateTime,'HH:MM',{locale:tr})}</Text></View>
      <View style={styles.InfoBarDataColumn}><Text style={styles.InfoBarDataColumnLabel} adjustsFontSizeToFit={true} numberOfLines={1}>{format(dateTime,'dd/MM/yyyy',{locale:tr})}</Text></View>
      </View>
    )
  }
  const styles = StyleSheet.create({
      InfoBarContainer:{
        flexDirection:"row",
        width:"100%",
        height:"5%",
        backgroundColor: theme.colors?.primary,
      },
      InfoBarDataColumn:{
        width:"25%",
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center"
      },
      InfoBarDataColumnLabel:
      {
        fontWeight:"bold",
        textShadowColor: "#d9d9d9",
        textShadowRadius:0.25,
      }
    });
    