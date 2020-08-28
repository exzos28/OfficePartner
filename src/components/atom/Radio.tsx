import React from 'react'
import { TouchableBox, Text, Box } from '~/theme'
import { RadioType } from '../molecules/RadioGroup'

type Props = RadioType & {
  onPress: (id: number) => void
}

export const Radio: React.FC<Props> = ({ id, checked, text, onPress }) => {
  const _renderCheckedItem = () => {
    if (checked)
      return (
        <Box borderRadius={6} width={12} height={12} backgroundColor="main" />
      )
  }
  return (
    <TouchableBox
      marginRight="l"
      activeOpacity={1}
      marginBottom="m"
      flexDirection="row"
      onPress={() => onPress(id)}
      alignItems="center">
      <Box
        borderWidth={2}
        borderColor="main"
        marginRight="m"
        alignItems="center"
        justifyContent="center"
        borderRadius={11.5}
        height={23}
        width={23}>
        {_renderCheckedItem()}
      </Box>
      <Text variant="semiBold" color="marengo">
        {text}
      </Text>
    </TouchableBox>
  )
}
