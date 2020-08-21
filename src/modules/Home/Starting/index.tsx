import React from 'react'
import { Box } from '~/theme'
import { Header, ListMenu } from '~/components/organisms'
import { Avatar, Icon } from '~/components/atom'
import { useNavigation } from '@react-navigation/native'

const AVATAR_URI =
  'https://s3-alpha-sig.figma.com/img/d0a3/ed24/e885209761ab88291ee61170bec5d182?Expires=1598832000&Signature=M1uZuVkIlQhpPolHg-bDrPz30AzTZUNSugO9pz~y0UcnJYtmy-vcJZuTin2nvzqDIjcSO9Z5IUjEVseqWGX7rU6LEcmk2k9Np8~excoO-1G7j0naXxfFRmK0DxeA~ERsIw1OSvSMyx1oHl1112k1QwDWDKIjpsQ3hN7SBa2bhyQkZVBEVFvsm~eTAb4yqxRyRCLg1V6L9c36Iowp5ldGb-aTl-dyGmcGdZtx59Vbv1t4jmMgEVtX8e~donCBHFYA34SJa5BJmtOOt9n2rwbfMb~P~0Mwap5jdiiR7cb3HhDX4nFfc~~mijBLVcdww7dQxAhhORNuJHTWSKTUTPuwUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

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
    },
  ]

  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header
        leftComponent={
          <Box paddingLeft="l">
            <Avatar uri={AVATAR_URI} />
          </Box>
        }
      />
      <ListMenu items={menuItems} />
    </Box>
  )
}
