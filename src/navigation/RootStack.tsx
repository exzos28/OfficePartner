import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStack } from './Auth/AuthStack'
import { HomeStack } from './Home/HomeStack'

const Stack = createStackNavigator()

const navigatorOption = {
  headerShown: false,
}

export const RootStack = () => (
  <Stack.Navigator screenOptions={navigatorOption}>
    <Stack.Screen name="AuthStack" component={AuthStack} />
    <Stack.Screen name="HomeStack" component={HomeStack} />
  </Stack.Navigator>
)
