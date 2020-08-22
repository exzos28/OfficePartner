export type Technik = {
  imgUri: string
  name: string
  code: string
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
