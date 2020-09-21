import React, { useState, useContext } from 'react'
import restyleTheme, { Box } from '~/theme'
import { TextInput } from 'react-native-gesture-handler'
import { StyleSheet, Dimensions } from 'react-native'
import { ChatContext } from './Chat'

const HEIGHT = Dimensions.get('window').height
const MAX_HEIGHT_INPUT = HEIGHT * 0.2

export const Input = () => {
  const { inputValue, setInputValue } = useContext(ChatContext)

  return (
    <Box flexGrow={1} borderRadius={20} backgroundColor="chatInputBackground">
      <TextInput
        value={inputValue}
        underlineColorAndroid="transparent"
        multiline
        onChangeText={setInputValue}
        style={[styles.input, { maxHeight: MAX_HEIGHT_INPUT }]}
        placeholderTextColor={restyleTheme.colors.grey}
        placeholder="Введите сообщение"
      />
    </Box>
  )
}

const styles = StyleSheet.create({
  input: {
    flexGrow: 1,
    // textAlignVertical: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: restyleTheme.spacing.m,
    ...restyleTheme.textVariants.regular,
    color: restyleTheme.colors.marengo,
  },
})
