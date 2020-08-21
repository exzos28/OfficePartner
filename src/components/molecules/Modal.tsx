import React from 'react'
import { Modal as RNModal, FlatList, Dimensions } from 'react-native'
import { BlurView } from '@react-native-community/blur'
import restyleTheme, { Box, TouchableBox, Text } from '~/theme'
import { Button } from '../atom'

const HEIGTH = Dimensions.get('window').height

type Props = {
  modalVisible: boolean
  modalTitle?: string
  items: Array<ItemType>
  handleSelect: (item: ItemType) => void
  numbered?: boolean
}

export type ItemType = {
  id: number
  text: string | number
  value: string | number
  type?: 'primary' | string
  onPress?: () => void
}

export const Modal: React.FC<Props> = ({
  modalVisible,
  handleSelect,
  modalTitle,
  items,
  numbered,
}) => {
  const onItemPress = (item: ItemType) => {
    if (item.onPress) item.onPress()
    else handleSelect(item)
  }

  const _renderItem = ({ item, index }: { item: ItemType; index: number }) => {
    const _text = numbered ? `${index + 1}. ${item.text}` : item.text
    const backgroundColor = item.type === 'primary' ? 'primary' : 'white'
    const color = item.type === 'primary' ? 'white' : 'primary'
    return (
      <TouchableBox
        borderColor="primary"
        borderWidth={1}
        borderRadius={6}
        marginBottom="s"
        padding="m"
        onPress={() => onItemPress(item)}
        {...{ backgroundColor }}>
        <Text variant="medium" {...{ color }} textAlign="center">
          {_text}
        </Text>
      </TouchableBox>
    )
  }
  return (
    <RNModal animationType="fade" transparent={true} visible={modalVisible}>
      <Box flex={1}>
        <BlurView style={{ flex: 1 }}>
          <Box
            flex={1}
            borderWidth={3}
            borderColor="transparent"
            alignItems="center"
            justifyContent="center">
            <Box
              shadowColor="grey"
              shadowOffset={{
                width: 0,
                height: 0,
              }}
              shadowOpacity={0.3}
              shadowRadius={25}
              elevation={1}
              borderRadius={10}
              backgroundColor="white"
              maxHeight={HEIGTH * 0.8}
              width={300}>
              {modalTitle && (
                <Box padding="m" paddingTop="l">
                  <Text fontSize={16} variant="regular" textAlign="center">
                    {modalTitle}
                  </Text>
                </Box>
              )}
              <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  padding: restyleTheme.spacing.l,
                  paddingTop: restyleTheme.spacing.m,
                }}
                data={items}
                renderItem={_renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
            </Box>
          </Box>
        </BlurView>
      </Box>
    </RNModal>
  )
}
