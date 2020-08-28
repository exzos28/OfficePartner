import React from 'react'
import restyleTheme, { Box, Text, TouchableBox } from '~/theme'
import { MasterCard } from '../molecules'
import { FlatList, StyleSheet } from 'react-native'
import { Master } from '~/@types'
import { useNavigation } from '@react-navigation/native'
import { Section } from '~/components/template'

type Props = {
  items: Array<Master>
}

export const MasterCardList: React.FC<Props> = ({ items }) => {
  const navigation = useNavigation()
  const _renderItem = ({ item }: { item: Master }) => (
    <MasterCard
      {...item}
      onPress={() => navigation.navigate('Chat')}
      spacing={{ margin: 's' }}
    />
  )

  return (
    <Box flex={1}>
      <FlatList
        ListHeaderComponent={
          <TouchableBox
            onPress={() => navigation.navigate('Chat')}
            marginBottom="s"
            borderRadius={6}>
            <Section>
              <Text textAlign="center" variant="regular" fontSize={16}>
                Ваш персональный менеджер
              </Text>
            </Section>
          </TouchableBox>
        }
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
