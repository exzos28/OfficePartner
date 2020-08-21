import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { Box } from '~/theme'
import { StyleSheet } from 'react-native'

import { HEIGTH } from '~/components/molecules/MasterCard'
import { useNavigation } from '@react-navigation/native'

export const Camera = () => {
  const [qr, setQr] = useState(null)

  const navigation = useNavigation()

  const onSuccess = (e) => {
    setQr(e)
    const { data } = e
    navigation.navigate('Starting', { data })
  }
  return (
    <Box flex={1}>
      <QRCodeScanner
        cameraStyle={{ height: HEIGTH }}
        showMarker={true}
        markerStyle={{ borderRadius: 6 }}
        onRead={onSuccess}
      />
    </Box>
  )
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
})
