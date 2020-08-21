import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Starting } from '~/screens/Home/Starting'
import { TechnikStack } from './TechnikStack'
import { MyRequestsStack } from './MyRequestsStack'
import { ScanQRStack } from './ScanQRStack'

export type HomeStackParamList = {
  Starting: undefined
  TechnikStack: undefined
  MyRequestsStack: undefined
  ScanQRStack: undefined
}

const Stack = createStackNavigator<HomeStackParamList>()

const navigatorOption = {
  headerShown: false,
}

export const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="ScanQRStack"
    screenOptions={navigatorOption}>
    <Stack.Screen name="Starting" component={Starting} />
    <Stack.Screen name="TechnikStack" component={TechnikStack} />
    <Stack.Screen name="MyRequestsStack" component={MyRequestsStack} />
    <Stack.Screen name="ScanQRStack" component={ScanQRStack} />
  </Stack.Navigator>
)
