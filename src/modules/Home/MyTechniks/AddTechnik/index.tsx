import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import restyleTheme, { Box, Text, TouchableBox } from '~/theme'
import { Button, Icon } from '~/components/atom'
import { Input, Dropdown } from '~/components/molecules'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'

import { AddImage } from './AddImage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
    <KeyboardAwareScrollView>
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
          <Box marginBottom="m">
            <Text variant="inputLabel" marginBottom="s">
              Геотеги
            </Text>
            <Text
              variant="regular"
              fontSize={11}
              lineHeight={13}
              marginBottom="m">
              В поле ниже, отметьте, пожалуйста, геотеги оборудования (название
              отдела, этаж, офис и др.)
            </Text>
            <Box marginBottom="xm">
              <Input />
            </Box>
            <TouchableBox
              alignSelf="center"
              paddingHorizontal="s"
              paddingVertical="xs"
              borderRadius={5}
              flexDirection="row"
              borderWidth={1}
              borderColor="primary"
              justifyContent="center"
              alignItems="center">
              <Box marginRight="xs">
                <Icon
                  name="plus"
                  size={{ width: 15, height: 15 }}
                  color={restyleTheme.colors.primary}
                />
              </Box>
              <Text variant="regular" color="primary" fontSize={12}>
                Добавить геотег
              </Text>
            </TouchableBox>
          </Box>
          <Box marginBottom="m">
            <Button text="Добавить устройство" onPress={() => {}} />
          </Box>
        </Section>
      </Box>
    </KeyboardAwareScrollView>
  </Box>
)
