import React from 'react'
import restyleTheme, { Box, Text } from '~/theme'
import Svg, { Path } from 'react-native-svg'

import { Message as MessageType } from '~/@types'

type Props = MessageType & {
  nextMessage: MessageType | undefined
}

export const Message: React.FC<Props> = ({
  currentOwner,
  text,
  date,
  nextMessage,
}) => {
  const backgroundColor = currentOwner
    ? restyleTheme.colors.chatMessageRightBackground
    : restyleTheme.colors.chatMessageLeftBackground

  const color = currentOwner
    ? restyleTheme.colors.chatMessageRighText
    : restyleTheme.colors.chatMessageLeftText

  const dateColor = currentOwner
    ? restyleTheme.colors.chatMessageRightDate
    : restyleTheme.colors.chatMessageLeftDate

  const _renderPolygon = () => {
    const positions = currentOwner ? { right: -6 } : { left: -6 }
    if (!nextMessage || currentOwner === !nextMessage.currentOwner)
      return (
        <Box
          position="absolute"
          {...positions}
          bottom={0}
          style={{ transform: [{ scaleX: currentOwner ? 1 : -1 }] }}>
          <Polygon fillColor={backgroundColor} />
        </Box>
      )
    return null
  }

  return (
    <Box
      paddingHorizontal="m"
      alignItems={currentOwner ? 'flex-end' : 'flex-start'}>
      <Box
        marginBottom="s"
        minWidth={200}
        maxWidth="85%"
        paddingHorizontal="l"
        paddingVertical="m"
        borderRadius={18}
        flexDirection="row"
        flexWrap="wrap"
        style={{ backgroundColor }}>
        <Text
          variant="medium"
          style={{ color }}
          fontSize={14}
          lineHeight={16}
          letterSpacing={0.7}>
          {text}
        </Text>
        <Box
          style={{
            marginLeft: 'auto',
            transform: [{ translateY: 5 }],
          }}>
          <Text
            textAlign="center"
            variant="regular"
            style={{ color: dateColor }}>
            {` ${date} `}
          </Text>
        </Box>
        {_renderPolygon()}
      </Box>
    </Box>
  )
}

const Polygon = ({ fillColor }: { fillColor: string }) => (
  <Svg height={14} width={15} viewBox="0 0 14 15">
    <Path
      d="M7.9-0.1c-1.4,0-2.9,0-4.3,0c-1.2,0-2.4,0-3.6,0C0,3.6,0,7.3,0,11c0,0.6,0,1.2,0,1.8c0.1-0.1,0.2-0.1,0.3-0.2
	c5,1.6,7.9,1.9,13,1.4C9.5,9.5,8.2,6.4,7.9-0.1z"
      fill={fillColor}
    />
  </Svg>
)
