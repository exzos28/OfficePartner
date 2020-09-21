import React, { useEffect, useState } from 'react'
import { Keyboard, Platform } from 'react-native'

type Props = {
  useWillShow?: boolean
  useWillHide?: boolean
}

export const useKeyboard = (config: Props = {}) => {
  const isIOS = Platform.OS === 'ios'
  const { useWillShow = isIOS, useWillHide = isIOS } = config
  const [visible, setVisible] = useState(false)
  const showEvent = useWillShow ? 'keyboardWillShow' : 'keyboardDidShow'
  const hideEvent = useWillHide ? 'keyboardWillHide' : 'keyboardDidHide'

  function dismiss() {
    Keyboard.dismiss()
    setVisible(false)
  }

  useEffect(() => {
    function onKeyboardShow() {
      setVisible(true)
    }

    function onKeyboardHide() {
      setVisible(false)
    }

    Keyboard.addListener(showEvent, onKeyboardShow)
    Keyboard.addListener(hideEvent, onKeyboardHide)

    return () => {
      Keyboard.removeListener(showEvent, onKeyboardShow)
      Keyboard.removeListener(hideEvent, onKeyboardHide)
    }
  }, [useWillShow, useWillHide])

  return [visible, dismiss]
}
