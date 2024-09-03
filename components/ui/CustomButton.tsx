import { Text, Pressable, StyleSheet, TextStyle, ViewStyle, Animated } from 'react-native';
import React from 'react';
import { primaryColor } from '../colors';
import useOpacityAnimation from '../custom-hook/useOpacityAnimation';

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

type styleType = {
  button : ViewStyle,
  text : TextStyle,
};


export default function CustomButton(props : buttonPropsType) {
  const {opacityValue, startAnimation } = useOpacityAnimation({startOpacity: 1, endOpacity: 0.75});
  const defaultPress = () => {};

  return (
    <Pressable 
      onPressIn={props.onPressIn || startAnimation} 
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

const styles : styleType = StyleSheet.create({
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