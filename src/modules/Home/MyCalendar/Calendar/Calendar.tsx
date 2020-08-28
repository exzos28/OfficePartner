import React, { useContext, useEffect } from 'react'
import { Month } from './Month'
import { Box, shadow } from '~/theme'
import { ScrollView } from 'react-native-gesture-handler'
import { CARD_WIDTH, CELL_HEIGHT } from '.'
import { Header } from './Header'
import { CalendarContext } from './CalendarData'
import { Platform } from 'react-native'

export const Calendar = () => {
  let {
    listView,
    activeMonth,
    setActiveMonth,
    onScrollChange,
    addMonth,
    removeMonth,
    contentOffset,
  } = useContext(CalendarContext)

  const _renderMonths = () => {
    return (
      <>
        <Month month={removeMonth(activeMonth)} />
        <Month month={activeMonth} />
        <Month month={addMonth(activeMonth)} />
      </>
    )
  }

  useEffect(() => {
    if (listView.current)
      setTimeout(() => listView.current.scrollTo({ x: CARD_WIDTH, y: 0 }), 0)
  }, [listView])

  return (
    <Box alignItems="center">
      <Box
        borderRadius={6}
        height={CELL_HEIGHT * 8}
        width={CARD_WIDTH}
        backgroundColor="white"
        {...shadow}>
        <Header />
        <ScrollView
          onScroll={(data) => {
            onScrollChange(data.nativeEvent.contentOffset.x)
          }}
          contentOffset={contentOffset}
          ref={listView}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          horizontal={true}
          pagingEnabled
          scrollEventThrottle={200}
          decelerationRate={0} // Disable deceleration
          // snapToInterval={CARD_WIDTH} // Calculate the size for a card
        >
          {_renderMonths()}
        </ScrollView>
      </Box>
    </Box>
  )
}
