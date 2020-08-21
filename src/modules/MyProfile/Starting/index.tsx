import React from 'react'

import { Box } from '~/theme'
import { Header, ListMenu } from '~/components/organisms'
import { Icon } from '~/components/atom'
import { useNavigation } from '@react-navigation/native'

export const Starting: React.FC = () => {
  const navigation = useNavigation()
  const menuItems = [
    {
      name: 'Профиль администратора',
      icon: <Icon name="settings" />,
      onPress: () => navigation.navigate('AdmistatorsProfile'),
    },
    {
      name: 'Профиль менеджера',
      icon: <Icon name="evrika" />,
    },
  ]

  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Мой профиль" />
      <ListMenu items={menuItems} />
    </Box>
  )
}
