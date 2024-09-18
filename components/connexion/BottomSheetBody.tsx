import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Paragraph from '../ui/Paragraph';
import CustomButton from '../ui/CustomButton';
import RadioButton from '../ui/RadioButton';
import CustomPressable from '../ui/CustomPressable';
import { primaryColor, secondaryColor } from '../colors';

type propsType = {
  description: string,
  listOfChoices: string[],
};
const BottomSheetBody: React.FC<propsType>= ({description, listOfChoices}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Paragraph text={description} />
      <FlatList 
        extraData={selectedIndex}
        data={listOfChoices} renderItem={({item, index}) => {
        return(
          <CustomPressable 
            onPress={() => {setSelectedIndex(index)}} 
            styles={styles.itemContainer}
          >
            <Paragraph text={item} styles={{fontWeight: 'bold'}}/>
            <RadioButton checkedColor={primaryColor} unCheckedColor={secondaryColor} state={selectedIndex === index}/>
          </CustomPressable>
        )
      }} />

      <CustomButton title="ENREGISTRER" onPress={() => {/** TODO */}} />
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
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 0.5,
  },
});