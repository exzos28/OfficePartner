import React from 'react'
import { TouchableBox, Text, Box, Theme } from '~/theme'
import { CheckboxType } from '../molecules/CheckboxGroup'
import { Icon } from './Icon'
import { SpacingProps, LayoutProps } from '@shopify/restyle'

type Props = CheckboxType & {
  onPress: (id: number) => void
  style?: SpacingProps<Theme> & LayoutProps<Theme>
  containerStyle?: SpacingProps<Theme> & LayoutProps<Theme>
}

export const Checkbox: React.FC<Props> = ({
  id,
  checked,
  text,
  onPress,
  style,
  containerStyle,
}) => {
  const _renderCheckedItem = () => {
    if (checked) return <Icon name="checkmark" />
  }
  return (
    <TouchableBox
      activeOpacity={1}
      marginBottom="m"
      flexDirection="row"
      onPress={() => onPress(id)}
      alignItems="center"
      {...containerStyle}>
      <Box
        borderWidth={1}
        borderColor="main"
        marginRight="l"
        borderRadius={4}
        backgroundColor={checked ? 'main' : 'white'}
        alignItems="center"
        justifyContent="center"
        height={23}
        width={23}>
        {_renderCheckedItem()}
      </Box>
      <Text variant="semiBold" color="marengo">
        {text}
      </Text>
    </TouchableBox>
  )
}
