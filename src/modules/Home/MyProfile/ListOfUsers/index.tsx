import React from 'react'
import { Box } from '~/theme'
import { Header } from '~/components/organisms'
import { UsersList } from './components/organisms'
import { usersList } from '~/mock'

export const ListOfUsers: React.FC = () => (
  <Box flex={1} backgroundColor="lightGrey">
    <Header title="Список пользователей" />
    <Box flex={1}>
      <UsersList items={usersList} />
    </Box>
  </Box>
)
