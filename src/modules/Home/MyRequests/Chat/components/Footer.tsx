import React, { useContext } from 'react'
import { Box, shadow } from '~/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Input } from './Input'
import { Icon } from '~/components/atom'
import { ChatContext } from './Chat'
import { Platform } from 'react-native'

export const Footer = () => {
  const { bottom } = useSafeAreaInsets()
  const height = 90 //+ bottom / 2

  const { inputValue, sendMessage } = useContext(ChatContext)

  return (
    <Box
      {...shadow}
      paddingHorizontal="m"
      paddingVertical="m"
      borderTopLeftRadius={25}
      borderTopRightRadius={25}
      backgroundColor="white"
      // height={height}
    >
      <Box flexDirection="row" alignItems="center">
        <Box marginRight="m">
          <Icon touchable name="pinFile" />
        </Box>
        <Box marginRight="s" flexShrink={1} flexGrow={1}>
          <Input />
        </Box>
        {inputValue.trim() !== '' && (
          <Box paddingTop="s" width={30}>
            <Icon onPress={sendMessage} touchable name="sendMessage" />
          </Box>
        )}
      </Box>
      <Box height={Platform.OS === 'ios' ? bottom / 2 : 0} />
    </Box>
  )
}
