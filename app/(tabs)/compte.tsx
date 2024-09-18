import React, { useRef } from 'react';
import { Image, ImageStyle, Pressable, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CustomButton from '../../components/ui/CustomButton';
import { primaryColor, skyBlueColor, textBlueColor } from '../../components/colors';
import Paragraph from '../../components/ui/Paragraph';
import Title from '../../components/ui/Title';
import CustomLink from '../../components/ui/CustomLink';
import { globalStyles } from '../../components/styles';
import ParametreRow from '../../components/connexion/ParametreRow';
import ConfidentialityRow from '../../components/connexion/ConfidentialityRow';
import BottomSheet, { BottomSheetRefType } from '../../components/ui/BottomSheet';
import BottomSheetBody from '../../components/connexion/BottomSheetBody';


const Compte: React.FC = (): React.JSX.Element => {
  const bottomSheetRef = useRef<BottomSheetRefType | null>(null);
  const bottomSheetLangRef = useRef<BottomSheetRefType | null>(null);
  return(
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
        <CustomLink containerBgColor={skyBlueColor} url="">
          <Paragraph text="S'inscrire" styles={globalStyles.defaultLinkText}/>
        </CustomLink>
      </View>
    </View>

    <View>
      <Title variant="h6" text="Paramètres" styles={styles.rowTitle} />
      <Pressable onPress={() => {bottomSheetRef.current?.openModal()}}>
        <ParametreRow
          title="Pays"
          description="Pays où vous avez besoin de soins"
          style={{borderTopWidth: 0.5}}
          icon={<FontAwesome5 name="globe-africa" size={20} color={primaryColor} style={styles.leftIcon} />}
        />
      </Pressable>

      <Pressable onPress={() => {bottomSheetLangRef.current?.openModal()}}>
        <ParametreRow
          title="Langue"
          description="Langue du compte"
          icon={<FontAwesome name="comment" size={20} color={primaryColor} style={styles.leftIcon} />}
        />
      </Pressable>
    </View>

    <View style={styles.confidentialityContainer}>
      <Title variant="h6" text="Confidentialité" styles={{...styles.rowTitle,paddingTop: 10}} />
      <ConfidentialityRow description="Mes préférences" style={{borderTopWidth: 0.5}}/>
      <ConfidentialityRow description="Informations légales" />
      <Paragraph text="v1.0.0" styles={styles.version} />
    </View>

    {/* Country bottomSheet */}
    <BottomSheet slideTime={500} height='50%' title="Pays" ref={bottomSheetRef}> 
      <BottomSheetBody description="choisissez le pays dans lequel vous souhaitez trouver des particiens et prendre des rendez-vous : "  listOfChoices={["Allemagne","France", "Italie"]}/>  
    </BottomSheet>

    {/* Language bottomSheet */}
    <BottomSheet slideTime={500} height='55%' title="Lange" ref={bottomSheetLangRef}> 
      <BottomSheetBody description="choisissez la langue dans laquelle vous souhaitez utiliser Doctolib : "  listOfChoices={["Anglais","Français", "Arabe","Hawsa"]}/>  
    </BottomSheet>
  </View>
)};

type StyleType = {
  mainContainer: ViewStyle;
  container: ViewStyle;
  sectionContainer: ViewStyle;
  carteContainer: ViewStyle;
  carteTileContainer: ViewStyle;
  leftIcon: ViewStyle;
  carteTitleImage: ImageStyle;
  carteTitleText: TextStyle;
  rowTitle: TextStyle;
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
  leftIcon: {
    alignSelf: 'flex-start',
  },
  rowTitle: {
    color: textBlueColor,
    marginBottom: 10,
    paddingHorizontal: 15,
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
