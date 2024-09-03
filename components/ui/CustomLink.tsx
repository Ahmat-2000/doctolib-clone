import { Pressable, StyleSheet, TextStyle, ViewStyle,  } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { primaryColor } from '../colors';
import Paragraph from './Paragraph';

type propsType = {
  bgColor: string
  textStyle?: TextStyle
};

const CustomLink : React.FC<propsType> = (props: propsType) : React.JSX.Element => {
  const [bgColor, setBgColor] = useState('transparent'); 
  const defaultPressIn = () => setBgColor(props.bgColor);
  return (
    <Link href="" asChild>
      <Pressable
      onLongPress={defaultPressIn} 
      onPressIn={defaultPressIn} 
      onPressOut={() => setBgColor("transparent")} 
      style={{...styles.container, backgroundColor: bgColor}}
      >
        <Paragraph text="S'inscrire" styles={{...styles.text, ...props.textStyle }}/>
      </Pressable>
    </Link>
  )
};

export default CustomLink;

type styleType = {
  text: TextStyle,
  container: ViewStyle
};
const styles: styleType = StyleSheet.create({
  container:{
    borderRadius: 10 , 
    paddingHorizontal: 10, 
    paddingVertical: 5
  },
  text: {
    color: primaryColor, 
    fontWeight:"bold"
  }
});
