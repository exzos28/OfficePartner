import React from 'react'
import { Box, Text } from '~/theme'
import { Button } from '~/components/atom'
import { useNavigation } from '@react-navigation/native'

import { Input } from '~/components/molecules'

export const Login = () => {
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
          Войти
        </Text>
        <Box>
          <Input container={{ marginBottom: 'm' }} label="E-mail" />
          <Input container={{ marginBottom: 's' }} label="Пароль" />
          <Box alignItems="flex-start">
            <Button
              inline
              marginBottom="m"
              variant="link"
              text="Забыли пароль?"
              onPress={() => navigation.navigate('PasswordRecovery')}
            />
          </Box>

          <Button variant="primary" text="Подтвердить" onPress={() => navigation.navigate('HomeStack')} />

          <Button
            variant="link"
            text="Регистрация"
            // @ts-ignore
            onPress={() => navigation.replace('Registration')}
          />
        </Box>
      </Box>
    </Box>
  )
}
