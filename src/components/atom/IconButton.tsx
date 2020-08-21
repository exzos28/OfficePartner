import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Theme, TouchableBox } from '~/theme'
import { TouchableOpacityProps } from 'react-native'
import {
  SpacingProps,
  BackgroundColorProps,
  BorderProps,
} from '@shopify/restyle'

type ContainerStyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {}

type Props = TouchableOpacityProps &
  ContainerStyleProps & {
    children?: React.ReactNode
  }

export const IconButton: React.FC<Props> = ({ children, ...props }) => (
  <Box>
    <TouchableBox
      alignItems="center"
      justifyContent="center"
      minHeight={40}
      minWidth={40}
      {...props}>
      {children}
    </TouchableBox>
  </Box>
)
