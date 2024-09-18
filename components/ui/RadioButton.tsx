import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type propsType = {
  state : boolean,
  checkedColor: string,
  unCheckedColor: string,
}
const RadioButton: React.FC<propsType> = ({state,checkedColor,unCheckedColor}) => {
  return (
    <View>
      <MaterialIcons 
        name={state ? "radio-button-on" : "radio-button-off"} 
        size={20} 
        color={state ? checkedColor : unCheckedColor}
      />
    </View>
  )
};

export default RadioButton;

const styles = StyleSheet.create({

});