import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider, Text, Icon } from 'react-native-elements';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

type SlidersComponentProps = {};

const PainSlider: React.FunctionComponent<SlidersComponentProps> = () => {
  const [value, setValue] = useState(0);
  const [vertValue, setVertValue] = useState(0);

  const interpolate = (start: number, end: number) => {
    let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const color = () => {
    let r = interpolate(0, 255);
    let g = interpolate(255, 0);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <>
    <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={10}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 10, backgroundColor: 'transparent'  }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
        children: (
            <Icon
            name="heartbeat"
            type="font-awesome"
            size={vh(4)}
            reverse
            containerStyle={{ bottom: vh(4), right: vh(4) }}
            color={color()} tvParallaxProperties={undefined}              />
        ),
        }}
    />
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  verticalContent: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    height: 500,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  }
});

export default PainSlider;