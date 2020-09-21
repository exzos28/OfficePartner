import React, { useState, useEffect, useRef } from 'react'
import { Animated, View } from 'react-native'

import { Section } from '~/components/template'
import restyleTheme, { Box, Text, TouchableBox } from '~/theme'
import { Icon } from '~/components/atom'

const history = [
  {
    date: '08.08.2020',
    text: 'Поставлен на баланс',
  },
  {
    date: '08.08.2020',
    text: 'Заявка на ремонт',
  },
  {
    date: '08.08.2020',
    text: 'Доставлен в ремонт',
  },
  {
    date: '08.08.2020',
    text: 'Поставлен на баланс',
  },
  {
    date: '08.08.2020',
    text: 'Поставлен на баланс',
  },
  {
    date: '08.08.2020',
    text: 'Поставлен на баланс',
  },
]

const ITEM_HEIGHT = 48 + restyleTheme.spacing.s

export const HistorySection: React.FC = () => {
  const openedHeight = history.length * ITEM_HEIGHT

  const closedHeight =
    history.length > 3 ? ITEM_HEIGHT * 3 : ITEM_HEIGHT * history.length

  let height = useRef(new Animated.Value(closedHeight)).current

  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    if (collapsed) {
      Animated.timing(height, {
        toValue: openedHeight,
        duration: 150,
        useNativeDriver: false,
      }).start()
    } else {
      Animated.timing(height, {
        toValue: closedHeight,
        duration: 150,
        useNativeDriver: false,
      }).start()
    }
  }, [collapsed])

  return (
    <Section containerStyleProps={{ marginBottom: 'l' }}>
      <Animated.View style={{ height: height, overflow: 'hidden' }}>
        {history.map((item, i) => (
          <Box key={i} flexDirection="row" alignItems="center" marginBottom="s">
            <Box
              borderRadius={6}
              backgroundColor="main"
              marginRight="l"
              width={140}
              height={48}
              alignItems="center"
              justifyContent="center">
              <Text
                color="white"
                variant="semiBold"
                fontSize={16}
                lineHeight={20}>
                {item.date}
              </Text>
            </Box>
            <Box>
              <Text fontSize={14} variant="semiBold" color="marengo">
                {item.text}
              </Text>
            </Box>
          </Box>
        ))}
      </Animated.View>

      <TouchableBox
        onPress={() => setCollapsed(!collapsed)}
        marginTop="m"
        alignItems="center">
        {collapsed ? <Icon name="upArrow" /> : <Icon name="downArrow" />}
      </TouchableBox>
    </Section>
  )
}
