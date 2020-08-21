import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStack } from './AuthStack'
import { HomeStack } from './HomeStack'

const Stack = createStackNavigator()

const navigatorOption = {
  headerShown: false,
}

export const RootStack = () => (
  <Stack.Navigator screenOptions={navigatorOption}>
    <Stack.Screen name="HomeStack" component={HomeStack} />
    <Stack.Screen name="AuthStack" component={AuthStack} />
  </Stack.Navigator>
)
