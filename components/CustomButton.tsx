import { View, Text, Pressable, StyleSheet, TextStyle, ViewStyle, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { primaryColor } from './colors';

type buttonPropsType = {
  title: string,
  onPress : () => void,
  onPressOut ? : () => void,
  onPressIn ? : () => void,
  onLongPress ? : () => void,
  color?: string,
  bgColor?: string,
  buttonStyle ?: ViewStyle ,
  textStyle ?: TextStyle ,
};

type styleProp = {
  button : ViewStyle,
  text : TextStyle,
};


export default function CustomButton(props : buttonPropsType) {
  
  const opacityValue = useRef(new Animated.Value(1)).current; // Initial opacity value of 1
  
  const defaultPress = () => {};

  const defaultOnPressIn = () => {
    Animated.timing(opacityValue, {
      toValue: 0.7, // Target opacity
      duration: 500, // Duration of the animation
      useNativeDriver: true,
    }).start(() => Animated.timing(opacityValue, {
      toValue: 1, // Return to full opacity
      duration: 500, // Duration of the animation
      useNativeDriver: true,
    }).start());
  };

  return (
    <Pressable 
      onPressIn={props.onPressIn || defaultOnPressIn} 
      onPressOut={props.onPressOut || defaultPress} 
      onPress={props.onPress || defaultPress} 
      onLongPress={props.onLongPress || defaultPress }
    >
      <Animated.View 
        style={{
          ...styles.button, 
          backgroundColor: props.bgColor || primaryColor, ...props.buttonStyle, 
           opacity: opacityValue
        }}
      >
        <Text   
          style={{...styles.text, color: props.color || "white", ...props.textStyle}}
        >
          {props.title}
        </Text>
      </Animated.View>
    </Pressable>
  )
};

const styles : styleProp = StyleSheet.create({
  button : {
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  text :{
    fontWeight: 'bold',
    textTransform: 'uppercase', 
    letterSpacing: 1,
  },
});