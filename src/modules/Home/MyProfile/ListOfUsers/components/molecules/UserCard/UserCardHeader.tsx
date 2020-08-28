import React, { useState } from 'react'
import { Box, shadow, TouchableBox, Text } from '~/theme'
import { Icon, IconButton } from '~/components/atom'
import { WIDTH } from '.'

type Props = {
  onEditPress: () => void
}

export const UserCardHeader: React.FC<Props> = ({ onEditPress }) => {
  const [visible, setVisible] = useState(false)

  const _renderDropdown = () => (
    <Box
      borderRadius={5}
      backgroundColor="white"
      width={WIDTH * 0.85}
      position="absolute"
      zIndex={3}
      top={-3}
      left={-5}
      {...shadow}>
      <TouchableBox
        onPress={handleVisible}
        flexDirection="row"
        alignItems="center"
        paddingHorizontal="s"
        paddingVertical="s">
        <Box width={15} alignItems="center" marginRight="xs">
          <Icon name="createAdmin" />
        </Box>
        <Text variant="dropdownText">Сделать админом</Text>
      </TouchableBox>
      <TouchableBox
        onPress={handleVisible}
        flexDirection="row"
        alignItems="center"
        paddingHorizontal="s"
        paddingVertical="s">
        <Box width={15} alignItems="center" marginRight="xs">
          <Icon name="createManager" />
        </Box>
        <Text variant="dropdownText">Сделать менеджером</Text>
      </TouchableBox>
      <TouchableBox
        onPress={handleVisible}
        flexDirection="row"
        alignItems="center"
        paddingHorizontal="s"
        paddingVertical="s">
        <Box width={15} alignItems="center" marginRight="xs">
          <Icon name="delete" />
        </Box>
        <Text color="info" variant="dropdownText">
          Удалить пользователя
        </Text>
      </TouchableBox>
    </Box>
  )

  const handleVisible = () => setVisible(!visible)

  return (
    <>
      <Box position="absolute" top={0} left={0} right={0} zIndex={2}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          paddingHorizontal="xs"
          paddingVertical="xs">
          <IconButton
            onPress={onEditPress}
            maxHeight={20}
            minHeight={20}
            minWidth={20}>
            <Icon name="edit" />
          </IconButton>
          <IconButton minHeight={20} minWidth={20} onPress={handleVisible}>
            <Icon name="moreDots" />
          </IconButton>
        </Box>
      </Box>
      {visible ? _renderDropdown() : null}
    </>
  )
}
