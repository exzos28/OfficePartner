import React from 'react'
import { Box, Text } from '~/theme'
import { CELL_WIDTH, CELL_HEIGHT } from '.'

const names = ['П', 'В', 'С', 'Ч', 'П', 'С', 'В']

export const WeekShorts = () => (
  <Box flexDirection="row">
    {names.map((day, index) => (
      <Box
        key={index}
        alignItems="center"
        justifyContent="center"
        height={CELL_HEIGHT}
        width={CELL_WIDTH}>
        <Text>{day}</Text>
      </Box>
    ))}
  </Box>
)
