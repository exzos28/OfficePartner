import React, { useState } from 'react'
import { Box } from '~/theme'
import { Header } from '~/components/organisms'
import { Fab, SelectedModal } from '~/components/molecules'
import { useNavigation } from '@react-navigation/native'
import { chatListUsers } from '~/mock'
import { MasterCardList } from '../components/organisms'

const modalTypeItems = [
  {
    id: 1,
    modalItemComponent: 'Консультация',
    value: '',
  },
  {
    id: 2,
    modalItemComponent: 'Вызов мастера',
    value: '',
  },
  {
    id: 3,
    modalItemComponent: 'Запрос КП',
    value: '',
  },
  {
    id: 4,
    modalItemComponent: 'Финансовые вопросы',
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
          <MasterCardList items={chatListUsers} />
        </Box>
        <Fab onPress={() => setTypeModalVisible(true)} />
        <SelectedModal
          numbered
          items={modalTypeItems}
          modalVisible={typeModalVisible}
          dismiss={() => setTypeModalVisible(false)}
          modalTitle="Выберете тип вопроса"
          {...{ handleSelect }}
        />
      </Box>
    </>
  )
}
