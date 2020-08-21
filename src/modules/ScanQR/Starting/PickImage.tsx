import ImagePicker from 'react-native-image-picker'

import jsqr, { QRCode } from 'jsqr'

import { Buffer } from 'buffer'
global.Buffer = Buffer
import jpeg from 'jpeg-js'

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

export type Result = {
  code: QRCode | null
}

export class PickImage {
  onStart: () => void
  onFinish: (qrValue: string | null) => void

  constructor(onStart: () => void, onFinish: (result: string | null) => void) {
    this.onStart = onStart
    this.onFinish = onFinish
  }

  pick() {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        return
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
        return
      }

      const jpegData = Buffer.from(response.data, 'base64')
      let rawImageData = jpeg.decode(jpegData)

      let clampedArray = new Uint8ClampedArray(rawImageData.data.length)
      for (let i = 0; i < rawImageData.data.length; i++) {
        clampedArray[i] = rawImageData.data[i]
      }

      const code = jsqr(clampedArray, response.width, response.height)

      if (code) this.onFinish(code.data)
    })
  }
}
