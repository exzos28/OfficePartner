import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import restyleTheme, { Box, Theme } from '~/theme'
import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
} from '@shopify/restyle'
import { Label } from '~/components/atom'

type ContainerProps = LayoutProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {}

type Props = {
  label?: string
  inputProps?: TextInputProps
  container?: ContainerProps
  inputContainerProps?: ContainerProps
  required?: boolean
}

export const Input: React.FC<Props> = ({
  label,
  inputProps,
  inputContainerProps,
  container,
  required,
}) => {
  const _renderLabel = () => {
    if (label) {
      return <Label {...{ label, required }} />
    }
    return null
  }

  const multilineStyles = () => {
    if (inputProps?.multiline) {
      return { paddingTop: 15, textAlignVertical: 'top' }
    }
    return {}
  }

  return (
    <Box {...container}>
      {_renderLabel()}
      <Box
        backgroundColor="inputBackground"
        height={56}
        borderRadius={6}
        {...inputContainerProps}>
        <TextInput
          underlineColorAndroid="transparent"
          // @ts-ignore
          style={[styles.textInput, multilineStyles()]} // TODO
          {...inputProps}
        />
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: '100%',
    paddingHorizontal: restyleTheme.spacing.m,
  },
})
