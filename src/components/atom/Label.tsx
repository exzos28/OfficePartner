import React from 'react'
import { Box, Text } from '~/theme'

type Props = {
  label: string
  required?: boolean
}

export const Label: React.FC<Props> = ({ label, required }) => (
  <Box marginBottom="s" flexDirection="row">
    <Text variant="inputLabel">{label}</Text>
    {required ? (
      <Box top={-5} left={0.5}>
        <Text fontSize={17} color="info">
          *
        </Text>
      </Box>
    ) : null}
  </Box>
)
