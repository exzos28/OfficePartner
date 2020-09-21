import React, { useContext } from 'react'
import restyleTheme, { Box } from '~/theme'
import { FlatList } from 'react-native-gesture-handler'
import { Message } from './components/Message'
import { ChatContext } from './components/Chat'
import { HEIGHT } from './components/RequestInfo'
import { useKeyboard } from '~/hooks/Keyboard'

export const Main = () => {
  const { messages, type } = useContext(ChatContext)
  const [keyboard] = useKeyboard()
  const paddingBottom = (() => {
    const defaultVal = restyleTheme.spacing.m * 2
    if (type !== 'request') return defaultVal
    return keyboard ? defaultVal : HEIGHT + defaultVal
  })() // отступ сверху для баннера со статусом
  return (
    <Box flex={1}>
      <FlatList
        showsVerticalScrollIndicator={false}
        inverted
        data={messages}
        contentContainerStyle={{
          paddingBottom: paddingBottom, // отступ сверху для баннера со статусом
        }}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <Message {...item} nextMessage={messages[index - 1]} />
        )}
      />
    </Box>
  )
}
