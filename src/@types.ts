import { ImageRequireSource } from 'react-native'

export type Technik = {
  imgUri: ImageRequireSource // TODO сменить на uri когда будет сервер, сейчас mock на require
  name: string
  code: string
  status: number
}

export type Master = {
  subtitle: string
  name: string
  imgUri: string
  requestCount?: number | string
}

export type Message = {
  text: string
  date: string
  currentOwner: boolean
}

export type SelectedModalItemType = {
  id: number
  modalItemComponent: string | number | React.ReactNode
  inputSelectedValue?: React.ReactNode
  value: string | number
  type?: 'primary' | string
  onPress?: () => void
}

export type User = {
  role: string
  name: string
  imgUri: string
}
