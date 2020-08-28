import React, { useState } from 'react'

import { Calendar } from 'react-native-calendars'
import './config'

import restyleTheme from '~/theme'
import { InfoModal } from '../Calendar/InfoModal'

export const Calendar2 = () => {
  const [infoModal, setInfoModal] = useState({
    visible: false,
    selectedDay: null,
  })

  const handleDayPress = (day) => {
    setInfoModal({ visible: true, selectedDay: day })
  }
  const handleCloseModal = () => {
    setInfoModal({ visible: false, selectedDay: null })
  }
  return (
    <>
      <Calendar
        theme={{
          backgroundColor: restyleTheme.colors.white,
          calendarBackground: restyleTheme.colors.white,
          todayBackgroundColor: restyleTheme.colors.main,
          todayTextColor: restyleTheme.colors.white,
          dayTextColor: '#14162C',
          arrowColor: restyleTheme.colors.main,
          // textDayFontFamily: restyleTheme.textVariants.regular.fontFamily,
        }}
        // Initially visible month. Default = Date()
        // current={'2012-03-01'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        // minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={'2012-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={handleDayPress}
        // Handler which gets executed on day long press. Default = undefined
        // onDayLongPress={(day) => {
        //   console.log('selected day', day)
        // }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        // monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        // onMonthChange={(month) => {
        //   console.log('month changed', month)
        // }}
        // Hide month navigation arrows. Default = false
        // hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // renderArrow={(direction) => <Arrow />}
        // Do not show days of other months in month page. Default = false
        // hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        // disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        extraDays={true}
        // Hide day names. Default = false
        // hideDayNames={true}
        // Show week numbers to the left. Default = false
        // showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Disable left arrow. Default = false
        // disableArrowLeft={true}
        // Disable right arrow. Default = false
        // disableArrowRight={true}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        // disableAllTouchEventsForDisabledDays={true}
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
        // renderHeader={(date) => {
        //   /*Return JSX*/
        // }}
        markedDates={{
          '2020-08-16': { marked: true, selectedColor: 'blue' },
          '2020-08-17': { marked: true },
          '2020-08-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
        }}
      />
      <InfoModal
        {...infoModal}
        {...{ handleCloseModal }}
        dismiss={handleCloseModal}
      />
    </>
  )
}
