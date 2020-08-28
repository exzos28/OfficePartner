import React from 'react'

import { Box, Text } from '~/theme'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'
import { Input } from '~/components/molecules'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AddImage } from '../components'

export const ManagersProfile: React.FC = () => {
  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Мой профиль" />
      <KeyboardAwareScrollView>
        <Box paddingVertical="m">
          <Section containerStyleProps={{ paddingTop: 'l' }}>
            <Text variant="regular" fontSize={16} textAlign="center">
              Профиль менеджера
            </Text>
            <AddImage />
            <Box marginBottom="m">
              <Input label="Имя" />
            </Box>
            <Box marginBottom="m">
              <Input label="Фамилия" />
            </Box>
            <Box marginBottom="m">
              <Input label="Отчество" />
            </Box>
            <Box marginBottom="m">
              <Input
                label="Телефон"
                inputProps={{ keyboardType: 'phone-pad' }}
                type="phone"
                required
              />
            </Box>
            <Box marginBottom="l">
              <Input label="E-mail" />
            </Box>
            <Box marginBottom="l">
              <Input
                label="О себе"
                inputContainerProps={{ height: 120 }}
                inputProps={{
                  multiline: true,
                  placeholder: 'Адрес офиса, этаж, № офиса',
                }}
              />
            </Box>
          </Section>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  )
}
