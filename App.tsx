import React from 'react';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from '@expo-google-fonts/nunito'

import { ThemeProvider,} from 'styled-components';
import theme from './src/global/styles/theme'
import { ActivityIndicator, StatusBar } from 'react-native';

import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });




  return(
    <ThemeProvider theme={theme}>
        <StatusBar 
        backgroundColor="transparent" 
        barStyle='dark-content' 
        translucent
        />
     
           {fontsLoaded ? <Routes /> : <ActivityIndicator />}
       
     </ThemeProvider>
     )
}

