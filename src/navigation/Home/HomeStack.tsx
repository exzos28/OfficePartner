import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Starting } from '~/screens/Home/Starting'
import { TechnikStack } from './TechnikStack'
import { MyRequestsStack } from './MyRequestsStack'
import { ScanQRStack } from './ScanQRStack'
import { MyProfileStack } from './MyProfile'
import { MyCalendar } from '~/screens/Home/MyCalendar'
import { Notifications } from '~/screens/Home/Notifications'
import { Chat } from '~/screens/Home/MyRequests/Chat'

export type HomeStackParamList = {
  Starting: undefined
  TechnikStack: undefined
  MyRequestsStack: undefined
  ScanQRStack: undefined
  MyProfileStack: undefined
  MyCalendar: undefined
  Chat: undefined

  Notifications: undefined
}

const Stack = createStackNavigator<HomeStackParamList>()

const navigatorOption = {
  headerShown: false,
}

export const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Starting"
    screenOptions={navigatorOption}>
    <Stack.Screen name="Starting" component={Starting} />
    <Stack.Screen name="TechnikStack" component={TechnikStack} />
    <Stack.Screen name="MyRequestsStack" component={MyRequestsStack} />
    <Stack.Screen name="ScanQRStack" component={ScanQRStack} />
    <Stack.Screen name="MyCalendar" component={MyCalendar} />
    <Stack.Screen name="MyProfileStack" component={MyProfileStack} />

    <Stack.Screen name="Chat" component={Chat} />

    <Stack.Screen name="Notifications" component={Notifications} />
  </Stack.Navigator>
)
