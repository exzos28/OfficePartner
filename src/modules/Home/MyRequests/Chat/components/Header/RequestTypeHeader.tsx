import React from 'react'
import { Box, Text, shadow } from '~/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Platform } from 'react-native'
import { Icon } from '~/components/atom/Icon'
import { IconButton } from '~/components/atom/'
import { useNavigation } from '@react-navigation/native'

type Props = {
  hasBack?: boolean
  title?: string
}


export const RequestTypeHeader: React.FC<Props> = ({
  hasBack = true,
  title,
}) => {
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
    <Box width={25} paddingRight="s" alignItems="center"></Box>
  )

  const _renderCenter = () => {
    return (
      <Box alignItems="center">
        <Text marginBottom="xs" variant="headerTitle">
          {title}
        </Text>
        <Box justifyContent="center" flexDirection="row">
          <Text
            marginRight="xs"
            fontSize={12}
            variant="regular"
            color="requestCardTitle">
            Статус:
          </Text>
          <Text variant="semiBold" fontSize={13} color="yellow">
            в обработке
          </Text>
        </Box>
      </Box>
    )
  }

  return (
    <Box
      zIndex={2}
      {...shadow}
      height={89 + (Platform.OS === 'ios' ? top : 0)}
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
