import React from 'react'

import restyleTheme, { Box, Text, TouchableBox } from '~/theme'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'
import { Avatar, Icon, Button } from '~/components/atom'
import { Input } from '~/components/molecules'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
            <TouchableBox alignItems="center" paddingVertical="l">
              <Box>
                <Avatar
                  size={{ height: 97, width: 97 }}
                  uri="https://s3-alpha-sig.figma.com/img/d0a3/ed24/e885209761ab88291ee61170bec5d182?Expires=1598832000&Signature=M1uZuVkIlQhpPolHg-bDrPz30AzTZUNSugO9pz~y0UcnJYtmy-vcJZuTin2nvzqDIjcSO9Z5IUjEVseqWGX7rU6LEcmk2k9Np8~excoO-1G7j0naXxfFRmK0DxeA~ERsIw1OSvSMyx1oHl1112k1QwDWDKIjpsQ3hN7SBa2bhyQkZVBEVFvsm~eTAb4yqxRyRCLg1V6L9c36Iowp5ldGb-aTl-dyGmcGdZtx59Vbv1t4jmMgEVtX8e~donCBHFYA34SJa5BJmtOOt9n2rwbfMb~P~0Mwap5jdiiR7cb3HhDX4nFfc~~mijBLVcdww7dQxAhhORNuJHTWSKTUTPuwUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                onPress={() => navigation.navigate('CompanyOffice')}
                weight="semiBold"
                text="Офис фирмы"
                variant="light"
              />
            </Box>
            <Box
              paddingVertical="l"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Box flex={1}>
                <Text color="inputLabel" variant="regular" marginRight="m">
                  Создать пользователя в рамках своей компании
                </Text>
              </Box>

              <TouchableBox
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
          </Section>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  )
}
