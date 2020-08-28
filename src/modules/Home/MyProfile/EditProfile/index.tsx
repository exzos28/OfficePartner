import React, { useState } from 'react'
import { Box } from '~/theme'
import { Header } from '~/components/organisms'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Section } from '~/components/template'
import {
  Input,
  Dropdown,
  CheckboxGroup,
  RadioGroup,
} from '~/components/molecules'
import { AddImage } from '../components'
import { roleItems, officeItems } from '~/mock'

const defaultAccessToSectionsItems = [
  {
    id: 1,
    text: 'Админ',
    checked: true,
  },
  {
    id: 2,
    text: 'Менеджер',
    checked: false,
  },
]

export const EditProfile: React.FC = () => {
  const [accessToSectionsItems, setAccessToSectionsItems] = useState(
    defaultAccessToSectionsItems,
  )

  const onChangeAccessItem = (id: number) => {
    setAccessToSectionsItems(
      defaultAccessToSectionsItems.map((sectionItem) => {
        if (sectionItem.id === id) {
          const newSectionItem = sectionItem
          newSectionItem.checked = true
          return newSectionItem
        } else {
          const newSectionItem = sectionItem
          newSectionItem.checked = false
          return newSectionItem
        }
      }),
    )
  }

  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Редактировать" />
      <KeyboardAwareScrollView>
        <Box paddingVertical="m">
          <Section containerStyleProps={{ paddingTop: 'xs' }}>
            <AddImage />
            <Box marginBottom="m">
              <Input label="Имя" />
            </Box>
            <Box marginBottom="m">
              <Input label="Фамилия" />
            </Box>
            <Box marginBottom="m">
              <Input label="Офис" />
            </Box>
            <Box marginBottom="m">
              <Dropdown label="Роль" items={roleItems} />
            </Box>
            <Box marginBottom="m">
              <Dropdown label="Офис" items={officeItems} />
            </Box>
            <Box marginBottom="m">
              <RadioGroup
                containerStyle={{
                  flexDirection: 'row',
                }}
                label="Тип"
                items={accessToSectionsItems}
                onChangeItem={onChangeAccessItem}
              />
            </Box>
          </Section>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  )
}
