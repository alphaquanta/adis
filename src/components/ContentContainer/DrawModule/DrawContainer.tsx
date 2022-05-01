import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import {
  Canvas,
} from '@benjeau/react-native-draw';
import {
    DEFAULT_COLORS,  
    BrushProperties,
    CanvasRef,
    DrawingTool,
    CanvasControls,
} from '@benjeau/react-native-draw-extras'
import { theme } from '../../../Theme/theme';

export const DrawModule = (props) => 
{
    const canvasRef = useRef<CanvasRef>(null);
  
    const [color, setColor] = useState(DEFAULT_COLORS[0][0][0]);
    const [thickness, setThickness] = useState(5);
    const [opacity, setOpacity] = useState(1);
    const [tool, setTool] = useState(DrawingTool.Brush);
    const [visibleBrushProperties, setVisibleBrushProperties] = useState(false);
  
    const handleUndo = () => {
        console.log("undo call")
      canvasRef.current?.undo();
    };
  
    const handleClear = () => {
      canvasRef.current?.clear();
    };
  
    const handleToggleEraser = () => {
      setTool((prev) =>
        prev === DrawingTool.Brush ? DrawingTool.Eraser : DrawingTool.Brush
      );
    };
  
    const [overlayOpacity] = useState(new Animated.Value(0));
    const handleToggleBrushProperties = () => {
      if (!visibleBrushProperties) {
        setVisibleBrushProperties(true);
  
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          setVisibleBrushProperties(false);
        });
      }
    };
  
    return (
      <>

        <View style={styles.DrawContainer}>
        <Canvas
          ref={canvasRef}
          color={color}
          thickness={thickness}
          opacity={opacity}
          tool={tool}
          
        >
          <CanvasControls
            onUndo={handleUndo}
            onClear={handleClear}
            onToggleEraser={handleToggleEraser}
            onToggleBrushProperties={handleToggleBrushProperties}
            tool={tool}
            color={color}
            opacity={opacity}
            thickness={thickness}
          />
           </Canvas>
          {visibleBrushProperties && (
            <BrushProperties
              color={color}
              thickness={thickness}
              opacity={opacity}
              onColorChange={setColor}
              onThicknessChange={setThickness}
              onOpacityChange={setOpacity}
              style={{
                position: 'absolute',
                bottom: 80,
                left: 0,
                right: 0,
                padding: 10,
                backgroundColor: '#f2f2f2',
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                borderWidth: StyleSheet.hairlineWidth,
                borderBottomWidth: 0,
                borderTopColor: '#ccc',
                opacity: overlayOpacity,
              }}
            />
          )}
       
        </View>
      </>
    );
  };



const styles = StyleSheet.create({
    DrawContainer: {
        flex: 1,
        borderLeftColor: theme.colors?.divider,
        borderLeftWidth: 1,
        borderRightColor: theme.colors?.divider,
        borderRightWidth: 1,
        backgroundColor:"red"
      },
  });
  



