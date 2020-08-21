import React, { useContext } from 'react'
import { Box } from '~/theme'
import { Message } from './Message'
import { FlatList } from 'react-native-gesture-handler'
import { ChatContext } from '.'

export const Main = () => {
  const { messages } = useContext(ChatContext)
  return (
    <Box flex={1}>
      <FlatList
        showsVerticalScrollIndicator={false}
        inverted
        data={messages}
        keyExtractor={(_, i) => i + ''} // TODO 
        renderItem={({ item, index }) => (
          <Message {...item} nextMessage={messages[index - 1]} /> // TODO понять почему ругается TS
        )}
      />
    </Box>
  )
}
