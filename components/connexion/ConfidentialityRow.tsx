import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import TextSeparator from '../ui/TextSeparator';
import Paragraph from '../ui/Paragraph';
import AntDesign from '@expo/vector-icons/AntDesign';

type ConfPropType = {
  description: string;
};

const ConfidentialityRow: React.FC<ConfPropType> = ({ description }): React.JSX.Element  => (
  <>
    <TextSeparator />
    <View style={[styles.container, styles.parametreRow]}>
      <Paragraph text={description} />
      <AntDesign name="right" size={15} color="black" />
    </View>
  </>
);

export default ConfidentialityRow

type StyleType = {
  container: ViewStyle;
  parametreRow: ViewStyle;
};

const styles: StyleType = StyleSheet.create({
  container: {
    padding: 15,
  },
  parametreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 10,
  },
});
