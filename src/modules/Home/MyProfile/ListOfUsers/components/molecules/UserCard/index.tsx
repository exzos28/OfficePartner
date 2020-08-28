import React from 'react'
import { TouchableBox, Box, Text, Theme } from '~/theme'
import { SpacingProps } from '@shopify/restyle'

import { shadow } from '~/theme'
import { User } from '~/@types'
import { Avatar } from '~/components/atom'
import { UserCardHeader } from './UserCardHeader'

type Props = User & {
  spacing: SpacingProps<Theme>
  onPress?: () => void
  onEditPress?: () => void
}

export const WIDTH = 160
export const HEIGTH = 140

export const UserCard: React.FC<Props> = ({
  spacing,
  role,
  name,
  imgUri,
  onPress,
  onEditPress,
}) => (
  <TouchableBox
    backgroundColor="white"
    height={HEIGTH}
    width={WIDTH}
    alignItems="center"
    padding="m"
    borderRadius={6}
    {...{ onPress }}
    {...shadow}
    {...spacing}>
    <Box flex={1} alignItems="center">
      <Box marginBottom="s">
        <Avatar uri={imgUri} />
      </Box>
      <Box style={{ marginTop: 'auto' }}>
        <Text
          numberOfLines={2}
          marginBottom="s"
          textAlign="center"
          variant="regular"
          letterSpacing={0.2}>
          {name}
        </Text>
      </Box>
      <Text variant="medium" color="mediumGrey">
        {role}
      </Text>
    </Box>
    <UserCardHeader {...{ onEditPress }} />
  </TouchableBox>
)
