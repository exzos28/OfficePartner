import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native'
import { Box, Text, Theme } from '~/theme'
import {
  backgroundColor,
  border,
  spacing,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  useRestyle,
  TextProps,
  ColorProps,
} from '@shopify/restyle'

const restyleFunctions = [spacing, border, backgroundColor]

type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void
    children?: React.ReactNode
    text?: string | number
    outline?: boolean
    reverse?: boolean
    variant?: 'primary' | 'outline' | 'link' | 'light'
    inline?: boolean
    weight?: 'regular' | 'bold' | 'medium' | 'semiBold'
  }

export const Button: React.FC<Props> = ({
  outline,
  text,
  onPress,
  children,
  variant,
  reverse,
  inline,
  weight,
  ...rest
}) => {
  const props = useRestyle(restyleFunctions, rest)

  let backgroundColor =
    variant === 'primary'
      ? 'main'
      : variant === 'link'
      ? 'white'
      : variant === 'light'
      ? 'white'
      : 'main'

  let color =
    variant === 'primary'
      ? 'white'
      : variant === 'link'
      ? 'main'
      : variant === 'light'
      ? 'main'
      : 'white'

  let borderColor =
    variant === 'link' ? 'transparent' : outline ? 'white' : 'main'

  const padding = inline ? undefined : 'm'

  const _renderContent = () => {
    const _variant = variant === 'link' ? 'regular' : 'bold'
    const _textDecorationLine = variant === 'link' ? 'underline' : 'none'
    if (text) {
      return (
        <Text
          textDecorationLine={_textDecorationLine}
          variant={weight || _variant}
          // @ts-ignore
          color={color}>
          {text}
        </Text>
      )
    }
    return children
  }

  return (
    <TouchableOpacity {...{ onPress }} {...props}>
      <Box
        {...{ backgroundColor, borderColor, padding }}
        borderWidth={weight === 'semiBold' ? 1 : 2}
        alignItems="center"
        borderRadius={6}>
        {_renderContent()}
      </Box>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  innerContainer: {},
})
