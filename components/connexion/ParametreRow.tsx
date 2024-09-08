import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

import TextSeparator from '../ui/TextSeparator';
import Paragraph from '../ui/Paragraph';
import Title from '../ui/Title';
import { textBlueColor } from '../colors';

type ParamPropType = {
  icon: React.JSX.Element;
  title: string;
  description: string;
};
const ParametreRow: React.FC<ParamPropType> = ({ icon, title, description }) => (
  <>
    <TextSeparator />
    <View style={[styles.container, styles.parametreRow]}>
      <View style={styles.parametreRow}>
        {icon}
        <View style={styles.parametreText}>
          <Title text={title} variant="h6" />
          <Paragraph text={description} styles={styles.descriptionText} />
        </View>
      </View>
      <AntDesign name="right" size={15} color="black" style={styles.rightIcon} />
    </View>
  </>
);

export default ParametreRow;

type StyleType = {
  parametreRow: ViewStyle;
  container: ViewStyle;
  parametreText: ViewStyle;
  descriptionText: TextStyle;
  rightIcon: ViewStyle;
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
  parametreText: {
    justifyContent: 'center',
    rowGap: 2,
  },
  rightIcon: {},
  leftIcon: {
    alignSelf: 'flex-start',
  },
  descriptionText: {
    color: textBlueColor,
  },
});