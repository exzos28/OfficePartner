import React from 'react'
import { Box, Text, shadow } from '~/theme'
import { Dimensions, Modal } from 'react-native'

const WIDTH = Dimensions.get('window').width

const TASK_LINE_WIDTH = WIDTH / 1.5 < 270 ? WIDTH / 1.5 : 270

type Props = {
  visible: boolean
  onModalDismiss: () => void
  selectedDate: null | any // TODO дописать когда будет сервер
}

export const InfoModal: React.FC<Props> = ({
  visible,
  selectedDate,
  onModalDismiss,
}) => {
  const TaskLine = () => (
    <Box
      borderRadius={6}
      minHeight={48}
      borderLeftWidth={10}
      paddingVertical="s"
      paddingHorizontal="m"
      borderLeftColor="main"
      backgroundColor="white"
      {...shadow}
      shadowOpacity={0.5}>
      <Text fontSize={13} variant="regular">
        {selectedDate && selectedDate.value}
      </Text>
      <Text fontSize={13} variant="regular" color="main">
        с/н 123123-32-323-2323
      </Text>
    </Box>
  )

  return (
    <Modal
      onDismiss={onModalDismiss}
      {...{ visible }}
      animationType="fade"
      transparent={true}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          borderRadius={6}
          width={TASK_LINE_WIDTH}
          minHeight={135}
          backgroundColor="white"
          paddingHorizontal="l"
          paddingTop="m"
          paddingBottom="xl"
          {...shadow}
          shadowOpacity={0.5}>
          <Box alignItems="center">
            <Text variant="regular" fontSize={16} marginBottom="s">
              ЧТ
            </Text>
            <Text variant="semiBold" fontSize={18} marginBottom="m">
              11
            </Text>
          </Box>
          <Box>
            <TaskLine />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
