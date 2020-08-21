import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { TouchableBox, Box, Text, Theme } from '~/theme'
import { SpacingProps } from '@shopify/restyle'
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
}) => (
  <TouchableBox
    backgroundColor="white"
    height={206}
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
      <Box style={styles.codeContainer}>
        <Text variant="medium" color="mediumGrey">
          {code}
        </Text>
      </Box>
    </Box>
  </TouchableBox>
)

const styles = StyleSheet.create({
  codeContainer: {
    marginTop: 'auto',
  },
})
