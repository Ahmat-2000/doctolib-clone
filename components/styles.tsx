import { ImageStyle, TextStyle, StyleSheet } from "react-native";
import { primaryColor } from "./colors";

type styleType = {
  defaultLinkText: TextStyle,
  cartePartageImage: ImageStyle
};

export const globalStyles: styleType = StyleSheet.create({
  cartePartageImage: {
    width: 80,
    height: 80,
  },
  defaultLinkText: {
    color: primaryColor, 
    fontWeight:"bold"
  }
});


