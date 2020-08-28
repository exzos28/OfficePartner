import React, { useState } from 'react'

import { Box, TouchableBox } from '~/theme'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'
import { Icon, Button, EmptyAvatar } from '~/components/atom'
import { Input, Dropdown, CheckboxGroup } from '~/components/molecules'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AddImage } from '../components'
import { roleItems } from '~/mock'

const defaultAccessToSectionsItems = [
  {
    id: 1,
    text: 'Моя техника',
    checked: true,
  },
  {
    id: 2,
    text: 'Мои запросы',
    checked: false,
  },
  {
    id: 3,
    text: 'Мой календарь',
    checked: false,
  },
  {
    id: 4,
    text: 'QR код',
    checked: true,
  },
  {
    id: 5,
    text: 'Мой счет',
    checked: false,
  },
]

export const UserCreation: React.FC = () => {
  const navigation = useNavigation()

  const [accessToSectionsItems, setAccessToSectionsItems] = useState(
    defaultAccessToSectionsItems,
  )

  const onChangeAccessItem = (id: number) => {
    setAccessToSectionsItems(
      defaultAccessToSectionsItems.map((sectionItem) => {
        if (sectionItem.id === id) {
          const newSectionItem = sectionItem
          newSectionItem.checked = !sectionItem.checked
          return newSectionItem
        }
        return sectionItem
      }),
    )
  }

  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Создание пользователя" />
      <KeyboardAwareScrollView>
        <Box paddingVertical="m">
          <Section>
            <TouchableBox marginBottom="m" alignItems="center">
              <Box>
                <AddImage />
              </Box>
            </TouchableBox>
            <Box marginBottom="m">
              <Input label="Имя и Фамилия" />
            </Box>
            <Box marginBottom="m">
              <Input label="E-mail" />
            </Box>
            <Box marginBottom="l">
              <Dropdown label="Роль" items={roleItems} />
            </Box>
            <Box marginBottom="m">
              <CheckboxGroup
                label="Доступы к разделам"
                items={accessToSectionsItems}
                onChangeItem={onChangeAccessItem}
              />
            </Box>
            <Box marginBottom="xl">
              <Button onPress={() => navigation.goBack()} text="Сохранить" />
            </Box>
          </Section>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  )
}
