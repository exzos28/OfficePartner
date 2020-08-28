import React, { Props } from 'react'

import restyleTheme, { Box, Text, TouchableBox } from '~/theme'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'
import { Icon, Button } from '~/components/atom'
import { Input } from '~/components/molecules'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AddImage } from '../components'

type Props = {
  text: string
  onButtonPress: () => void
}

const AddItemSection: React.FC<Props> = ({ text, onButtonPress }) => (
  <Box
    paddingVertical="s"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between">
    <Box flex={1}>
      <Text color="inputLabel" variant="regular" marginRight="m">
        {text}
      </Text>
    </Box>

    <TouchableBox
      onPress={onButtonPress}
      borderRadius={15}
      width={63}
      height={54}
      backgroundColor="main"
      justifyContent="center"
      alignItems="center">
      <Box
        width={16}
        height={16}
        borderRadius={8}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center">
        <Icon name="plus" color={restyleTheme.colors.main} />
      </Box>
    </TouchableBox>
  </Box>
)
export const AdmistatorsProfile: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Мой профиль" />
      <KeyboardAwareScrollView>
        <Box paddingVertical="m">
          <Section containerStyleProps={{ paddingTop: 'l' }}>
            <Text variant="regular" fontSize={16} textAlign="center">
              Профиль администратора
            </Text>
            <AddImage />
            <Box marginBottom="m">
              <Input
                label="Телефон"
                inputProps={{ keyboardType: 'phone-pad' }}
                type="phone"
                required
              />
            </Box>
            <Box marginBottom="m">
              <Input label="E-mail" required />
            </Box>
            <Box marginBottom="l">
              <Input label="Сайт" />
            </Box>
            <Box marginBottom="s">
              <Button
                onPress={() => navigation.navigate('GeneralInformation')}
                weight="semiBold"
                text="Общая информация"
                variant="light"
              />
            </Box>
            <Box marginBottom="s">
              <Button
                onPress={() => navigation.navigate('BankData')}
                weight="semiBold"
                text="Банковские данные"
                variant="light"
              />
            </Box>
            <Box marginBottom="s">
              <Button
                disabled
                onPress={() => navigation.navigate('CompanyOffice')}
                weight="semiBold"
                text="Офис фирмы"
                variant="light"
              />
            </Box>
            <AddItemSection
              text="Добавить новый офис"
              onButtonPress={() => navigation.navigate('CompanyOffice')}
            />
            <AddItemSection
              text="Создать пользователя в рамках своей компании"
              onButtonPress={() => navigation.navigate('UserCreation')}
            />
          </Section>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  )
}
