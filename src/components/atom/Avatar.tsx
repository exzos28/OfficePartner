import React from 'react'
import { Image, StyleSheet, ImageRequireSource } from 'react-native'
import restyleTheme, { Box } from '~/theme'

type Props = {
  uri?: string
  size?: {
    width: number
    height: number
  }
  source?: ImageRequireSource
}

export const Avatar: React.FC<Props> = ({ uri, source, size }) => {
  const width = size?.width || 51
  const height = size?.height || 51


  const _source = source ? source : { uri }

 
  return (
    <Box borderRadius={width / 2} overflow="hidden" {...{ width, height }}>
      <Image
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: restyleTheme.colors.mediumGrey,
        }}
        source={_source}
      />
    </Box>
  )
}
