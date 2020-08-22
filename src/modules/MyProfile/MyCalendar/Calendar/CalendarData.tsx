import React, { useRef, useState } from 'react'

import { Calendar } from './Calendar'

import moment from 'moment'
import { PointPropType } from 'react-native'
import { CARD_WIDTH } from '.'

import 'moment/locale/ru'
import { InfoModal } from './InfoModal'

type CalendarContextType = {
  goToNextMonth: () => void
  activeMonth: moment.Moment
  setActiveMonth: (arg: number) => void
}

const STATIC_ITEMS = [
  {
    id: 1,
    date: '23.08.2020',
    value: 'Привет',
  },
  {
    id: 2,
    date: '21.08.2020',
    value: 'Привет2',
  },
]

const MEMO_OBJECT = {
  '23.08.2020': 0,
  '21.08.2020': 1,
}

const DEFAULT_ACTIVE_MONTH_YEAR = moment()

export const CalendarContext = React.createContext<CalendarContextType>({
  goToNextMonth: () => {},
  activeMonth: DEFAULT_ACTIVE_MONTH_YEAR,
  setActiveMonth: () => {},
})

export const CalendarData = () => {
  const [data, setData] = useState(STATIC_ITEMS)
  const [memoObject, setMemoObject] = useState(MEMO_OBJECT)

  const [infoModalVisible, setInfoModalVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)

  let listView = useRef(null)
  const [activeMonth, setActiveMonth] = useState<moment.Moment>(
    DEFAULT_ACTIVE_MONTH_YEAR,
  )
  const [contentOffset, setContentOffset] = useState<PointPropType>({
    x: CARD_WIDTH,
    y: 0,
  })

  const generateDaysList = (month: moment.Moment): Array<moment.Moment> => {
    var count = month.daysInMonth()
    var days = []
    for (var i = 1; i < count + 1; i++) {
      days.push(month.date(i).clone())
    }
    return days
  }

  const goToNextMonth = () => {
    listView.current.scrollTo({ x: CARD_WIDTH * 2, animated: true })
  }

  const goToPrevMonth = () => {
    listView.current.scrollTo({ x: 0 })
  }

  const addMonth = (month: moment.Moment): moment.Moment => {
    return moment(month).add(1, 'months')
  }

  const removeMonth = (month: moment.Moment): moment.Moment => {
    return moment(month).subtract(1, 'months')
  }

  const onScrollChange = (contentOffsetX: number) => {
    if (contentOffsetX === 0) {
      setActiveMonth(removeMonth(activeMonth))
      listView.current.scrollTo({ x: CARD_WIDTH, animated: false })
    } else if (contentOffsetX === CARD_WIDTH * 2) {
      setActiveMonth(addMonth(activeMonth))
      listView.current.scrollTo({ x: CARD_WIDTH, animated: false })
    }
  }

  const onCellPress = (dataDay) => {
    // весь объект дня с информацией
    setInfoModalVisible(true)
    setSelectedDate(dataDay)
  }

  const onModalDismiss = () => {
    setSelectedDate(null)
  }

  const props = {
    listView,
    goToNextMonth,
    goToPrevMonth,
    activeMonth,
    setActiveMonth,
    onScrollChange,
    generateDaysList,
    addMonth,
    removeMonth,
    contentOffset,
    data,
    memoObject,

    onCellPress,
  }

  return (
    <CalendarContext.Provider value={props}>
      <Calendar />
      <InfoModal
        {...{ selectedDate, onModalDismiss }}
        visible={infoModalVisible}
      />
    </CalendarContext.Provider>
  )
}
