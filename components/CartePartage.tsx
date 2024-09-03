import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle,  } from 'react-native';
import CustomButton from './ui/CustomButton';
import Paragraph from './ui/Paragraph';
import Title from './ui/Title';

type propsType = {
  title : string,
  description : string,
  icon: React.JSX.Element
};
type styleProp = {
  container : ViewStyle,
  description : TextStyle,
};

export default function CartePartage({title, description, icon} : propsType) {
  const btnPress = () => {};
  return (
    <View style={styles.container}>
      <View>{icon}</View>
      <Title text={title} variant="h2" />   
      <Paragraph styles={styles.description} text={description} />   
      <CustomButton title='se connecter' onPress={btnPress} />
    </View>
  )
};
const styles : styleProp = StyleSheet.create({
  container : {
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 15,
    padding: 10
  },
  description :{
    textAlign: 'center',
    paddingHorizontal: 10,
    fontSize: 15
  },
});