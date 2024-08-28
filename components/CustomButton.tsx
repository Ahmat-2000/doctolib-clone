import { View, Text, Pressable, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import React, { useState } from 'react';
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

const defaultPress = () => {};

export default function CustomButton(props : buttonPropsType) {

  const [buttonTouchStyle, setButtonTouchStyle] = useState({});
  
  const defaultOnPressIn = () => setButtonTouchStyle({
    opacity: 0.85,
  });
  const defaultOnPressOut = () => setButtonTouchStyle({
    opacity: 1,
  });
  return (
    <Pressable 
      onPressOut={props.onPressOut || defaultOnPressOut} 
      onPressIn={props.onPressIn || defaultOnPressIn} 
      onPress={props.onPress || defaultPress} 
      onLongPress={props.onLongPress || defaultPress }
    >
      <View 
        style={{
          ...styles.button, 
          backgroundColor: props.bgColor || primaryColor, ...props.buttonStyle, 
          ...buttonTouchStyle}}
      >
        <Text   
          style={{...styles.text, color: props.color || "white", ...props.textStyle}}
        >
          {props.title}
        </Text>
      </View>
    </Pressable>
  )
};

const styles : styleProp = StyleSheet.create({
  button : {
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    
  },
  text :{
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
});