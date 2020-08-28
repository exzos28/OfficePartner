import React, { useState } from 'react'
import { Box, Text, TouchableBox } from '~/theme'
import { Label, Icon } from '../atom'
import { SelectedModal } from './SelectedModal'
import { SelectedModalItemType } from '~/@types'

type Props = {
  label?: string
  width?: number
  modalTitle?: string
  items?: Array<SelectedModalItemType>
  defaultSelectedItem?: null | SelectedModalItemType
  renderModalItem?: (
    item: SelectedModalItemType,
    cb: (item: SelectedModalItemType) => void,
  ) => React.ReactNode
}

export const Dropdown: React.FC<Props> = ({
  items,
  width,
  label,
  renderModalItem,
  defaultSelectedItem = null,
  modalTitle,
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [
    selectedItem,
    setSelectedItem,
  ] = useState<null | SelectedModalItemType>(defaultSelectedItem)

  const handleSelect = (item: SelectedModalItemType) => {
    setSelectedItem(item)
    setModalVisible(false)
  }

  const renderSelectedItem = () => {
    if (selectedItem) {
      const { inputSelectedValue, modalItemComponent } = selectedItem

      if (inputSelectedValue) {
        return inputSelectedValue
      }

      if (typeof modalItemComponent === 'string') {
        return <Text>{modalItemComponent}</Text>
      }

      return modalItemComponent
    }
  }
  return (
    <Box>
      {label && <Label {...{ label }} />}
      <TouchableBox
        backgroundColor="inputBackground"
        height={56}
        {...{ width }}
        borderRadius={6}
        onPress={() => setModalVisible(true)}
        paddingHorizontal="m"
        justifyContent="center">
        {renderSelectedItem()}
        <Box position="absolute" right={14} top={23}>
          <Icon name="downBoldArrow" />
        </Box>
      </TouchableBox>

      <SelectedModal
        {...{
          items,
          handleSelect,
          modalTitle,
          modalVisible,
          renderItem: renderModalItem,
          dismiss: () => setModalVisible(false),
        }}
      />
    </Box>
  )
}
