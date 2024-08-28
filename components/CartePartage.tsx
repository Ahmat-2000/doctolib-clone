import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle,  } from 'react-native';
import CustomButton from './CustomButton';

type propsType = {
  title : string,
  desciption : string,
  icon: React.JSX.Element
};
type styleProp = {
  container : ViewStyle,
  title : TextStyle,
  description : TextStyle,
};

export default function CartePartage({title, desciption, icon} : propsType) {
  const btnPress = () => {};
  return (
    <View style={styles.container}>
      <View>{icon}</View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{desciption}</Text>
      <CustomButton title='se connecter' onPress={btnPress} />
    </View>
  )
};
const styles : styleProp = StyleSheet.create({
  container : {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 15,
  },
  title : {
    fontSize: 20,
    fontWeight : "bold",
  },
  description :{
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 10,
    maxWidth: 390
  },
});