import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import { Box, Text } from '~/theme'
import { Button } from '~/components/atom'
import { Input, Dropdown } from '~/components/molecules'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'

import { AddImage } from './AddImage'

const items = [
    {
      id: 1,
      modalItemComponent: 'Принтер1',
      value: 'print',
    },
    {
      id: 2,
      modalItemComponent: 'Принтер2',
      value: 'print',
    },
    {
      id: 3,
      modalItemComponent: 'Принтер3',
      value: 'print',
    },
]

export const AddTechnik: React.FC = () => (
  <Box flex={1} backgroundColor="lightGrey">
    <Header title="Добавление нового устройства" />
    <ScrollView>
      <Box flex={1} paddingVertical="m">
        <Section containerStyleProps={{ paddingTop: 's' }}>
          <Box marginBottom="m" flexDirection="row" alignItems="center">
            <Box marginRight="l">
              <AddImage />
            </Box>
            <Box flexShrink={1}>
              <Text variant="regular" color="dark">
                Загрузите фотографию устройства
              </Text>
            </Box>
          </Box>

          <Box marginBottom="m">
            <Dropdown label="Тип устройства" items={items} />
          </Box>

          <Box marginBottom="m">
            <Input label="Модель" />
          </Box>
          <Box marginBottom="m">
            <Input label="Серийный номер" />
          </Box>
          <Box marginBottom="m">
            <Input
              label="Локация"
              inputContainerProps={{ height: 120 }}
              inputProps={{
                multiline: true,
                placeholder: 'Адрес офиса, этаж, № офиса',
              }}
            />
          </Box>
          <Box>
            <Button text="Добавить устройство" onPress={() => {}} />
          </Box>
        </Section>
      </Box>
    </ScrollView>
  </Box>
)
