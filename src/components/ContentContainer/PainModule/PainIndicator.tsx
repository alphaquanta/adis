import React, { useEffect, useRef, useState } from "react";
import { Animated, GestureResponderEvent, Image, PanResponder, StyleSheet, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View } from "react-native";
import { useSelector } from "react-redux";
import { UserData } from "../../../storage/Store";
import { famaleBodyOutline, maleBodyOutline, TargetIcon, theme } from "../../../Theme/theme";


export const PainIndicator = (props:any) =>
{
  const userData = useSelector(UserData)
  const [indicatorPosition,setIndicatorPosition] = useState({x:0,y:0})


  const interpolate = (start: number, end: number) => {
    let k = (props.pvalue - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const interpolateSize = (start: number, end: number) => {
    let k = (props.pvalue - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 150;
  };


const color = () => {
  let r = interpolate(0, 255);
  let g = interpolate(255, 0);
  let b = interpolate(0, 0);
  return `rgb(${r},${g},${b})`;
};
    return (
      <>
      <TouchableWithoutFeedback  style={{height:"100%",width:"100%"}} 
      onPress={
        (event:GestureResponderEvent) => {
          setIndicatorPosition(
            {
              x:event.nativeEvent.locationX,
              y:event.nativeEvent.locationY
            })}}>

      <View style={{height:"100%",width:"100%"}}>
      <Image 
        source={{"uri" : userData.gender =="FAMALE" ? famaleBodyOutline : maleBodyOutline}}
        style={{flex:1, resizeMode:"contain",backgroundColor:theme.colors?.secondary}}/>
      </View>
      </TouchableWithoutFeedback>
      <View pointerEvents="none" style={{height:interpolate(75,100),width:interpolate(75,100),position:"absolute",left:indicatorPosition.x-interpolate(75,100)/2,top:indicatorPosition.y-interpolate(75,100)/2}}>
        <Image
          source={{"uri" : TargetIcon}}
          style={{width:"100%",height:"100%", resizeMode:"contain",zIndex:1, tintColor:color()}}
        />
      </View>
      </>
    )
}
const styles = StyleSheet.create({

});
