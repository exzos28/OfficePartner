import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Theme, TouchableBox } from '~/theme'
import { TouchableOpacityProps } from 'react-native'
import {
  SpacingProps,
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
} from '@shopify/restyle'

type ContainerStyleProps = LayoutProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {}

type Props = TouchableOpacityProps &
  ContainerStyleProps & {
    children?: React.ReactNode
  }

export const IconButton: React.FC<Props> = ({ children, ...props }) => (
  <TouchableBox
    alignItems="center"
    justifyContent="center"
    minHeight={props.minHeight ? props.minHeight : 40} // FIX RESTYLE BUG
    minWidth={40}
    {...props}>
    {children}
  </TouchableBox>
)
