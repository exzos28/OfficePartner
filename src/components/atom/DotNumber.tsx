import React from 'react'
import { Box, Text, Theme } from '~/theme'
import { BackgroundColorProps } from '@shopify/restyle'

type Props = BackgroundColorProps<Theme> & {
  number: number | string
}

export const DotNumber: React.FC<Props> = ({
  backgroundColor = 'info',
  number,
}) => (
  <Box
    height={23}
    minWidth={23}
    paddingHorizontal="s"
    alignItems="center"
    justifyContent="center"
    borderRadius={12}
    {...{ backgroundColor }}>
    <Text variant="medium" fontSize={12} lineHeight={12} color="white">
      {number}
    </Text>
  </Box>
)
