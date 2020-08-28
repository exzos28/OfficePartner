import React from 'react'

import { Box } from '~/theme'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'
import { Button } from '~/components/atom'
import { Input } from '~/components/molecules'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const GeneralInformation: React.FC = () => {
  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Общая информация" />
      <KeyboardAwareScrollView>
        <Box paddingVertical="m">
          <Section containerStyleProps={{ paddingTop: 'l' }}>
            <Box marginBottom="m">
              <Input label="Бренд" />
            </Box>
            <Box marginBottom="m">
              <Input label="ИНН" required />
            </Box>
            <Box marginBottom="m">
              <Input label="КПП" required />
            </Box>
            <Box marginBottom="m">
              <Input label="ОРГН" required />
            </Box>
            <Box marginBottom="m">
              <Input label="Наименование юр. лица" required />
            </Box>
            <Box marginBottom="m">
              <Input label="Юридический адрес" required />
            </Box>
            <Box marginBottom="xl">
              <Input label="Фактический адрес" />
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
