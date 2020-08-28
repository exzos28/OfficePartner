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
        alignItems="center"
        backgroundColor="main">
        <Box marginRight="xs">
          <Icon name="sort" />
        </Box>
        <Text color="white" variant="semiBold">
          Сортировать по тэгам
        </Text>
        <Box position="absolute" top={-12} right={-10}>
          <DotNumber number={2} />
        </Box>
      </TouchableBox>
    </Box>
  </Box>
)
