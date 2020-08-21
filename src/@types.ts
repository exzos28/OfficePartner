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
