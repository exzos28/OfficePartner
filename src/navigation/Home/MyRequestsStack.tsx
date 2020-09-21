import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Starting } from '~/screens/Home/MyRequests/Starting'
import { Chat } from '~/screens/Home/MyRequests/Chat'
import { RouteProp } from '@react-navigation/native'

export type MyRequestsStackParamList = {
  Starting: undefined
  Chat: ChatType
}

export type ChatType = {
  type: 'user' | 'request'
}

export type ChatScreenRouteProp = RouteProp<MyRequestsStackParamList, 'Chat'>

const Stack = createStackNavigator<MyRequestsStackParamList>()

const navigatorOption = {
  headerShown: false,
}

export const MyRequestsStack = () => (
  <Stack.Navigator initialRouteName="Starting" screenOptions={navigatorOption}>
    <Stack.Screen name="Starting" component={Starting} />
    <Stack.Screen name="Chat" component={Chat} />
  </Stack.Navigator>
)
