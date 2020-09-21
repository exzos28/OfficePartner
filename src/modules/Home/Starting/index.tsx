import React from 'react'
import { Box } from '~/theme'
import { Header, ListMenu } from '~/components/organisms'
import { Avatar, Icon } from '~/components/atom'
import { useNavigation } from '@react-navigation/native'

const AVATAR_SOURCE = require('~/assets/mock/user1.png')

export const Starting: React.FC = () => {
  const navigation = useNavigation()
  const menuItems = [
    {
      name: 'Моя техника',
      icon: <Icon name="print" />,
      number: 5,
      onPress: () => navigation.navigate('TechnikStack'),
    },
    {
      name: 'Мои запросы',
      icon: <Icon name="request" />,
      number: 100,
      onPress: () => navigation.navigate('MyRequestsStack'),
    },
    {
      name: 'Мой календарь',
      icon: <Icon name="calendar" />,
      onPress: () => navigation.navigate('MyCalendar'),
    },
    {
      name: 'QR код',
      icon: <Icon name="qrcode" />,
      onPress: () => navigation.navigate('ScanQRStack'),
    },
    {
      name: 'Мой счет',
      icon: <Icon name="score" />,
    },
    {
      name: 'Мой профиль',
      icon: <Icon name="account" />,
      onPress: () => navigation.navigate('MyProfileStack'),
    },
  ]

  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header
        leftComponent={
          <Box paddingLeft="l">
            <Avatar source={AVATAR_SOURCE} />
          </Box>
        }
      />
      <ListMenu items={menuItems} />
    </Box>
  )
}
