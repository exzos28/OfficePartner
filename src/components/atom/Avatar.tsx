import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image, StyleSheet } from 'react-native'
import restyleTheme, { Box } from '~/theme'

type Props = {
  uri: string
  size?: {
    width: number
    height: number
  }
}

export const Avatar: React.FC<Props> = ({ uri, size }) => {
  const width = size?.width || 51
  const height = size?.height || 51
  return (
    <Box borderRadius={width / 2} overflow="hidden" {...{ width, height }}>
      <Image
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: restyleTheme.colors.mediumGrey,
        }}
        source={{
          uri,
        }}
      />
    </Box>
  )
}
