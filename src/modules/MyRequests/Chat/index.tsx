import React, { useState } from 'react'
import { Box } from '~/theme'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import { Message as MessageType } from '~/@types'

const items = [
  {
    text: 'Первое',
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
}

export const ChatContext = React.createContext<ChatContextType>({
  inputValue: '',
  setInputValue: () => {},
  sendMessage: () => {},
})

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Array<MessageType>>(items)
  const [inputValue, setInputValue] = useState<string>(``)

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

  const props = { inputValue, setInputValue, messages, sendMessage }

  return (
    <Box flex={1} backgroundColor="lightGrey">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        style={styles.container}>
        <ChatContext.Provider value={props}>
          <Header title="Виктор Базаров" />
          <Main />
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
