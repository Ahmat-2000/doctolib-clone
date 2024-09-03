import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'

type propsType = {
  text : string,
  styles ?: TextStyle ,
}

const Paragraph : React.FC<propsType> = (porps : propsType) : React.JSX.Element => {
  return (
    <Text style={[styles.defaultStyles,porps.styles]}>
      {porps.text}
    </Text>
  )
}

export default Paragraph;

const styles = StyleSheet.create({
  defaultStyles: {
    flexShrink: 1, // pour gérer l'overflow du text
    fontSize: 15,
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22
  }
});
