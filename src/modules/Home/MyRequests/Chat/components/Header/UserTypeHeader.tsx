import React from 'react'
import { Box, Text, shadow } from '~/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Platform } from 'react-native'
import { Icon } from '~/components/atom/Icon'
import { IconButton, Avatar, DotNumber } from '~/components/atom/'
import { useNavigation } from '@react-navigation/native'

type Props = {
  hasBack?: boolean
  title?: string
}

export const UserTypeHeader: React.FC<Props> = ({ hasBack = true, title }) => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation()

  const _renderBackArrow = () => {
    if (hasBack) {
      return (
        <IconButton onPress={() => navigation.goBack()}>
          <Icon name="left-arrow" />
        </IconButton>
      )
    }
  }

  const _renderLeft = () => (
    <Box justifyContent="center">{_renderBackArrow()}</Box>
  )

  const _renderRight = () => (
    <Box paddingRight="s" alignItems="center">
      <Avatar source={require('~/assets/mock/user1.png')} />
    </Box>
  )

  const _renderCenter = () => {
    return (
      <Box justifyContent="center" alignItems="center">
        <Text marginBottom="xs" variant="headerTitle">
          {title}
        </Text>
        <Text color="mediumGrey" marginBottom="xs" variant="regular">
          Вызов мастера
        </Text>
        <Text color="primary" variant="regular">
          4QD21A
        </Text>
      </Box>
    )
  }

  return (
    <Box
      zIndex={2}
      {...shadow}
      minHeight={89 + (Platform.OS === 'ios' ? top : 0)}
      padding="m"
      justifyContent="center"
      backgroundColor="white"
      borderBottomLeftRadius={25}
      borderBottomRightRadius={25}>
      <Box height={Platform.OS === 'ios' ? top : 0} />
      <Box flexDirection="row" justifyContent="space-between" maxWidth="100%">
        {_renderLeft()}
        {_renderCenter()}
        {_renderRight()}
      </Box>
    </Box>
  )
}
