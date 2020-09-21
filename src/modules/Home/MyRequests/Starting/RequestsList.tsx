import React from 'react'
import { ScrollView, FlatList } from 'react-native'
import restyleTheme, {
  Box,
  Text,
  TouchableBox,
  shadow,
  ColorValueType,
} from '~/theme'
import { Icon } from '~/components/atom'
import { useNavigation } from '@react-navigation/native'

const mockRequests: Array<RequestType> = [
  {
    title: 'Название запроса',
    statusCode: 1,
  },
  {
    title: 'Название запроса',
    statusCode: 2,
  },
  {
    title: 'Название запроса',
    statusCode: 1,
  },
  {
    title: 'Название запроса',
    statusCode: 2,
  },
  {
    title: 'Название запроса',
    statusCode: 1,
  },
  {
    title: 'Название запроса',
    statusCode: 1,
  },
  {
    title: 'Название запроса',
    statusCode: 2,
  },
  {
    title: 'Название запроса',
    statusCode: 1,
  },
  {
    title: 'Название запроса',
    statusCode: 2,
  },
  {
    title: 'Название запроса',
    statusCode: 1,
  },
  {
    title: 'Название запроса',
    statusCode: 1,
  },
  {
    title: 'Название запроса',
    statusCode: 2,
  },
  {
    title: 'Название запроса',
    statusCode: 1,
  },
  {
    title: 'Название запроса',
    statusCode: 2,
  },
  {
    title: 'Название запроса',
    statusCode: 1,
  },
  {
    title: 'Название запроса',
    statusCode: 1,
  },
  {
    title: 'Название запроса',
    statusCode: 2,
  },
  {
    title: 'Название запроса',
    statusCode: 1,
  },
  {
    title: 'Название запроса',
    statusCode: 2,
  },
  {
    title: 'Название запроса',
    statusCode: 1,
  },
]

type RequestType = {
  title: string
  statusCode: 1 | 2
}

export const RequestsList = () => {
  const navigation = useNavigation()
  const _renderStatus = (request: RequestType) => {
    const { statusCode } = request

    const colorName = {
      1: 'yellow',
      2: 'blue',
    }
    const text = {
      1: 'в обработке',
      2: 'на обслуживании',
    }
    const color = colorName[statusCode] as ColorValueType

    return (
      <Text variant="semiBold" fontSize={14} color={color}>
        {text[statusCode]}
      </Text>
    )
  }
  const _renderItem = ({ item }: { item: RequestType }) => (
    <TouchableBox
      backgroundColor="white"
      borderRadius={6}
      paddingHorizontal="l"
      paddingVertical="m"
      marginBottom="xm"
      onPress={() => navigation.navigate('Chat', { type: 'request' })}
      {...shadow}>
      <Box
        borderLeftWidth={4}
        borderLeftColor="requestInnerLine"
        paddingLeft="m">
        <Text
          marginBottom="xs"
          variant="semiBold"
          fontSize={16}
          lineHeight={19}
          color="requestCardTitle">
          {item.title}
        </Text>
        <Box flexDirection="row">
          <Text
            marginRight="xs"
            fontSize={12}
            variant="regular"
            color="requestCardTitle">
            Статус:
          </Text>
          {_renderStatus(item)}
        </Box>
      </Box>
    </TouchableBox>
  )
  return (
    <Box flex={1}>
      <FlatList
        contentContainerStyle={{ padding: restyleTheme.spacing.l }}
        data={mockRequests}
        ListHeaderComponent={
          <TouchableBox
            backgroundColor="white"
            borderRadius={6}
            paddingHorizontal="l"
            paddingVertical="m"
            marginBottom="xm"
            flexDirection="row"
            alignItems="center"
            onPress={() => navigation.navigate('Chat', { type: 'user' })}
            {...shadow}>
            <Box
              height={51}
              width={51}
              backgroundColor="lightPrimary"
              alignItems="center"
              justifyContent="center"
              borderRadius={23}
              marginRight="m">
              <Icon name="skills" />
            </Box>
            <Box>
              <Text
                marginBottom="xs"
                variant="medium"
                fontSize={14}
                color="requestCardTitle">
                Ваш персональный
              </Text>
              <Text variant="medium" fontSize={14} color="requestCardTitle">
                менеджер
              </Text>
            </Box>
          </TouchableBox>
        }
        renderItem={_renderItem}
        keyExtractor={(_, i) => i.toString()}
      />
    </Box>
  )
}
