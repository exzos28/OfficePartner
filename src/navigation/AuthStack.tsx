import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '~/screens/Auth/Login'
import { Starting } from '~/screens/Auth/Starting'
import { Registration } from '~/screens/Auth/Registration'
import { PasswordRecovery } from '~/screens/Auth/PasswordRecovery'
import { PasswordRecoveryCode } from '~/screens/Auth/PasswordRecoveryCode'

export type AuthStackParamList = {
  Starting: undefined
  Registration: undefined
  Login: undefined
  PasswordRecovery: undefined
  PasswordRecoveryCode: undefined
}

const Stack = createStackNavigator<AuthStackParamList>()

const navigatorOption = {
  headerShown: false,
}

export const AuthStack = () => (
  <Stack.Navigator screenOptions={navigatorOption}>
    <Stack.Screen name="Starting" component={Starting} />
    <Stack.Screen name="Registration" component={Registration} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
    <Stack.Screen
      name="PasswordRecoveryCode"
      component={PasswordRecoveryCode}
    />
  </Stack.Navigator>
)
