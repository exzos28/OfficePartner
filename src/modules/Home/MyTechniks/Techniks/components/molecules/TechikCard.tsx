import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { TouchableBox, Box, Text, Theme } from '~/theme'
import {
  SpacingProps,
  ColorProps,
  BackgroundColorProps,
} from '@shopify/restyle'
import { Technik } from '~/@types'

type Props = Technik & {
  spacing: SpacingProps<Theme>
  onPress: () => void
}

export const WIDTH = 150

export const TechnikCard: React.FC<Props> = ({
  spacing,
  code,
  name,
  imgUri,
  onPress,
  status,
}) => {
  const _renderDot = (color: BackgroundColorProps<Theme>) => {
    return (
      <Box
        width={10}
        height={10}
        borderRadius={5}
        backgroundColor={color.backgroundColor}
        marginRight="s"
      />
    )
  }
  const _renderStatus = () => {
    if (status === 1) {
      return (
        <Box flexDirection="row" alignItems="center" marginRight="xs">
          {_renderDot({ backgroundColor: 'yellow' })}
          <Text variant="regular" color="yellow" fontSize={12}>
            Уст-во работает
          </Text>
        </Box>
      )
    } else if (status === 2)
      return (
        <Box flexDirection="row" alignItems="center" marginRight="xs">
          {_renderDot({ backgroundColor: 'green' })}
          <Text variant="regular" color="green" fontSize={12}>
            В обработке
          </Text>
        </Box>
      )
    return null
  }

  return (
    <TouchableBox
      backgroundColor="white"
      width={WIDTH}
      alignItems="center"
      padding="m"
      paddingHorizontal="m"
      borderRadius={6}
      {...{ onPress }}
      {...spacing}>
      <Box width={90} height={100} marginBottom="m">
        <Image
          style={{ ...StyleSheet.absoluteFillObject }}
          resizeMode="center"
          source={{
            uri: imgUri,
          }}
        />
      </Box>
      <Box flex={1} alignItems="center">
        <Box>
          <Text
            numberOfLines={2}
            marginBottom="s"
            textAlign="center"
            variant="medium"
            letterSpacing={0.2}>
            {name}
          </Text>
        </Box>
        <Box style={styles.codeContainer} marginBottom="s">
          <Text variant="medium" color="mediumGrey">
            {code}
          </Text>
        </Box>
        <Box>{_renderStatus()}</Box>
      </Box>
    </TouchableBox>
  )
}

const styles = StyleSheet.create({
  codeContainer: {
    marginTop: 'auto',
  },
})
