import React from 'react'
import restyleTheme, { Box, TouchableBox, Text, shadow } from '~/theme'
import { Header } from '~/components/organisms'
import { Avatar, IconButton, Icon } from '~/components/atom'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const mockNotifications = [
  {
    id: 1,
    type: 'message',
    user: {
      id: 1,
      name: 'Марк Герасимов',
      avatar:
        'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/1156d96da3e77a5062551b3e7449379ca403cddd',
    },
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate corrupti sed corporis officiis sapiente, commodi autem quia fuga! Asperiores enim nihil obcaecati perferendis repellat, eius quae laudantium dolores aliquam?',
    time: '1 час назад',
  },
  {
    id: 2,
    type: 'notification',
    title: 'Ваш запрос одобрен',
    time: '5 часов назад',
  },
  {
    id: 3,
    type: 'message',
    user: {
      id: 1,
      name: 'Марк Герасимов',
      avatar:
        'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/1156d96da3e77a5062551b3e7449379ca403cddd',
    },
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate corrupti sed corporis officiis sapiente, commodi autem quia fuga! Asperiores enim nihil obcaecati perferendis repellat, eius quae laudantium dolores aliquam?',
    time: '1 час назад',
  },
  {
    id: 4,
    type: 'notification',
    title: 'Ваш запрос одобрен',
    time: '5 часов назад',
  },
  {
    id: 5,
    type: 'notification',
    title: 'Ваш запрос одобрен',
    time: '5 часов назад',
  },
  {
    id: 6,
    type: 'notification',
    title: 'Ваш запрос одобрен',
    time: '5 часов назад',
  },
  {
    id: 7,
    type: 'notification',
    title: 'Ваш запрос одобрен',
    time: '5 часов назад',
  },
  {
    id: 8,
    type: 'notification',
    title: 'Ваш запрос одобрен',
    time: '5 часов назад',
  },
  {
    id: 9,
    type: 'message',
    user: {
      id: 1,
      name: 'Марк Герасимов',
      avatar:
        'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/1156d96da3e77a5062551b3e7449379ca403cddd',
    },
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate corrupti sed corporis officiis sapiente, commodi autem quia fuga! Asperiores enim nihil obcaecati perferendis repellat, eius quae laudantium dolores aliquam?',
    time: '1 час назад',
  },
  {
    id: 10,
    type: 'notification',
    title: 'Ваш запрос одобрен',
    time: '5 часов назад',
  },
  {
    id: 11,
    type: 'message',
    user: {
      id: 1,
      name: 'Марк Герасимов',
      avatar:
        'https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/1156d96da3e77a5062551b3e7449379ca403cddd',
    },
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate corrupti sed corporis officiis sapiente, commodi autem quia fuga! Asperiores enim nihil obcaecati perferendis repellat, eius quae laudantium dolores aliquam?',
    time: '1 час назад',
  },
  {
    id: 12,
    type: 'notification',
    title: 'Ваш запрос одобрен',
    time: '5 часов назад',
  },
]

export const Notifications: React.FC = () => {
  const navigation = useNavigation()
  // TODO дописать типы
  const _renderItemAvatar = (notification) => {
    const { type } = notification
    return type === 'notification' ? (
      <Box
        backgroundColor="lightPrimary"
        borderRadius={19}
        width={38}
        height={38}
        justifyContent="center"
        alignItems="center">
        <Icon name="request" />
      </Box>
    ) : (
      <Avatar
        size={{ width: 38, height: 38 }}
        uri="https://www.figma.com/file/VV9GVaQ9jZ07o5L75477cI/image/1156d96da3e77a5062551b3e7449379ca403cddd"
      />
    )
  }

  const _renderItemContent = (notification) => {
    const { type } = notification
    return (
      <>
        <Text
          numberOfLines={2}
          marginBottom="s"
          fontSize={15}
          variant="regular"
          color="notificationTitle"
          letterSpacing={0.2}>
          {type === 'message' ? notification.user.name : notification.title}
        </Text>
        {type === 'message' ? (
          <Box marginBottom="s">
            <Text
              variant="regular"
              fontSize={12}
              lineHeight={17}
              numberOfLines={2}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              necessitatibus reprehenderit mollitia sequi quam cumque, enim
              libero accusantium nobis velit atque ullam quas, qui quisquam
              pariatur corporis neque numquam? Consequuntur.
            </Text>
          </Box>
        ) : null}
        <Box alignItems="center" flexDirection="row">
          <Box marginRight="xs">
            <Icon name="time" />
          </Box>
          <Text variant="regular" fontSize={12} color="notificationDate">
            1 час назад
          </Text>
        </Box>
      </>
    )
  }

  const _renderItem = ({ item: notification }) => {
    const { type } = notification
    return (
      <Box marginBottom="s">
        <Box
          paddingVertical="m"
          paddingHorizontal="m"
          borderRadius={10}
          backgroundColor="white"
          flexDirection="row"
          {...shadow}>
          <Box marginRight="m">{_renderItemAvatar(notification)}</Box>
          <Box paddingTop="xs" flexShrink={1} flexGrow={1}>
            {_renderItemContent(notification)}
          </Box>
          {type === 'message' ? (
            <Box>
              <IconButton onPress={() => navigation.navigate('Chat')}>
                <Icon name="chat" />
              </IconButton>
            </Box>
          ) : null}
        </Box>
      </Box>
    )
  }
  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header
        title="Уведомления"
        rightComponent={
          <TouchableBox>
            <Text variant="regular" fontSize={12} color="lightMain">
              Очистить все
            </Text>
          </TouchableBox>
        }
      />
      <Box flex={1}>
        <FlatList
          contentContainerStyle={{
            padding: restyleTheme.spacing.l,
            // paddingTop: restyleTheme.spacing.m,
          }}
          keyExtractor={(item) => item.id.toString()}
          data={mockNotifications}
          renderItem={_renderItem}
        />
      </Box>
    </Box>
  )
}
