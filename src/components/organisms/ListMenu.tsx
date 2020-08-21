import React from 'react'
import { Box } from '~/theme'
import { MenuItem } from '../molecules'

export type MenuItemType = {
  name: string
  icon?: React.ReactNode
  number?: number | string
  onPress?: () => void
}

type Props = {
  items: Array<MenuItemType>
}

export const ListMenu: React.FC<Props> = ({ items = [] }) => (
  <Box paddingTop="l" paddingHorizontal="l">
    {items.map((item, i) => (
      <MenuItem {...item} key={i} />
    ))}
  </Box>
)
