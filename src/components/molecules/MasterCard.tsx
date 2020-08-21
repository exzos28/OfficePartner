import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import restyleTheme, { TouchableBox, Box, Text, Theme } from '~/theme'
import { SpacingProps } from '@shopify/restyle'
import { Avatar, DotNumber } from '../atom'

import { shadow } from '~/theme'
import { Master } from '~/@types'

type Props = Master & {
  spacing: SpacingProps<Theme>
  onPress: () => void
}

export const WIDTH = 160
export const HEIGTH = 140

export const MasterCard: React.FC<Props> = ({
  spacing,
  subtitle,
  name,
  requestCount,
  imgUri,
  onPress,
}) => (
  <TouchableBox
    backgroundColor="white"
    height={HEIGTH}
    width={WIDTH}
    alignItems="center"
    padding="m"
    borderRadius={6}
    {...{ onPress }}
    {...shadow}
    {...spacing}>
    <Box flex={1} alignItems="center">
      <Box marginBottom="s">
        <Avatar uri={imgUri} />
      </Box>
      <Box style={{ marginBottom: 'auto' }}>
        <Text
          numberOfLines={2}
          marginBottom="s"
          textAlign="center"
          variant="regular"
          letterSpacing={0.2}>
          {name}
        </Text>
      </Box>
      <Text variant="medium" color="mediumGrey">
        {subtitle}
      </Text>
    </Box>
    {requestCount && (
      <Box position="absolute" right={10} top={10}>
        <DotNumber backgroundColor="main" number={requestCount} />
      </Box>
    )}
  </TouchableBox>
)
