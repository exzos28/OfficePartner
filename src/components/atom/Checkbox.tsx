import React from 'react'
import { TouchableBox, Text, Box } from '~/theme'
import { CheckboxType } from '../molecules/CheckboxGroup'
import { Icon } from './Icon'

type Props = CheckboxType & {
  onPress: (id: number) => void
}

export const Checkbox: React.FC<Props> = ({ id, checked, text, onPress }) => {
  const _renderCheckedItem = () => {
    if (checked) return <Icon name="checkmark" />
  }
  return (
    <TouchableBox
      activeOpacity={1}
      marginBottom="m"
      flexDirection="row"
      onPress={() => onPress(id)}
      alignItems="center">
      <Box
        borderWidth={1}
        borderColor="main"
        marginRight="l"
        borderRadius={4}
        backgroundColor={checked ? 'main' : 'white'}
        alignItems="center"
        justifyContent="center"
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
