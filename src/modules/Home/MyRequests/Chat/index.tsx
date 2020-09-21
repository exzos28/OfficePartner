import React from 'react'
import { useRoute } from '@react-navigation/native'
import { ChatScreenRouteProp } from '~/navigation/Home/MyRequestsStack'
import { Chat } from './components/Chat'

type Props = {}

export const ChatScreen: React.FC<Props> = () => {
  const route = useRoute<ChatScreenRouteProp>()
  const { type } = route.params
  return <Chat {...{ type }} />
}

export { Chat }
