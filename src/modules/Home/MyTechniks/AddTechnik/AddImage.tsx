import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'

import { TouchableBox, Box } from '~/theme'
import { Icon, EmptyImage } from '~/components/atom'

import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

type SourceType = {
  uri: string
}

export const AddImage = () => {
  const [avatarSource, setAvatarSource] = useState<SourceType | null>(null)

  const handlePress = () => {
    // TODO Добавить на андроид ImagePicker Error:  /storage/emulated/0/Pictures/image-461e9122-14d8-4f9f-af1d-ad962caea038.jpg: open failed: EACCES (Permission denied)
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        // console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.uri }

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setAvatarSource(source)
      }
    })
  }

  return (
    <TouchableBox paddingRight="m" onPress={handlePress}>
      <Box width={85} height={85}>
        {avatarSource ? (
          <Image
            source={avatarSource}
            style={{ ...StyleSheet.absoluteFillObject, resizeMode: 'cover' }}
          />
        ) : (
          <EmptyImage />
        )}
      </Box>
      <Box
        position="absolute"
        right={0}
        bottom={0}
        backgroundColor="main"
        width={20}
        height={20}
        borderRadius={10}
        alignItems="center"
        justifyContent="center">
        <Icon name="plus" />
      </Box>
    </TouchableBox>
  )
}
