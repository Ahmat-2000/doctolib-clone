import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { primaryColor } from '../components/colors';

const RootLayout = () => {
  return (
    <>
    <StatusBar backgroundColor={primaryColor} />
    <Stack>
      <Stack.Screen 
        name='(tabs)' 
        options={{
          headerShown: false,
        }}
      />
    </Stack>
    </>
  )
}

export default RootLayout;