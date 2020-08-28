import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Starting } from '~/screens/Home/MyProfile/Starting'
import { AdmistatorsProfile } from '~/screens/Home/MyProfile/AdmistatorsProfile'
import { GeneralInformation } from '~/screens/Home/MyProfile/GeneralInformation'
import { BankData } from '~/screens/Home/MyProfile/BankData'
import { CompanyOffice } from '~/screens/Home/MyProfile/CompanyOffice'
import { ManagersProfile } from '~/screens/Home/MyProfile/ManagersProfile'
import { UserCreation } from '~/screens/Home/MyProfile/UserCreation'
import { ListOfUsersStack } from './ListOfUsersStack'

type MyProfileParamList = {
  Starting: undefined
  AdmistatorsProfile: undefined
  ManagersProfile: undefined
  UserCreation: undefined
  GeneralInformation: undefined
  BankData: undefined
  CompanyOffice: undefined
  ListOfUsersStack: undefined
}

const Stack = createStackNavigator<MyProfileParamList>()

const navigatorOption = {
  headerShown: false,
}

export const MyProfileStack = () => (
  <Stack.Navigator
    initialRouteName="Starting"
    screenOptions={navigatorOption}>
    <Stack.Screen name="Starting" component={Starting} />
    <Stack.Screen name="AdmistatorsProfile" component={AdmistatorsProfile} />
    <Stack.Screen name="ManagersProfile" component={ManagersProfile} />
    <Stack.Screen name="UserCreation" component={UserCreation} />
    <Stack.Screen name="GeneralInformation" component={GeneralInformation} />
    <Stack.Screen name="BankData" component={BankData} />
    <Stack.Screen name="CompanyOffice" component={CompanyOffice} />
    <Stack.Screen name="ListOfUsersStack" component={ListOfUsersStack} />
  </Stack.Navigator>
)
