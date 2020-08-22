import React, { useContext } from 'react'
import { Box, Text, TouchableBox } from '~/theme'
import { Icon } from '~/components/atom'
import { CalendarContext } from './CalendarData'
import moment from 'moment'
import { capitalize } from '~/helpers'

export const Header = () => {
  const { goToNextMonth, goToPrevMonth, activeMonth } = useContext(
    CalendarContext,
  )
  return (
    <Box flexDirection="row">
      <TouchableBox
        onPress={goToPrevMonth}
        height={40}
        width={50}
        alignItems="center"
        justifyContent="center">
        <Icon name="outlinePrevArrow" />
      </TouchableBox>
      <Box flexGrow={1} alignItems="center" justifyContent="center">
        <Text variant="regular">
          {capitalize(moment(activeMonth, 'MM.YYYY').format('MMMM, YYYY'))}
        </Text>
      </Box>
      <TouchableBox
        onPress={() => goToNextMonth()}
        height={40}
        width={50}
        alignItems="center"
        justifyContent="center">
        <Icon name="outlineNextArrow" />
      </TouchableBox>
    </Box>
  )
}
