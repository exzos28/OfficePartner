import React, { RefObject } from 'react'
import { TextInput } from 'react-native'
import { Box, TouchableBox, Text } from '~/theme'
import { SearchInput } from '../molecules'
import { DotNumber, Icon } from '~/components/atom'

type Props = {
  handleFilterVisible: () => void
  onInputFocus: () => void
  filterVisible: boolean
  inputRef: RefObject<TextInput> | null
}

export const SearchBar: React.FC<Props> = ({
  handleFilterVisible,
  onInputFocus,
  filterVisible,
  inputRef,
}) => (
  <Box paddingHorizontal="l" paddingVertical="l" paddingBottom="s">
    <Box marginBottom="l">
      <SearchInput
        onFilterPress={handleFilterVisible}
        {...{ filterVisible, inputRef, onInputFocus }}
      />
    </Box>
    <Box flexDirection="row">
      <TouchableBox
        flexDirection="row"
        borderRadius={7}
        padding="s"
        justifyContent="center"
        alignItems="center">
        <Box marginRight="xs">
          <Icon name="sort" />
        </Box>
        <Text color="main" variant="semiBold">
          Сортировать по тэгам
        </Text>
      </TouchableBox>
    </Box>
  </Box>
)
