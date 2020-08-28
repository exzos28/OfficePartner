import React, { useRef } from 'react'
import { Box, Text, shadow, TouchableBox } from '~/theme'
import { Dimensions, Modal, TouchableWithoutFeedback } from 'react-native'
import { Icon } from '~/components/atom'

const WIDTH = Dimensions.get('window').width

const TASK_LINE_WIDTH = WIDTH / 1.5 < 270 ? WIDTH / 1.5 : 270

type Props = {
  visible: boolean
  handleCloseModal: () => void
  selectedDay: null | string
  dismiss?: () => void
}

export const InfoModal: React.FC<Props> = ({
  visible,
  selectedDay,
  handleCloseModal,
  dismiss,
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
        {selectedDay && selectedDay.dateString}
      </Text>
      <Text fontSize={13} variant="regular" color="main">
        с/н 123123-32-323-2323
      </Text>
    </Box>
  )

  return (
    <Modal
      {...{ visible }}
      animationType="fade"
      transparent={true}
      onRequestClose={dismiss}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <TouchableWithoutFeedback onPress={dismiss}>
          <Box
            backgroundColor="transparent"
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
          />
        </TouchableWithoutFeedback>
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
          <Box position="absolute" right={10} top={10} zIndex={2}>
            <TouchableBox padding="s" onPress={handleCloseModal}>
              <Icon name="times" />
            </TouchableBox>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
