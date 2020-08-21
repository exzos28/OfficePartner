import React, { useState } from 'react'
import { Box, TouchableBox, Text } from '~/theme'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'
import { MasterCardList } from '~/components/organisms/MasterCardList'
import { Fab, Dropdown, Modal } from '~/components/molecules'
import { useNavigation } from '@react-navigation/native'

const items = [
  {
    name: 'Марк Герасимов',
    subtitle: 'Доставка',
    requestCount: 1,
    imgUri:
      'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/1156d96da3e77a5062551b3e7449379ca403cddd',
  },
  {
    name: 'Виктор Базаров',
    subtitle: 'Вызов мастера',
    requestCount: 2,
    imgUri:
      'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/b643afd80f2698f277d180c4ff4254592add2d23',
  },
  {
    name: 'Марк Герасимов',
    subtitle: 'Доставка',
    requestCount: 1,
    imgUri:
      'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/1156d96da3e77a5062551b3e7449379ca403cddd',
  },
  {
    name: 'Виктор Базаров',
    subtitle: 'Вызов мастера',
    requestCount: 2,
    imgUri:
      'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/b643afd80f2698f277d180c4ff4254592add2d23',
  },
  {
    name: 'Марк Герасимов',
    subtitle: 'Доставка',
    requestCount: 1,
    imgUri:
      'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/1156d96da3e77a5062551b3e7449379ca403cddd',
  },
  {
    name: 'Виктор Базаров',
    subtitle: 'Вызов мастера',
    requestCount: 2,
    imgUri:
      'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/b643afd80f2698f277d180c4ff4254592add2d23',
  },
  {
    name: 'Марк Герасимов',
    subtitle: 'Доставка',
    requestCount: 1,
    imgUri:
      'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/1156d96da3e77a5062551b3e7449379ca403cddd',
  },
  {
    name: 'Виктор Базаров',
    subtitle: 'Вызов мастера',
    requestCount: 2,
    imgUri:
      'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/b643afd80f2698f277d180c4ff4254592add2d23',
  },
  {
    name: 'Марк Герасимов',
    subtitle: 'Доставка',
    requestCount: 1,
    imgUri:
      'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/1156d96da3e77a5062551b3e7449379ca403cddd',
  },
  {
    name: 'Виктор Базаров',
    subtitle: 'Вызов мастера',
    requestCount: 2,
    imgUri:
      'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/b643afd80f2698f277d180c4ff4254592add2d23',
  },
]

const modalTypeItems = [
  {
    id: 1,
    text: 'Консультация',
    value: '',
  },
  {
    id: 2,
    text: 'Вызов мастера',
    value: '',
  },
  {
    id: 3,
    text: 'Запрос КП',
    value: '',
  },
  {
    id: 4,
    text: 'Финансовые вопросы',
    value: '',
  },
]

export const Starting: React.FC = () => {
  const [typeModalVisible, setTypeModalVisible] = useState(false)
  const navigation = useNavigation()

  const handleSelect = () => {
    setTypeModalVisible(false)
    navigation.navigate('Chat')
  }

  return (
    <>
      <Box flex={1} backgroundColor="lightGrey">
        <Header title="Мои запросы" titleDotNumber={3} />
        <Box flex={1}>
          <MasterCardList items={items} />
        </Box>
        <Fab onPress={() => setTypeModalVisible(true)} />
        <Modal
          numbered
          items={modalTypeItems}
          modalVisible={typeModalVisible}
          modalTitle="Выберете тип вопроса"
          {...{ handleSelect }}
        />
      </Box>
    </>
  )
}
