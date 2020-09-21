import React from 'react'
import { RequestTypeHeader } from './components/Header/RequestTypeHeader'
import { Main } from './Main'
import { Box } from '~/theme'
import { RequestInfo } from './components/RequestInfo'

export const RequestChat = () => {
  return (
    <>
      <RequestTypeHeader title="Название запроса" />
      <Main />
      <RequestInfo />
    </>
  )
}
