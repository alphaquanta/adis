import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import { theme } from '../../../Theme/theme';
import { useSelector } from 'react-redux';




export const DrawModule = (props) => 
{
    return (
        <View style = {styles.MainContainer}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <RNSketchCanvas
            containerStyle={{ backgroundColor: 'white', flex: 1 }}
            canvasStyle={{ backgroundColor: 'white', flex: 1 }}
            defaultStrokeIndex={5}
            defaultStrokeWidth={5}
            undoComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Geri Al</Text></View>}
            clearComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Temizle</Text></View>}
            eraseComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Silgi</Text></View>}
            strokeComponent={color => (
              <View style={[{ backgroundColor: color ,borderStyle:"dashed",borderWidth:1,borderColor:"black"}, styles.strokeColorButton]} />
            )}
            strokeSelectedComponent={(color, index, changed) => {
              return (
                <View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
              )
            }}
            strokeWidthComponent={(w) => {
              return (<View style={styles.strokeWidthButton}>
                <View  style={{
                  backgroundColor: 'white', marginHorizontal: 2.5,
                  width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                }} />
              </View>
            )}}
            saveComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Kaydet</Text></View>}
            savePreference={() => {
              return {
                folder: 'adisdrawings',
                filename: new Date().toISOString(),
                transparent: false,
                imageType: 'png'
              }
            }}
          />
        </View>
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
      },
        strokeColorButton: {
            marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15
            },
        strokeWidthButton: {
            marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
            justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
        },
        functionButton: {
            marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
            backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
        }
  });
  



