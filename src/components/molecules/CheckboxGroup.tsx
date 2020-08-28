import React from 'react'
import { Box, Theme } from '~/theme'
import { Checkbox, Label } from '../atom'
import { SpacingProps, LayoutProps } from '@shopify/restyle'

export type CheckboxType = {
  id: number
  text: string
  checked: boolean
}

type Props = {
  items: Array<CheckboxType>
  onChangeItem: (id: number) => void
  label: string
  checkboxListContainerStyle?: SpacingProps<Theme> & LayoutProps<Theme>
  checkboxContainerStyle?: SpacingProps<Theme> & LayoutProps<Theme>
  checkboxStyle?: SpacingProps<Theme> & LayoutProps<Theme>
}

export const CheckboxGroup: React.FC<Props> = ({
  label,
  items,
  onChangeItem,
  checkboxListContainerStyle,
  checkboxStyle,
  checkboxContainerStyle,
}) => {
  return (
    <Box flexDirection="column">
      <Box marginBottom="xs">
        <Label {...{ label }} />
      </Box>
      <Box {...checkboxListContainerStyle}>
        {items.map((item) => (
          <Checkbox
            key={item.id}
            {...item}
            style={checkboxStyle}
            containerStyle={checkboxContainerStyle}
            onPress={onChangeItem}
          />
        ))}
      </Box>
    </Box>
  )
}
