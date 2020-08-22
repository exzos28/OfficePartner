import React, { useContext } from 'react'
import { Box } from '~/theme'
import { Header } from './Header'
import { WeekShorts } from './WeekShorts'
import { Days } from './Days'
import { CARD_WIDTH } from '.'
import { CalendarContext } from './CalendarData'

type Props = {
  month: moment.Moment
}

export const Month: React.FC<Props> = ({ month }) => {
  const { generateDaysList } = useContext(CalendarContext)
  const days = generateDaysList(month)

  return (
    <Box>
      <WeekShorts />
      <Days {...{ days }} />
    </Box>
  )
}
