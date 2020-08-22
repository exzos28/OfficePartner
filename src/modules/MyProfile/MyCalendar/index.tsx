import React, { useState } from 'react'

import { Box } from '~/theme'
import { Header } from '~/components/organisms'
import { useNavigation } from '@react-navigation/native'
import { Fab } from '~/components/molecules'
import { Calendar } from './Calendar'

export const MyCalendar: React.FC = () => {
  const navigation = useNavigation()

  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Мой календарь" />
      <Box paddingVertical="l">
        <Calendar />
      </Box>
      <Fab onPress={() => {}} />
    </Box>
  )
}
