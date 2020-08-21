import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Starting } from '~/screens/MyProfile/Starting'
import { AdmistatorsProfile } from '~/screens/MyProfile/AdmistatorsProfile'
import { GeneralInformation } from '~/screens/MyProfile/GeneralInformation'
import { BankData } from '~/screens/MyProfile/BankData'
import { CompanyOffice } from '~/screens/MyProfile/CompanyOffice'

type MyProfileParamList = {
  Starting: undefined
  AdmistatorsProfile: undefined
  GeneralInformation: undefined
  BankData: undefined
  CompanyOffice: undefined
}

const Stack = createStackNavigator<MyProfileParamList>()

const navigatorOption = {
  headerShown: false,
}

export const MyProfileStack = () => (
  <Stack.Navigator initialRouteName="Starting" screenOptions={navigatorOption}>
    <Stack.Screen name="Starting" component={Starting} />
    <Stack.Screen name="AdmistatorsProfile" component={AdmistatorsProfile} />
    <Stack.Screen name="GeneralInformation" component={GeneralInformation} />
    <Stack.Screen name="BankData" component={BankData} />
    <Stack.Screen name="CompanyOffice" component={CompanyOffice} />
  </Stack.Navigator>
)
