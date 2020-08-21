import React, { useState } from 'react'
import { Box, Text, TouchableBox } from '~/theme'
import { Label, Icon } from '../atom'
import { Modal, ItemType } from './Modal'

type Props = {
  label?: string
  modalTitle?: string
  items: Array<ItemType>
}

export const Dropdown: React.FC<Props> = ({ items, label, modalTitle }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<null | ItemType>(null) // TODO

  const handleSelect = (item: ItemType) => {
    setSelectedItem(item)
    setModalVisible(false)
  }

  return (
    <Box>
      {label && <Label {...{ label }} />}
      <TouchableBox
        backgroundColor="inputBackground"
        height={56}
        borderRadius={6}
        onPress={() => setModalVisible(true)}
        paddingHorizontal="m"
        justifyContent="center">
        {selectedItem && <Text>{selectedItem.text}</Text>}
        <Box position="absolute" right={14} top={23}>
          <Icon name="downBoldArrow" />
        </Box>
      </TouchableBox>

      <Modal {...{ items, handleSelect, modalTitle, modalVisible }} />
    </Box>
  )
}
