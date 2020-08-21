import React from 'react'
import { Box, Text } from '~/theme'
import { Button } from '~/components/atom'
import { useNavigation } from '@react-navigation/native'
import { Code } from './Code'

export const PasswordRecoveryCode = () => {
  const navigation = useNavigation()
  return (
    <Box
      flex={1}
      backgroundColor="lightGrey"
      padding="xl"
      justifyContent="center">
      <Box
        paddingVertical="l"
        paddingHorizontal="l"
        backgroundColor="white"
        borderRadius={6}
        shadowColor="dark"
        shadowOffset={{
          width: 0,
          height: 0,
        }}
        shadowOpacity={0.1}
        shadowRadius={1}
        elevation={2}>
        <Text marginBottom="m" variant="sectionTitle" textAlign="center">
          Введите код
        </Text>
        <Box marginBottom="s">
          <Code />
        </Box>
        <Box
          marginBottom="l"
          flexDirection="row"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center">
          <Text marginRight="s" variant="regular" color="mediumGrey">
            Не пришёл код?
          </Text>
          <Button
            variant="link"
            inline
            text="Повторить попытку"
            onPress={() => {}}
          />
        </Box>
        <Button variant="primary" text="Далее" onPress={() => {}} />
      </Box>
    </Box>
  )
}
