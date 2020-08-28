import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListOfUsers } from '~/screens/Home/MyProfile/ListOfUsers'
import { EditProfile } from '~/screens/Home/MyProfile/EditProfile'

export type ListOfUsersParamList = {
  ListOfUsers: undefined
  EditProfile: undefined
}

const Stack = createStackNavigator<ListOfUsersParamList>()

const navigatorOption = {
  headerShown: false,
}

export const ListOfUsersStack = () => (
  <Stack.Navigator
    initialRouteName="ListOfUsers"
    screenOptions={navigatorOption}>
    <Stack.Screen name="ListOfUsers" component={ListOfUsers} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
  </Stack.Navigator>
)
