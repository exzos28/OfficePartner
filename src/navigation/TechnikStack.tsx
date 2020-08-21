import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Techniks } from '~/screens/MyTechniks/Techniks'
import { TechnikInfo } from '~/screens/MyTechniks/TechnikInfo'
import { AddTechnik } from '~/screens/MyTechniks/AddTechnik'

export type TechnikStackParamList = {
  Techniks: undefined
  TechnikInfo: undefined
  AddTechnik: undefined
}

const Stack = createStackNavigator<TechnikStackParamList>()

const navigatorOption = {
  headerShown: false,
}

export const TechnikStack = () => (
  <Stack.Navigator initialRouteName="Techniks" screenOptions={navigatorOption}>
    <Stack.Screen name="Techniks" component={Techniks} />
    <Stack.Screen name="TechnikInfo" component={TechnikInfo} />
    <Stack.Screen name="AddTechnik" component={AddTechnik} />
  </Stack.Navigator>
)
