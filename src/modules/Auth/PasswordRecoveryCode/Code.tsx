import React, { useRef, useState } from 'react'
import { Box } from '~/theme'
import { CodeInput } from './CodeInput'
import { TextInput } from 'react-native'

export const Code = () => {
  const [code, setCode] = useState<Array<number>>([])

  const refs = [
    useRef<TextInput>(),
    useRef<TextInput>(),
    useRef<TextInput>(),
    useRef<TextInput>(),
  ]

  const useInputCode = (index: number) => {
    const onChangeText = (val: string) => {
      let newCode = [...code]
      newCode[index] = Number(val)
      setCode([...code])
    }

    const focusNext = () => {
      if (index === 3) {
        refs[index].current?.blur()
        return
      }
      refs[index + 1].current?.focus()
    }

    const focusPrev = () => {
      if (index === 0) {
        refs[index].current?.blur()
        return
      }
      refs[index - 1].current?.focus()
    }

    return {
      ref: refs[index],
      focusNext,
      focusPrev,
      onChangeText,
      value: code[index] ? code[index].toString() : '',
    }
  }

  return (
    <Box flexDirection="row" flexWrap="wrap" justifyContent="center">
      {Array(4)
        .fill('')
        .map((_, i) => (
          <Box key={i} margin="s">
            <CodeInput {...useInputCode(i)} />
          </Box>
        ))}
    </Box>
  )
}
