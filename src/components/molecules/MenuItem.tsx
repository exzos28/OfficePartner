import React from 'react'
import { Text, TouchableBox, Box } from '~/theme'
import { DotNumber } from '../atom'
import { StyleSheet } from 'react-native'
import { MenuItemType } from '../organisms/ListMenu'

type Props = MenuItemType & {}

export const MenuItem: React.FC<Props> = ({ icon, name, number, onPress }) => {
  const _renderIcon = () => {
    if (icon)
      return (
        <Box
          height={46}
          width={46}
          backgroundColor="lightPrimary"
          alignItems="center"
          justifyContent="center"
          borderRadius={23}
          marginRight="l">
          {icon}
        </Box>
      )
  }

  const _renderNumber = () => {
    if (number)
      return (
        <Box style={styles.numberContainer}>
          <DotNumber backgroundColor="info" {...{ number }} />
        </Box>
      )
  }
  return (
    <TouchableBox
      minHeight={68}
      flexDirection="row"
      alignItems="center"
      paddingHorizontal="m"
      paddingRight="l"
      paddingVertical="s"
      marginBottom="s"
      borderRadius={10}
      backgroundColor="white"
      {...{ onPress }}>
      {_renderIcon()}
      <Text color="marengo" variant="medium" fontSize={16} lineHeight={18}>
        {name}
      </Text>
      {_renderNumber()}
    </TouchableBox>
  )
}

const styles = StyleSheet.create({
  numberContainer: {
    marginLeft: 'auto',
  },
})
