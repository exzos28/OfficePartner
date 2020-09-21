import React from 'react'
import { Box, Text, Theme, shadow } from '~/theme'
import { SpacingProps, LayoutProps } from '@shopify/restyle'

type Props = {
  title?: string
  headerRightComponent?: React.ReactNode
  children?: React.ReactNode
  containerStyleProps?: SpacingProps<Theme> & LayoutProps<Theme>
  headerContainerStyleProps?: SpacingProps<Theme> & LayoutProps<Theme>
}

export const Section: React.FC<Props> = ({
  title,
  children,
  headerRightComponent,
  containerStyleProps,
  headerContainerStyleProps,
}) => {
  const _renderHeader = () => {
    const marginBottom = children ? 's' : undefined
    return (
      <Box
        {...{ marginBottom }}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        {...headerContainerStyleProps}>
        {title ? (
          <Text variant="semiBold" color="marengo" letterSpacing={0.3}>
            {title}
          </Text>
        ) : null}
        {headerRightComponent ? <Box>{headerRightComponent}</Box> : null}
      </Box>
    )
  }

  return (
    <Box
      backgroundColor="white"
      marginHorizontal="l"
      marginBottom="s"
      paddingHorizontal="l"
      paddingVertical="m"
      borderRadius={10}
      {...shadow}
      {...containerStyleProps}>
      {_renderHeader()}
      {children}
    </Box>
  )
}
