import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootStack } from './RootStack'
import { Box } from '~/theme'
import { Fab } from '~/components/molecules'

export const AppContainer: React.FC = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
)
