import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import Paragraph from '../ui/Paragraph';
import AntDesign from '@expo/vector-icons/AntDesign';
import { secondaryColor } from '../colors';

type ConfPropType = {
  description: string;
  style? : ViewStyle,
};

const ConfidentialityRow: React.FC<ConfPropType> = ({ description , style}): React.JSX.Element  => (
  <>
    <View style={[styles.container, styles.parametreRow, style]}>
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
    borderColor: secondaryColor,
    borderBottomWidth: 0.5,
  },
  parametreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 10,
  },
});
