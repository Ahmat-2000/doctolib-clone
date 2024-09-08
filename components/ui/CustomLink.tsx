import { Pressable, StyleSheet, TextStyle, ViewStyle,   } from 'react-native';
import React, { PropsWithChildren, useState } from 'react';
import { Link } from 'expo-router';
import { primaryColor } from '../colors';
import Paragraph from './Paragraph';

type propsType = {
  containerBgColor: string
  url: string
};

const CustomLink : React.FC< PropsWithChildren<propsType> > = (props ) : React.JSX.Element => {
  const [bgColor, setBgColor] = useState('transparent'); 
  const defaultPressIn = () => setBgColor(props.containerBgColor);
  return (
    <Link href={props.url} asChild>
      <Pressable
      onLongPress={defaultPressIn} 
      onPressIn={defaultPressIn} 
      onPressOut={() => setBgColor("transparent")} 
      style={{...styles.container, backgroundColor: bgColor}}
      >
        {props.children}
      </Pressable>
    </Link>
  )
};

export default CustomLink;

type styleType = {
  container: ViewStyle
};
const styles: styleType = StyleSheet.create({
  container:{
    borderRadius: 10 , 
    paddingHorizontal: 10, 
    paddingVertical: 5
  },

});
