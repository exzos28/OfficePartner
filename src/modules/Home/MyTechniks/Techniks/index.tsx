import React, { useState, useRef, useEffect, Ref } from 'react'
import restyleTheme, { Box, shadow } from '~/theme'
import { TechnikCardList } from './components/organisms'
import { useNavigation } from '@react-navigation/native'
import { Fab, CheckboxGroup } from '~/components/molecules'
import { Header } from '~/components/organisms'
import { SearchBar } from './components/organisms/SearchBar'
import { Icon } from '~/components/atom'
import { TextInput, View, StyleSheet } from 'react-native'

import Animated, { interpolate, diffClamp } from 'react-native-reanimated'

const HEADER_HEIGHT = 150

export const Techniks: React.FC = () => {
  const navigation = useNavigation()
  const [filterVisible, setFilterVisible] = useState(false)
  let inputRef = useRef<TextInput | null>(null)

  const handleFilterVisible = () => setFilterVisible(!filterVisible)
  const onInputFocus = () => setFilterVisible(false)
  useEffect(() => {
    if (filterVisible) inputRef.current?.blur()
  }, [filterVisible])

  const scrollY = new Animated.Value(0)

  const diffClampY = diffClamp(scrollY, 0, HEADER_HEIGHT)

  const translateY = interpolate(diffClampY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  })

  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Моя техника" />
      <Box flex={1}>
        <Animated.View
          style={{
            ...styles.headerContainer,
            transform: [{ translateY: translateY }],
          }}>
          <SearchBar
            {...{
              handleFilterVisible,
              filterVisible,
              inputRef,
              onInputFocus,
            }}
          />
        </Animated.View>

        <TechnikCardList {...{ scrollY }} />

        {filterVisible ? (
          <Box
            position="absolute"
            top={88}
            width="100%"
            paddingHorizontal="l"
            zIndex={3}>
            <Box
              height={300}
              backgroundColor="white"
              borderRadius={7}
              padding="l"
              {...shadow}>
              <Box position="absolute" right={15} top={-13}>
                <Icon name="triangle" />
              </Box>
              <Box marginBottom="l">
                <CheckboxGroup
                  checkboxListContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}
                  checkboxContainerStyle={{ marginRight: 'l' }}
                  onChangeItem={() => {}}
                  label="Тип устройства"
                  items={[
                    { id: 1, text: 'Тип 1', checked: false },
                    { id: 2, text: 'Тип 2', checked: false },
                    { id: 3, text: 'Тип 3', checked: false },
                    { id: 4, text: 'Тип 4', checked: false },
                  ]}
                />
              </Box>
              <CheckboxGroup
                checkboxListContainerStyle={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}
                checkboxContainerStyle={{ marginRight: 'l' }}
                onChangeItem={() => {}}
                label="Название офиса"
                items={[
                  { id: 1, text: 'Тип 1', checked: false },
                  { id: 2, text: 'Тип 2', checked: false },
                  { id: 3, text: 'Тип 3', checked: false },
                  { id: 4, text: 'Тип 4', checked: false },
                ]}
              />
            </Box>
          </Box>
        ) : null}
      </Box>
      <Fab onPress={() => navigation.navigate('AddTechnik')} />
    </Box>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    left: 0,
    right: 0,
    zIndex: 3,
    top: 0,
    position: 'absolute',
    backgroundColor: restyleTheme.colors.lightGrey,
  },
})
