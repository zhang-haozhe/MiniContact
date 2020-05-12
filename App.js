import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { authentication, firestore } from './util/Firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import AddScreen from './AddScreen';
import SignupScreen from './SignupScreen';
import UpdateScreen from './UpdateScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen}></Stack.Screen>
        <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='AddScreen' component={AddScreen}></Stack.Screen>
        <Stack.Screen
          name='UpdateScreen'
          component={UpdateScreen}
        ></Stack.Screen>
        <Stack.Screen
          name='SignupScreen'
          component={SignupScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
