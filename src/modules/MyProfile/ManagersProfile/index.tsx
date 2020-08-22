import React from 'react'

import restyleTheme, { Box, Text, TouchableBox } from '~/theme'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'
import { Avatar, Icon, Button } from '~/components/atom'
import { Input } from '~/components/molecules'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const ManagersProfile: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Мой профиль" />
      <KeyboardAwareScrollView>
        <Box paddingVertical="m">
          <Section containerStyleProps={{ paddingTop: 'l' }}>
            <Text variant="regular" fontSize={16} textAlign="center">
              Профиль менеджера
            </Text>
            <TouchableBox alignItems="center" paddingVertical="l">
              <Box>
                <Avatar
                  size={{ height: 97, width: 97 }}
                  uri="https://s3-alpha-sig.figma.com/img/4b26/0216/8d982f88091f64290e7a3d3cdfae14e3?Expires=1598832000&Signature=QXNKIMxXwGFOAhNvfhgJKTkMXlGOfgQB3bVcdoDGUOWArQFwMfJEdv1HWQ2kN7hYq5AaWFl72hyop9cf3a7PElFAugNbBDmAw~qQfV7QnekxbbmU--~sKXB4Eh-1STq-6XLVyvLDjUY04U05xgXcklAPZpAB4LRO3wMkNjfFKk6V0zy4Z6oJXgg4nKvxkYhoKFOxY~8qw3BTRYpad7U3~LGgDcwg06q5f1A7gh8jrFPCqfuCynZatMgt49grHpqTE8IZKt20wiyCiRD~qQu-4Y3prgJTGPmeJB7k7cPJtLzFnKvbcF0N8de4U1tsGGkL3NT5SM3hlmaNOUPCiTWyJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
                <Box
                  position="absolute"
                  right={10}
                  bottom={0}
                  zIndex={2}
                  backgroundColor="main"
                  width={20}
                  height={20}
                  borderRadius={10}
                  alignItems="center"
                  justifyContent="center">
                  <Icon name="plus" />
                </Box>
              </Box>
            </TouchableBox>
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
