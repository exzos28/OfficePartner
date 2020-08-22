import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Starting } from '~/screens/MyProfile/Starting'
import { AdmistatorsProfile } from '~/screens/MyProfile/AdmistatorsProfile'
import { GeneralInformation } from '~/screens/MyProfile/GeneralInformation'
import { BankData } from '~/screens/MyProfile/BankData'
import { CompanyOffice } from '~/screens/MyProfile/CompanyOffice'
import { ManagersProfile } from '~/screens/MyProfile/ManagersProfile'
import { UserCreation } from '~/screens/MyProfile/UserCreation'
import { MyCalendar } from '~/screens/MyProfile/MyCalendar'

type MyProfileParamList = {
  Starting: undefined
  AdmistatorsProfile: undefined
  ManagersProfile: undefined
  UserCreation: undefined
  GeneralInformation: undefined
  BankData: undefined
  CompanyOffice: undefined
  MyCalendar: undefined
}

const Stack = createStackNavigator<MyProfileParamList>()

const navigatorOption = {
  headerShown: false,
}

export const MyProfileStack = () => (
  <Stack.Navigator
    initialRouteName="MyCalendar"
    screenOptions={navigatorOption}>
    <Stack.Screen name="Starting" component={Starting} />
    <Stack.Screen name="AdmistatorsProfile" component={AdmistatorsProfile} />
    <Stack.Screen name="ManagersProfile" component={ManagersProfile} />
    <Stack.Screen name="UserCreation" component={UserCreation} />
    <Stack.Screen name="GeneralInformation" component={GeneralInformation} />
    <Stack.Screen name="BankData" component={BankData} />
    <Stack.Screen name="CompanyOffice" component={CompanyOffice} />
    <Stack.Screen name="MyCalendar" component={MyCalendar} />
  </Stack.Navigator>
)
