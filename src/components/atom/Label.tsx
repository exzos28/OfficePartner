import React from 'react'
import { Box, Text } from '~/theme'

type Props = {
    label: string
}

export const Label: React.FC<Props> = ({ label }) => (
    <Box marginBottom="s">
        <Text variant="inputLabel">{label}</Text>
    </Box>
)