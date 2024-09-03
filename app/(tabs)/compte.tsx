import React from 'react';
import { Image, ImageStyle, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

import CustomButton from '../../components/ui/CustomButton';
import { primaryColor, skyBlueColor, textBlueColor } from '../../components/colors';
import Paragraph from '../../components/ui/Paragraph';
import Title from '../../components/ui/Title';
import CustomLink from '../../components/ui/CustomLink';
import TextSeparator from '../../components/ui/TextSeparator';

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

type ConfPropType = {
  description: string;
};

const ConfidentialityRow: React.FC<ConfPropType> = ({ description }) => (
  <>
    <TextSeparator />
    <View style={[styles.container, styles.parametreRow]}>
      <Paragraph text={description} />
      <AntDesign name="right" size={15} color="black" />
    </View>
  </>
);

const Compte: React.FC = (): React.JSX.Element => (
  <View style={styles.mainContainer}>
    <View style={[styles.container, styles.sectionContainer]}>
      <View style={styles.carteContainer}>
        <View style={styles.carteTileContainer}>
          <Image source={require("../../assets/protect.png")} style={styles.carteTitleImage} />
          <Paragraph styles={styles.carteTitleText} text="Doctolib est au service de votre santé et celle de vos proches." />
        </View>
        <CustomButton title="SE CONNECTER" onPress={() => {}} />
      </View>

      <View style={styles.linkRow}>
        <Paragraph text="Vous n'avez pas de compte ? " />
        <CustomLink bgColor={skyBlueColor} />
      </View>
    </View>

    <View>
      <Title variant="h5" text="Paramètres" styles={styles.rowTitle} />
      <ParametreRow
        title="Pays"
        description="Pays où vous avez besoin de soins"
        icon={<FontAwesome5 name="globe-africa" size={24} color={primaryColor} style={styles.leftIcon} />}
      />
      <ParametreRow
        title="Langue"
        description="Langue du compte"
        icon={<FontAwesome name="comment" size={24} color={primaryColor} style={styles.leftIcon} />}
      />
    </View>

    <TextSeparator />

    <View style={styles.confidentialityContainer}>
      <Title variant="h5" text="Confidentialité" styles={styles.rowTitle} />
      <ConfidentialityRow description="Mes préférences" />
      <ConfidentialityRow description="Informations légales" />
      <TextSeparator />
      <Paragraph text="v1.0.0" styles={styles.version} />
    </View>
  </View>
);

type StyleType = {
  mainContainer: ViewStyle;
  container: ViewStyle;
  sectionContainer: ViewStyle;
  carteContainer: ViewStyle;
  carteTileContainer: ViewStyle;
  parametreRow: ViewStyle;
  parametreText: ViewStyle;
  rightIcon: ViewStyle;
  leftIcon: ViewStyle;
  carteTitleImage: ImageStyle;
  carteTitleText: TextStyle;
  rowTitle: TextStyle;
  descriptionText: TextStyle;
  version: TextStyle;
  linkRow: ViewStyle;
  confidentialityContainer: ViewStyle;
};

const styles: StyleType = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    padding: 15,
  },
  sectionContainer: {
    rowGap: 10,
  },
  carteContainer: {
    backgroundColor: skyBlueColor,
    gap: 20,
    padding: 15,
    borderRadius: 15,
  },
  carteTileContainer: {
    flexDirection: 'row',
  },
  carteTitleText: {
    alignSelf: 'center',
  },
  carteTitleImage: {
    width: 60,
    height: 60,
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
  rowTitle: {
    color: textBlueColor,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  descriptionText: {
    color: textBlueColor,
  },
  version: {
    textAlign: 'center',
    paddingVertical: 20,
    color: textBlueColor,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confidentialityContainer: {
    marginVertical: 20,
  },
});

export default Compte;
