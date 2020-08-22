import React from 'react'
import { Dropdown } from '../Dropdown'
import { Box, Text, TouchableBox } from '~/theme'
import Svg, { Path } from 'react-native-svg'
import { SelectedModalItemType } from '~/@types'

const RuIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M9.96875 0.625C5.90625 0.625 2.4375 3.25 1.15625 6.875H18.8438C17.5312 3.25 14.0625 0.625 9.96875 0.625Z"
      fill="#F9F9F9"
    />
    <Path
      d="M1.15625 6.875C0.8125 7.84375 0.625 8.90625 0.625 10C0.625 11.0938 0.8125 12.1562 1.15625 13.125H18.8438C19.1875 12.1562 19.375 11.0938 19.375 10C19.375 8.90625 19.1875 7.84375 18.8438 6.875H1.15625Z"
      fill="#428BC1"
    />
    <Path
      d="M9.96875 19.375C14.0625 19.375 17.5312 16.75 18.8125 13.125H1.15625C2.4375 16.7812 5.90625 19.375 9.96875 19.375Z"
      fill="#ED4C5C"
    />
  </Svg>
)

const ItemComponent = ({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) => (
  <Box
    flexDirection="row"
    alignItems="center"
    borderRadius={6}
    paddingVertical="m"
    paddingHorizontal="s">
    <Box marginRight="s">{icon}</Box>
    <Text variant="regular" fontSize={16} lineHeight={18}>
      {text}
    </Text>
  </Box>
)

const items = [
  {
    id: 1,
    modalItemComponent: <ItemComponent icon={<RuIcon />} text="Ru" />,
    inputSelectedValue: <RuIcon />,
    value: '+7',
  },
  {
    id: 2,
    modalItemComponent: <ItemComponent icon={<RuIcon />} text="Ru2" />,
    inputSelectedValue: <RuIcon />,
    value: '+380',
  },
]

export const PhoneDropdown = () => {
  const _renderContent = (item: SelectedModalItemType) => {
    if (typeof item.modalItemComponent === 'string')
      return (
        <Text variant="medium" textAlign="center">
          {item.modalItemComponent}
        </Text>
      )
    else return item.modalItemComponent
  }

  const renderModalItem = (
    item: SelectedModalItemType,
    cb: (item: SelectedModalItemType) => void,
  ) => {
    return (
      <TouchableBox
        onPress={() => cb(item)}
        borderBottomWidth={1}
        borderBottomColor="grey">
        {_renderContent(item)}
      </TouchableBox>
    )
  }

  return (
    <Box height={56} marginRight="m">
      <Dropdown
        defaultSelectedItem={items[0]}
        width={80}
        {...{ items, renderModalItem }}
      />
    </Box>
  )
}
