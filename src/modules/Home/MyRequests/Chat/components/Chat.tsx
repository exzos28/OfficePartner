import React, { useState } from 'react'
import { Box } from '~/theme'
import { Footer } from './Footer'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import { Message as MessageType } from '~/@types'
import { RequestChat } from '../RequestChat'
import { UserChat } from '../UserChat'

type Props = {
  type: 'request' | 'user'
}

const items = [
  {
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A incidunt aperiam eaque architecto quae laboriosam quasi non, dolor ratione nesciunt corporis id explicabo obcaecati praesentium! Animi optio velit quae ducimus.',
    currentOwner: true,
    date: '10:51',
  },
  {
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A incidunt aperiam eaque architecto quae laboriosam quasi non, dolor ratione nesciunt corporis id explicabo obcaecati praesentium! Animi optio velit quae ducimus.',
    currentOwner: true,
    date: '10:51',
  },
  {
    text: 'Первое2',
    currentOwner: true,
    date: '10:51',
  },
  {
    text: 'Второе',
    currentOwner: false,
    date: '10:51',
  },
  {
    text: 'Третье',
    currentOwner: true,
    date: '10:51',
  },
  {
    text: 'Четвертое',
    currentOwner: false,
    date: '10:51',
  },
  {
    text: 'Пятое',
    currentOwner: false,
    date: '10:51',
  },
]

type ChatContextType = {
  inputValue: string
  setInputValue: (text: string) => void
  sendMessage: () => void
  messages: typeof items
  type?: 'request' | 'user'
}

export const ChatContext = React.createContext<ChatContextType>({
  inputValue: '',
  setInputValue: () => {},
  sendMessage: () => {},
  messages: [],
})

export const Chat: React.FC<Props> = ({ type }) => {
  const [messages, setMessages] = useState<Array<MessageType>>(items)
  const [inputValue, setInputValue] = useState<string>('')

  const sendMessage = () => {
    setMessages([
      {
        text: inputValue.trim(),
        currentOwner: true,
        date: new Date().getUTCHours() + ':' + new Date().getUTCMinutes(),
      },
      ...messages,
    ])
    setInputValue('')
  }

  const props = { inputValue, setInputValue, messages, sendMessage, type }

  const _renderChatType = () => {
    if (type === 'request') {
      return <RequestChat />
    } else if (type === 'user') return <UserChat />
    return null
  }

  return (
    <Box flex={1} backgroundColor="lightGrey">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        style={styles.container}>
        <ChatContext.Provider value={props}>
          <Box flex={1}>{_renderChatType()}</Box>
          <Footer />
        </ChatContext.Provider>
      </KeyboardAvoidingView>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
