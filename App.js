import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LocationInputScreen from './screens/LocationInputScreen';
import SearchScreen from './screens/SearchScreen';
import AddressInfoScreen from './screens/AddressInfoScreen';
import SunInfoScreen from './screens/SunInfoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LocationInputScreen" component={LocationInputScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="AddressInfoScreen" component={AddressInfoScreen} />
        <Stack.Screen name="SunInfoScreen" component={SunInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
