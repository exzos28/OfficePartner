import React from 'react'
import { Box, Text } from '~/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Platform } from 'react-native'
import { Icon } from '../atom/Icon'
import { IconButton, DotNumber } from '../atom'
import { useNavigation } from '@react-navigation/native'

type Props = {
  hasBack?: boolean
  title?: string
  titleDotNumber?: number
  leftComponent?: React.ReactNode
  rightComponent?: React.ReactNode
}

export const Header: React.FC<Props> = ({
  hasBack = true,
  titleDotNumber,
  title,
  leftComponent,
  rightComponent,
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

  const _renderLeft = () => {
    return (
      <Box flexGrow={1} flexShrink={3} flexDirection="row" paddingRight="s">
        {leftComponent ? (
          leftComponent
        ) : (
          <>
            {_renderBackArrow()}
            <Box
              justifyContent="center"
              flexDirection="row"
              alignItems="center">
              <Text marginRight="m" variant="headerTitle">
                {title}
              </Text>
              {titleDotNumber && <DotNumber number={titleDotNumber} />}
            </Box>
          </>
        )}
      </Box>
    )
  }

  const _renderRight = () => {
    return (
      <Box flexShrink={1} flexDirection="row" alignItems="center">
        {rightComponent ? (
          rightComponent
        ) : (
          <>
            <IconButton onPress={() => navigation.navigate('Notifications')}>
              <Icon name="notification" />
              <Box
                position="absolute"
                top={4}
                right={12}
                width={9}
                height={9}
                borderRadius={4.5}
                backgroundColor="info"
              />
            </IconButton>
            <IconButton>
              <Icon name="menu" />
            </IconButton>
          </>
        )}
      </Box>
    )
  }

  return (
    <Box
      zIndex={2}
      elevation={1}
      shadowColor="grey"
      shadowOffset={{
        width: 0,
        height: 0,
      }}
      shadowOpacity={0.4}
      shadowRadius={10}
      minHeight={89 + (Platform.OS === 'ios' ? top : 0)}
      paddingHorizontal="m"
      paddingVertical="m"
      justifyContent="center"
      backgroundColor="white"
      borderBottomLeftRadius={25}
      borderBottomRightRadius={25}>
      <Box height={Platform.OS === 'ios' ? top : 0} />
      <Box flexDirection="row" justifyContent="space-between" maxWidth="100%">
        {_renderLeft()}
        {_renderRight()}
      </Box>
    </Box>
  )
}
