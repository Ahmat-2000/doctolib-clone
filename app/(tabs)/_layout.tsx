import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { secondaryColor, primaryColor } from "../../components/colors";
import { StyleSheet, Text, View } from 'react-native';

// Define types for Ionicons and MaterialCommunityIcons icon names
type IoniconNames = keyof typeof Ionicons.glyphMap;
type MaterialCommunityIconNames = keyof typeof MaterialCommunityIcons.glyphMap;

// Define types for Tab optionsConf
type TabConfig = {
  route: string;
  icon: typeof Ionicons | typeof MaterialCommunityIcons;
  focusedIcon: IoniconNames | MaterialCommunityIconNames;
  unfocusedIcon: IoniconNames | MaterialCommunityIconNames;
  title: string;
  headerTitle: string;
};

const optionsConf: TabConfig[] = [
  {
    route : 'index',
    icon : Ionicons,
    focusedIcon : "home",
    unfocusedIcon : "home-outline",
    title: "Accueil",
    headerTitle: "Accueil",
  },
  {
    route : 'rendez-vous',
    icon : Ionicons,
    focusedIcon : "calendar",
    unfocusedIcon : "calendar-outline",
    title: "Rendez-vous",
    headerTitle: "Rendez-vous",
  },
  {
    route : 'documents',
    icon : Ionicons,
    focusedIcon : "document",
    unfocusedIcon : "document-outline",
    title: "Documents",
    headerTitle: "Documents",
  },
  {
    route : 'messages',
    icon : Ionicons,
    focusedIcon : "mail",
    unfocusedIcon : "mail-outline",
    title: "Messages",
    headerTitle: "Messages",
  },
  {
    route : 'compte',
    icon : MaterialCommunityIcons,
    focusedIcon : "account",
    unfocusedIcon : "account-outline",
    title: "Compte",
    headerTitle: "Compte",
  },
];

const NavBarLayout = () => {
  return (
    <Tabs screenOptions={{ 
      tabBarShowLabel: false,
      tabBarActiveTintColor: primaryColor, 
      tabBarInactiveTintColor: secondaryColor, 
      tabBarStyle :{
        height: 70,
      }
    }}>
      {
       optionsConf.map((item, id) => (
         <Tabs.Screen key={id} name={item.route} options={{
           title: item.title,
           headerTitle: item.headerTitle,
           tabBarIcon: ({ color, focused }) =>  {
            const border = {
                borderTopWidth: focused ? 1 : 0,
                borderTopColor: focused ? primaryColor : secondaryColor,
              }
               
            return (
              <View style={{...style.item, ...border}}>
                <item.icon name={focused ? item.focusedIcon : item.unfocusedIcon} size={22} color={color} />
                <Text style={{color:color, ...style.text}}>{item.title}</Text>
              </View>
            );
           },
         }} />
      )) 
      }
    </Tabs>
  );
};

const style = StyleSheet.create({
  item: {
    width: "100%",
    height: "100%",
    alignItems: 'center', 
    justifyContent: 'center',
  },
  text: {
    fontWeight: "semibold",
    fontSize: 12,
  }
});

export default NavBarLayout;
