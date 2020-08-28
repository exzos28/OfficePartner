import React, { useState } from 'react'
import { TouchableBox, Box } from '~/theme'
import { Avatar, Icon, EmptyAvatar } from '~/components/atom'

import ImagePicker from 'react-native-image-picker'
import { ImageSourcePropType } from 'react-native'

const options = {
  // title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

export const AddImage = () => {
  const [avatarSource, setAvatarSource] = useState<ImageSourcePropType | null>(
    null,
  )
  const handlePress = () => {
    // TODO Добавить на андроид ImagePicker Error:  /storage/emulated/0/Pictures/image-461e9122-14d8-4f9f-af1d-ad962caea038.jpg: open failed: EACCES (Permission denied)
    ImagePicker.showImagePicker(options, (response) => {
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
    <TouchableBox alignItems="center" paddingVertical="l" onPress={handlePress}>
      <Box>
        <Box>
          {avatarSource ? (
            <Avatar source={avatarSource} size={{ height: 97, width: 97 }} />
          ) : (
            <EmptyAvatar />
          )}
          <Box
            position="absolute"
            right={10}
            bottom={0}
            zIndex={2}
            backgroundColor="main"
            width={20}
            height={20}
            borderRadius={10}
            alignItems="center"
            justifyContent="center">
            <Icon name="plus" />
          </Box>
        </Box>
      </Box>
    </TouchableBox>
  )
}
