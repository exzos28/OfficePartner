import React, { useRef, useEffect, useState } from 'react'
import restyleTheme, { Box, Text, ColorValueType, shadow } from '~/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Platform, Animated } from 'react-native'
import { Icon } from '~/components/atom'
import { replaceText } from '~/helpers'
import { ScrollView } from 'react-native-gesture-handler'
import { useKeyboard } from '~/hooks/Keyboard'

export const HEIGHT = 160

const mockSteps: Array<StepType> = [
  {
    title: 'Название этапа этапа этапа',
    datetime: '12:22 27.09.2020',
    statusCode: 2,
    complited: true,
  },
  {
    title: 'Название этапа Название этапа',
    datetime: '12:22 27.09.2020',
    statusCode: 2,
    complited: true,
  },
  {
    title: 'Название этапа',
    datetime: '12:02 28.09.2020',
    statusCode: 2,
    complited: true,
  },
  {
    title: 'В обработке',
    datetime: '14:21 29.09.2020',
    statusCode: 1,
    complited: false,
  },
]

type StepType = {
  title: string
  datetime: string
  statusCode: 1 | 2
  complited: boolean
}

const StepTag = ({ title, statusCode }: StepType) => {
  const backgroundColor = {
    1: 'tagBackgroundInfo',
    2: 'tagBackgroundPrimary',
  }[statusCode] as ColorValueType
  const color = {
    1: 'tagColorInfo',
    2: 'tagColorPrimary',
  }[statusCode] as ColorValueType
  return (
    <Box
      borderRadius={5}
      paddingVertical="xs"
      paddingHorizontal="xm"
      {...{ backgroundColor }}>
      <Text
        fontSize={12}
        lineHeight={15}
        letterSpacing={0.2}
        variant="medium"
        {...{ color }}>
        {replaceText(title, 20)}
      </Text>
    </Box>
  )
}

const Dot = ({ steps, index }: { steps: Array<StepType>; index: number }) => {
  const isLast = steps.length === index + 1
  const currentStep = steps[index]
  const nextStep = steps.length === index + 1 ? null : steps[index + 1]

  const lineBackground =
    nextStep && nextStep.complited ? 'lightMain' : 'tagBackgroundPrimary'

  const borderColor = currentStep.complited ? 'lightMain' : 'tagColorInfo'
  const backgroundColor = currentStep.complited ? 'lightMain' : 'white'
  return (
    <Box position="absolute" top={5}>
      <Box
        borderWidth={2}
        zIndex={2}
        width={16}
        height={16}
        borderRadius={8}
        marginRight="s"
        justifyContent="center"
        alignItems="center"
        {...{ borderColor, backgroundColor }}>
        {currentStep.complited && (
          <Icon name="checkmark" size={{ width: 10, height: 10 }} />
        )}
      </Box>
      {!isLast && (
        <Box
          position="absolute"
          left={7}
          top={0}
          height={55}
          width={2}
          backgroundColor={lineBackground}
        />
      )}
    </Box>
  )
}

export const RequestInfo = () => {
  const [visible, dismiss] = useKeyboard()
  const listView = useRef<ScrollView>(null)

  const [wholeHeight, setWholeHeight] = useState(1)
  const [visibleHeight, setVisibleHeight] = useState(0)
  const indicator = new Animated.Value(0)

  const indicatorSize =
    wholeHeight > visibleHeight
      ? (visibleHeight * visibleHeight) / wholeHeight
      : visibleHeight

  const difference =
    visibleHeight > indicatorSize ? visibleHeight - indicatorSize : 1

  useEffect(() => {})

  useEffect(() => {
    listView.current && listView.current.scrollToEnd({ animated: false })
  }, [])
  const insets = useSafeAreaInsets()
  const top: number =
    89 + (Platform.OS === 'ios' ? insets.top : 0) + restyleTheme.spacing.m

  if (visible) return null

  return (
    <Box
      top={top}
      left={0}
      right={0}
      position="absolute"
      zIndex={2}
      paddingHorizontal="m"
      height={HEIGHT}
      {...shadow}>
      <Box borderRadius={18} backgroundColor="white" paddingVertical="m">
        <Box paddingHorizontal="l" marginBottom="m">
          <Text
            variant="medium"
            fontSize={14}
            color="marengo"
            letterSpacing={0}>
            Статус выполнения заказа
          </Text>
        </Box>
        <Box>
          <ScrollView
            style={{ height: 100 }}
            ref={listView}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={(width, height) => {
              setWholeHeight(height)
            }}
            onLayout={({
              nativeEvent: {
                layout: { x, y, width, height },
              },
            }) => setVisibleHeight(height)}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: indicator } } }],
              { useNativeDriver: false },
            )}>
            <Box marginBottom="-s" paddingHorizontal="l">
              {mockSteps.map((step, index) => {
                return (
                  <Box
                    key={index}
                    marginBottom="m"
                    flexDirection="row"
                    flexWrap="wrap"
                    alignItems="center"
                    paddingLeft="l">
                    <Dot steps={mockSteps} {...{ index }} />

                    <Box marginRight="s">
                      <StepTag {...step} />
                    </Box>
                    <Text variant="regular" color="marengo">
                      — {step.datetime}
                    </Text>
                  </Box>
                )
              })}
            </Box>
          </ScrollView>

          <Box
            position="absolute"
            right={10}
            width={4}
            height="100%"
            backgroundColor="scrollBackground">
            <Animated.View
              style={[
                {
                  height: indicatorSize,
                  backgroundColor: restyleTheme.colors.scrollIndicator,
                  transform: [
                    {
                      translateY: Animated.multiply(
                        indicator,
                        visibleHeight / wholeHeight,
                      ).interpolate({
                        inputRange: [0, difference],
                        outputRange: [0, difference],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
