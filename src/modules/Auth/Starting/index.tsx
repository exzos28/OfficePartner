import React from 'react'
import { Box, Text } from '~/theme'
import { useSafeArea } from 'react-native-safe-area-context'
import { Dimensions, Platform } from 'react-native'
import { Button } from '~/components/atom'
import { useNavigation } from '@react-navigation/native'

const { height } = Dimensions.get('window')

export const Starting = () => {
  const { bottom } = useSafeArea()

  const navigation = useNavigation()

  return (
    <Box
      paddingHorizontal="xl"
      flex={1}
      backgroundColor="main"
      justifyContent="flex-end">
      <Button
        variant="primary"
        outline
        marginBottom="m"
        text="Вход"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        outline
        variant="light"
        text="Регистрация"
        onPress={() => navigation.navigate('Registration')}
      />
      <Box
        height={Platform.OS === 'ios' ? bottom + height * 0.05 : height * 0.05}
      />
    </Box>
  )
}
