import React from 'react'

import { Box } from '~/theme'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'
import { Button } from '~/components/atom'
import { Input } from '~/components/molecules'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const BankData: React.FC = () => {
  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Банковские данные" />
      <KeyboardAwareScrollView>
        <Box paddingVertical="m">
          <Section containerStyleProps={{ paddingTop: 'l' }}>
            <Box marginBottom="m">
              <Input label="№ счета" required />
            </Box>
            <Box marginBottom="m">
              <Input label="Наименование банка" required />
            </Box>
            <Box marginBottom="m">
              <Input label="ИНН Банка*" required />
            </Box>
            <Box marginBottom="m">
              <Input label="БИК Банка" required />
            </Box>
            <Box marginBottom="m">
              <Input label="к/с банка" required />
            </Box>
            <Box marginBottom="xl">
              <Input
                label="Телефон контакного лица"
                inputProps={{ keyboardType: 'phone-pad' }}
                type="phone"
              />
            </Box>
            <Box marginBottom="xl">
              <Button onPress={() => {}} text="Сохранить" />
            </Box>
          </Section>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  )
}
