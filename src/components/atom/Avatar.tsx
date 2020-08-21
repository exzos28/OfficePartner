import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image, StyleSheet } from 'react-native'
import restyleTheme, { Box } from '~/theme'

type Props = {
  uri: string
}

export const Avatar: React.FC<Props> = ({ uri }) => (
  <Box borderRadius={25} overflow="hidden" width={51} height={51}>
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
