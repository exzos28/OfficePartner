import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Box } from '~/theme'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'
import { Button } from '~/components/atom'
import { Input } from '~/components/molecules'

export const CompanyOffice: React.FC = () => {
  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Офис фирмы" />
      <KeyboardAwareScrollView>
        <Box paddingVertical="m">
          <Section containerStyleProps={{ paddingTop: 'l' }}>
            <Box marginBottom="m">
              <Input label="Название офиса" />
            </Box>
            <Box marginBottom="m">
              <Input label="Город" />
            </Box>
            <Box marginBottom="m">
              <Input label="Индекс" />
            </Box>
            <Box marginBottom="m">
              <Input label="Улица" />
            </Box>
            <Box marginBottom="m">
              <Input label="Номер дома" />
            </Box>
            <Box marginBottom="m">
              <Input label="Номер корпуса" />
            </Box>
            <Box marginBottom="m">
              <Input label="Подьезд" />
            </Box>
            <Box marginBottom="m">
              <Input label="Этаж" />
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
