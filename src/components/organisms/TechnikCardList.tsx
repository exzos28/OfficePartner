import React from 'react'
import restyleTheme, { Box } from '~/theme'
import { TechnikCard } from '../molecules'
import { FlatList, StyleSheet } from 'react-native'
import { Technik } from '~/@types'
import { useNavigation } from '@react-navigation/native'

type Props = {
  items: Array<Technik>
}

export const TechnikCardList: React.FC<Props> = ({ items }) => {
  const navigation = useNavigation()

  const _renderItem = ({ item }: { item: Technik }) => (
    <TechnikCard
      {...item}
      onPress={() => navigation.navigate('TechnikInfo')}
      spacing={{ margin: 's' }}
    />
  )

  return (
    <Box flex={1}>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'center' }}
        contentContainerStyle={styles.contentContainerStyle}
        numColumns={2}
        data={items}
        renderItem={_renderItem}
        keyExtractor={(_, i) => i + ''}
      />
    </Box>
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: restyleTheme.spacing.m,
    paddingHorizontal: restyleTheme.spacing.s,
  },
})
