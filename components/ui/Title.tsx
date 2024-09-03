import { StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';

type PropsType = {
  text: string;
  styles?: TextStyle;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Title: React.FC<PropsType> = (props: PropsType): React.JSX.Element => {
  const { text, styles, variant } = props;

  // Choisir le style en fonction du variant
  const variantStyles = {
    h1: titleStyles.h1,
    h2: titleStyles.h2,
    h3: titleStyles.h3,
    h4: titleStyles.h4,
    h5: titleStyles.h5,
    h6: titleStyles.h6,
  };

  return (
    <Text style={[titleStyles.defaultStyles,variantStyles[variant], styles]}>
      {text}
    </Text>
  );
};

export default Title;

const titleStyles = StyleSheet.create({
  defaultStyles: {
    flexShrink: 1, // pour gérer l'overflow du text
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  h3: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  h4: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
  },
  h5: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  h6: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
});
