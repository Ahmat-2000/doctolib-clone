import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import Paragraph from '../ui/Paragraph';
import CustomButton from '../ui/CustomButton';
import AntDesign from '@expo/vector-icons/AntDesign';

type propsType = {
  description: string,
  listOfChoices: string[],
};
const BottomSheetBody: React.FC<propsType>= ({description, listOfChoices}) => {
  return (
    <View style={styles.container}>
      <Paragraph text={description} />
      <FlatList data={listOfChoices} renderItem={(item) => {
        return(
          <Pressable style={styles.itemContainer}>
            <Paragraph text={item.item} />
            <AntDesign name="right" size={15} color="black" />
          </Pressable>
        )
      }} />

      <CustomButton title="ENREGISTRER" onPress={() => {}} />
    </View>
  )
}

export default BottomSheetBody;

const styles = StyleSheet.create({
  container:{
    paddingHorizontal : 15,
    paddingVertical: 5,
    gap: 15,
  },
  description :{

  }, 
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
  },
});