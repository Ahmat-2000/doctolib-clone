import { StyleSheet, Text, TextStyle } from 'react-native'
import React from 'react'

type propsType = {
  /**
  * @prop { Text } String to display in the paragraph
  */
  text : string,
  /**
  * @prop { styles } TextStyle to override the default style
  */
  styles ?: TextStyle ,
}
/**
* Custom paragraph component with default style like <p> on the web
* @prop { Text } String to display in the paragraph
* @prop { styles } TextStyle to override the default style
*/
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
    flexShrink: 1, 
    fontSize: 15,
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22
  }
});
