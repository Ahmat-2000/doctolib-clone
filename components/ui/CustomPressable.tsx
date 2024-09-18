import { StyleSheet, Pressable, GestureResponderEvent, ViewStyle } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { skyBlueColor } from '../colors';

type propsType ={
  /**
   * Called when a single tap gesture is detected.
  */
  onPress:  ((event: GestureResponderEvent) => void) | undefined;
  /**
   * Custom style for the pressable container
   */
  styles?: ViewStyle;
};
const CustomPressable: React.FC<PropsWithChildren<propsType>> = ({onPress,styles,children}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={({pressed}) => [
      styles,
      {
        backgroundColor: pressed ? skyBlueColor : 'white',
      },
  ]}>
    {children}
  </Pressable>
  )
};

export default CustomPressable;

const styles = StyleSheet.create({

});