import React, { useState, forwardRef } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import restyleTheme, { Box, Theme } from '~/theme'
import {
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from '@shopify/restyle'

type ContainerProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {}

type Props = {
  onChangeText: (val: string) => void
  focusNext: () => void
  focusPrev: () => void
  container?: ContainerProps
  ref: any
  value: string
}

let pattern = /^\d+$/

export const CodeInput: React.FC<Props> = forwardRef<TextInput, Props>(
  ({ onChangeText, focusNext, focusPrev, value, container }, ref) => {
    const [inputValue, setInputValue] = useState<string>(value)

    const handleChange = (val: string) => {
      if (val && !pattern.test(val)) return
      if (val.length >= 1) {
        const validValue = val.substr(-1)
        setInputValue(validValue)
        onChangeText(validValue)
        focusNext()
      } else {
        // focusPrev()
        setInputValue('')
        onChangeText('')
      }
    }

    return (
      <Box {...container}>
        <TextInput
          ref={ref}
          numberOfLines={1}
          keyboardType="numeric"
          onChangeText={handleChange}
          value={inputValue}
          style={styles.textInput}
        />
      </Box>
    )
  },
)

const styles = StyleSheet.create({
  textInput: {
    width: 46,
    height: 48,
    borderRadius: 6,
    textAlign: 'center',
    ...restyleTheme.textVariants.regular,
    color: restyleTheme.colors.inputText,
    fontSize: 20,
    lineHeight: 22,
    backgroundColor: restyleTheme.colors.inputBackground,
  },
})
