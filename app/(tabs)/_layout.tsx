import React from 'react';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { secondaryColor, primaryColor, whiteColor } from "../../components/colors";
import EvilIcons from '@expo/vector-icons/EvilIcons';

// <EvilIcons name="question" size={24} color="white" />

// Définition du type pour le style 
type Style = {
  item: ViewStyle;
  text: TextStyle;
  headerStyle: ViewStyle;
  headerTitleStyle: TextStyle;
};
// Définition des types pour le nom des icons Ionicons et MaterialCommunityIcons 
export type IoniconNames = React.ComponentProps<typeof Ionicons>['name'];
export type MaterialCommunityIconNames = React.ComponentProps<typeof MaterialCommunityIcons>['name'];

// Définition de type pour un item du BottomTabBar
export type BottomTabConfigType = {
  route: string;
  icon: typeof Ionicons | typeof MaterialCommunityIcons;
  focusedIcon: IoniconNames | MaterialCommunityIconNames;
  unfocusedIcon: IoniconNames | MaterialCommunityIconNames;
  title: string;
  headerTitle: string;
};

const optionsConf: BottomTabConfigType[] = [
  {
    route: 'index',
    icon: Ionicons,
    focusedIcon: 'home',
    unfocusedIcon: 'home-outline',
    title: 'Accueil',
    headerTitle: '',
  },
  {
    route: 'rendez-vous',
    icon: Ionicons,
    focusedIcon: 'calendar',
    unfocusedIcon: 'calendar-outline',
    title: 'Rendez-vous',
    headerTitle: 'Rendez-vous',
  },
  {
    route: 'documents',
    icon: Ionicons,
    focusedIcon: 'document',
    unfocusedIcon: 'document-outline',
    title: 'Documents',
    headerTitle: 'Documents',
  },
  {
    route: 'messages',
    icon: Ionicons,
    focusedIcon: 'mail',
    unfocusedIcon: 'mail-outline',
    title: 'Messages',
    headerTitle: 'Messages',
  },
  {
    route: 'compte',
    icon: MaterialCommunityIcons,
    focusedIcon: 'account',
    unfocusedIcon: 'account-outline',
    title: 'Connexion',
    headerTitle: 'Connexion',
  },
];

const NavBarLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: secondaryColor,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      {optionsConf.map((item, id) => (
        <Tabs.Screen
          key={id}
          name={item.route}
          options={{
            title: item.title,
            headerTitle: item.headerTitle,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            tabBarIcon: ({ color, focused }) => {
              const border = {
                borderTopWidth: focused ? 1 : 0,
                borderTopColor: focused ? primaryColor : secondaryColor,
              };

              return (
                <View style={{ ...styles.item, ...border }}>
                  <item.icon
                    name={focused ? item.focusedIcon : item.unfocusedIcon as any}
                    size={22}
                    color={color}
                  />
                  <Text style={{ color: color, ...styles.text }}>{item.title}</Text>
                </View>
              );
            },
          }}
        />
      ))}
    </Tabs>
  );
};

// Définition de styles
const styles: Style = StyleSheet.create<Style>({
  item: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 12,
  },
  headerTitleStyle: {
    color: whiteColor,
    letterSpacing: 1,
  },
  headerStyle: {
    backgroundColor: primaryColor,
  },
});

export default NavBarLayout;
