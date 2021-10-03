import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LocationInputScreen from './screens/LocationInputScreen';
import SearchScreen from './screens/SearchScreen';
import AddressInfoScreen from './screens/AddressInfoScreen';
import SunInfoScreen from './screens/SunInfoScreen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'ubuntu': require('./assets/font/Ubuntu-Regular.ttf'),
    'ubuntu-bold': require('./assets/font/Ubuntu-Bold.ttf'),
    'ubuntu-light': require('./assets/font/Ubuntu-Light.ttf'),
    'ubuntu-medium': require('./assets/font/Ubuntu-Medium.ttf'),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(!fontsLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={() => console.log("Fonts not loaded")}
    />
  }

  return (
    <NavigationContainer style={{width: "100%", justifyContent: 'center', alignItems: 'center'}}>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="LocationInputScreen"
          component={LocationInputScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="AddressInfoScreen"
          component={AddressInfoScreen}
        />
        <Stack.Screen name="SunInfoScreen" component={SunInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
