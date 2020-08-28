import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Starting } from '~/screens/Home/ScanQR/Starting'
import { Camera } from '~/screens/Home/ScanQR/Camera'
import { RouteProp } from '@react-navigation/native'

type ScanQRParamList = {
  Starting: StartingType | undefined
  Camera: undefined
}

type StartingType = {
  data?: string
}

export type StartingScreenRouteProp = RouteProp<ScanQRParamList, 'Starting'>

const Stack = createStackNavigator<ScanQRParamList>()

const navigatorOption = {
  headerShown: false,
}

export const ScanQRStack = () => (
  <Stack.Navigator initialRouteName="Starting" screenOptions={navigatorOption}>
    <Stack.Screen name="Starting" component={Starting} />
    <Stack.Screen name="Camera" component={Camera} />
  </Stack.Navigator>
)
