import React from 'react';
import {
  Localisation,
  MapExperience,
  Register,
  SelectCity,
  SignUpEmail,
  SplashScreen,
  Welcome,
} from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Localisation" component={Localisation} />
        <Stack.Screen name="Localisation-not-allowed" component={SelectCity} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MapExperience" component={MapExperience} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
