import React, { useMemo } from 'react'
import restyleTheme, { Box, Text } from '~/theme'
import { TechnikCard } from '../molecules'
import {
  SectionList,
  StyleSheet,
  FlatList,
  SectionListProps,
  SectionListProperties,
} from 'react-native'
import { Technik } from '~/@types'
import { useNavigation } from '@react-navigation/native'
import Animated from 'react-native-reanimated'
import { onScrollEvent } from 'react-native-redash'

import { WIDTH } from '../molecules/TechikCard'
import { tecknikItems } from '~/mock'

const LIST_CONTENT_WIDTH = WIDTH * 2 + restyleTheme.spacing.m * 2

type Section = {
  title: string
  data: Array<Technik>
}

type Props = {
  items: Array<Section>
  onScrollChange: () => void
}

export const TechnikCardList: React.FC<Props> = React.memo(
  ({ items = tecknikItems, scrollY, onScrollChange }) => {
    const navigation = useNavigation()

    const _renderItem = ({ item }: { item: Technik }) => (
      <TechnikCard
        {...item}
        onPress={() => navigation.navigate('TechnikInfo')}
        spacing={{ margin: 's' }}
      />
    )

    //@ts-ignore
    const _renderSectionHeader = ({ section }) => {
      return (
        <Box alignItems="center">
          <Box width={LIST_CONTENT_WIDTH}>
            <Box
              borderRadius={8}
              alignSelf="flex-start"
              padding="s"
              paddingVertical="xs"
              backgroundColor="lightPrimary">
              <Text variant="regular" color="main" fontSize={12}>
                {section.title}
              </Text>
            </Box>
          </Box>
        </Box>
      )
    }

    //@ts-ignore
    const _renderList = ({
      section,
      index,
    }: {
      section: Section
      index: any
    }) => {
      if (index !== 0) return null

      return (
        <Box justifyContent="center" alignItems="center">
          <FlatList
            numColumns={2}
            contentContainerStyle={{}}
            style={{
              width: LIST_CONTENT_WIDTH,
              marginBottom: restyleTheme.spacing.m,
            }}
            data={section.data}
            renderItem={_renderItem}
            keyExtractor={(_, i) => i.toString()}
          />
        </Box>
      )
    }

    const AnimatedSectionList = Animated.createAnimatedComponent(SectionList)

    return (
      <Box flex={1}>
        <AnimatedSectionList
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false} // TODO исправить чтобы работал bounces
          scrollEventThrottle={16}
          onScroll={onScrollEvent({ y: scrollY })}
          contentContainerStyle={styles.contentContainerStyle}
          renderSectionHeader={_renderSectionHeader}
          sections={items}
          renderItem={_renderList}
          keyExtractor={(_, i) => i.toString()}
          stickySectionHeadersEnabled={false}
        />
      </Box>
    )
  },
)

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 150,
    paddingVertical: restyleTheme.spacing.m,
  },
})
