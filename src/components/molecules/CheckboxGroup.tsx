import React from 'react'
import { Box } from '~/theme'
import { Checkbox, Label } from '../atom'

export type CheckboxType = {
  id: number
  text: string
  checked: boolean
}

type Props = {
  items: Array<CheckboxType>
  onChangeItem: (id: number) => void
  label: string
}

export const CheckboxGroup: React.FC<Props> = ({
  label,
  items,
  onChangeItem,
}) => {
  return (
    <Box flexDirection="column">
      <Box marginBottom="xs">
        <Label {...{ label }} />
      </Box>
      {items.map((item) => (
        <Checkbox key={item.id} {...item} onPress={onChangeItem} />
      ))}
    </Box>
  )
}
