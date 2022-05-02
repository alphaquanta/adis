import { clamp } from 'date-fns';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Slider, Text, Icon } from 'react-native-elements';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

type SlidersComponentProps = {};

export const PainDegree = (props:any) => {


  const interpolate = (start: number, end: number) => {
    let k = (props.pvalue - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };
  function setIndicatorValue() {
    props.setValue(props.pvalue)
  }

  function determineRenderIcon()
  {
    switch(props.pvalue)
    {
      case 1:
        return (
          <Icon
          reverse
          name='sentiment-satisfied'
          type='material'
          iconStyle={{fontSize:32}}
          adjustsFontSizeToFit
          color={color()} tvParallaxProperties={undefined}    />
        )
      case 2:
      case 3:
      case 4:
        return (
          <Icon
          reverse
          name='sentiment-neutral'
          type='material'
          iconStyle={{fontSize:32}}
          adjustsFontSizeToFit={true}
          color={color()} tvParallaxProperties={undefined}    />
        )
        case 5:
        case 6:
        case 7:
          return (
            <Icon
            reverse
            name='sentiment-dissatisfied'
            type='material'
            iconStyle={{fontSize:32}}
            adjustsFontSizeToFit
            color={color()} tvParallaxProperties={undefined}    />
          )
          case 8:
          case 9:
          case 10:
            return (
              <Icon
              reverse
              name='sentiment-very-dissatisfied'
              type='material'
              iconStyle={{fontSize:32}}
              adjustsFontSizeToFit
              color={color()} tvParallaxProperties={undefined}    />
            )
    }
  }
  const color = () => {
    let r = interpolate(0, 255);
    let g = interpolate(255, 0);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <>
    <TouchableOpacity style={styles.container}
    onPress = { () => setIndicatorValue()}>
    <View>
      {determineRenderIcon()}
    </View>
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container:
  {
    height:"95%",
    aspectRatio:1,
    maxWidth:"10%",
  }
});
