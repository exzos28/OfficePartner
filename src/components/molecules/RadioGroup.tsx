import React, { useState } from 'react'
import { Box, Theme } from '~/theme'
import { Checkbox, Label } from '../atom'
import { LayoutProps } from '@shopify/restyle'

export type RadioType = {
  id: number
  text: string
  checked: boolean
}

type Props = {
  items: Array<RadioType>
  onChangeItem: (id: number) => void
  label: string
  containerStyle?: LayoutProps<Theme>
}

// export const useRadioGroup = () => {
//   const [value, setValue] = useState<RadioType | null>(null)
//   return {
//     onChange: (newValue: RadioType) => setValue(newValue),
//     value,
//   }
// }

export const RadioGroup: React.FC<Props> = ({
  label,
  items,
  onChangeItem,
  containerStyle,
}) => {
  return (
    <Box flexDirection="column">
      <Box marginBottom="xs">
        <Label {...{ label }} />
      </Box>
      <Box {...containerStyle}>
        {items.map((item) => (
          <Checkbox key={item.id} {...item} onPress={onChangeItem} />
        ))}
      </Box>
    </Box>
  )
}
