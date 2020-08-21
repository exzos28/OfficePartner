import React from 'react'
import { TouchableBox, Box } from '~/theme'
import { Icon } from '../atom'
import { Dimensions } from 'react-native'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

type Props = {
  icon?: React.ReactNode
  onPress: () => void
}

export const Fab: React.FC<Props> = ({ icon, onPress }) => (
  <Box
    borderRadius={50}
    overflow="hidden"
    position="absolute"
    right={WIDTH * 0.1}
    bottom={HEIGHT * 0.05}>
    <TouchableBox
      alignItems="center"
      justifyContent="center"
      height={56}
      width={56}
      {...{ onPress }}
      backgroundColor="main">
      {icon || <Icon size={{ height: 20, width: 20 }} name="plus" />}
    </TouchableBox>
  </Box>
)
