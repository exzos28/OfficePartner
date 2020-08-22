import React, { useContext } from 'react'
import { Box, Text, TouchableBox } from '~/theme'
import { CELL_WIDTH, CELL_HEIGHT, CARD_WIDTH } from '.'

import moment from 'moment'
import { CalendarContext } from './CalendarData'

type Props = {
  days: Array<moment.Moment>
}

export const Days: React.FC<Props> = ({ days }) => {
  const { data, memoObject, onCellPress } = useContext(CalendarContext)

  let monthOffsetDays = days[0].day() - 1
  if (monthOffsetDays === -1) monthOffsetDays = 6

  const nextMonthMoment = moment(days[0].clone().add(1, 'months'))
  const prevMonthMoment = moment(days[0].clone().subtract(1, 'months'))

  const renderEmptyOffsetCells = () => {
    if (monthOffsetDays < 1) return null

    return Array(monthOffsetDays)
      .fill('')
      .map((_, index) => {
        return <Box key={index} width={CELL_WIDTH} />
        return renderItem(prevMonthMoment.date(index).clone(), index)
      })
  }

  const renderLastDays = () => {
    const TOTAL_DAYS = days.length + monthOffsetDays
    let fixedTotalDays = 28
    if (TOTAL_DAYS === 28) {
      fixedTotalDays = 28
      // } else if (TOTAL_DAYS <= 35) {
      //   fixedTotalDays = 35
    } else if (TOTAL_DAYS <= 42) {
      fixedTotalDays = 42
    }
    const needNumberOfDays = fixedTotalDays - TOTAL_DAYS
    if (needNumberOfDays < 1) return null
    return Array(needNumberOfDays)
      .fill('')
      .map((_, index) =>
        renderItem(nextMonthMoment.date(index + 1).clone(), index, 'muted'),
      )
  }

  const renderItem = (day: moment.Moment, index: number, type?: 'muted') => {
    const istCurrentDay =
      moment().format('DD.MM.YYYY') === day.format('DD.MM.YYYY')

    const indexMemoOnThisDay = memoObject[day.format('DD.MM.YYYY')]

    let dataDay = null

    if (indexMemoOnThisDay !== undefined) dataDay = data[indexMemoOnThisDay]
    return (
      <TouchableBox
        onPress={() => onCellPress(dataDay)}
        key={index}
        width={CELL_WIDTH}
        height={CELL_HEIGHT}
        borderRadius={CELL_HEIGHT / 2}
        backgroundColor={istCurrentDay ? 'main' : undefined}
        justifyContent="center"
        opacity={type === 'muted' ? 0.5 : 1}
        alignItems="center">
        <Text color={istCurrentDay ? 'white' : 'marengo'}>
          {day.format('D')}
        </Text>

        {dataDay ? (
          <Box
            position="absolute"
            bottom={5}
            width={6}
            height={6}
            borderRadius={3}
            backgroundColor="info"
          />
        ) : null}
      </TouchableBox>
    )
  }

  return (
    <Box width={CARD_WIDTH} flexDirection="row" flexWrap="wrap">
      {renderEmptyOffsetCells()}
      {days.map((day, index) => renderItem(day, index))}
      {renderLastDays()}
    </Box>
  )
}
