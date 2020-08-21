import React, { useState, useRef } from 'react'
import { Section } from '~/components/template'
import { Box } from '~/theme'
import { Icon } from '~/components/atom'
import QRCode from 'react-native-qrcode-svg'
import RNFS from 'react-native-fs'
import { ToastAndroid } from 'react-native'
import CameraRoll from '@react-native-community/cameraroll'

type Props = {
  qrValue: string | null | undefined
}

export const QRCodeSection: React.FC<Props> = ({ qrValue }) => {
  const [state, setState] = useState({ busy: false, imageSaved: false })
  let svgRef = useRef(null)
  const saveQrToDisk = () => {
    svgRef.toDataURL((data) => {
      console.log('DATA', data)
      RNFS.writeFile(RNFS.CachesDirectoryPath + '/qr-code.png', data, 'base64')
        .then((success) => {
          return CameraRoll.save(RNFS.CachesDirectoryPath + '/qr-code.png', {
            type: 'photo',
          })
        })
        .then(() => {
          setState({ busy: false, imageSaved: true })
          // ToastAndroid.show('Сохранено', ToastAndroid.SHORT)
        })
    })
  }

  if (!qrValue) return null
  return (
    <Section
      containerStyleProps={{ paddingBottom: 'xl', marginTop: 'm' }}
      title="QR код"
      headerRightComponent={
        <Icon touchable onPress={saveQrToDisk} name="download" />
      }>
      <Box alignItems="center">
        <Box width={90} height={90}>
          <QRCode value={qrValue} getRef={(c) => (svgRef = c)} />
        </Box>
      </Box>
    </Section>
  )
}
