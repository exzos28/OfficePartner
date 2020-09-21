import React from 'react'
import { Box, Text, Theme } from '~/theme'
import {
  LayoutProps,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  ColorProps,
} from '@shopify/restyle'

export type TagProps = {
  title: string
  containerStyleProps?: LayoutProps<Theme> &
    SpacingProps<Theme> &
    BorderProps<Theme> &
    BackgroundColorProps<Theme> & {}
  textStyleProps?: ColorProps<Theme> & {}
}

export const Tag: React.FC<TagProps> = ({
  title,
  containerStyleProps,
  textStyleProps,
}) => (
  <Box
    borderRadius={5}
    paddingVertical="s"
    paddingHorizontal="xm"
    backgroundColor="tagBackgroundPrimary"
    {...containerStyleProps}>
    <Text
      fontSize={12}
      lineHeight={12}
      variant="medium"
      color="tagColorPrimary"
      {...textStyleProps}>
      {title}
    </Text>
  </Box>
)
