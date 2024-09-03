import { StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'
import { primaryColor, secondaryColor } from '../colors'


const TextSeparator = () => {
  return (
    <View style={styles.separator}>

    </View>
  )
}

export default TextSeparator

type styleType = {
  separator : ViewStyle,
}
const styles: styleType = StyleSheet.create({
  separator : {
    borderColor: secondaryColor,
    borderBottomWidth: .2,
  }
});