import React from 'react'
import { Section } from '~/components/template'
import { Box, Text } from '~/theme'

const mockData = [
  {
    name: 'Название параметра',
    value: 'значение параметра',
  },
  {
    name: 'Название параметра',
    value: 'значение параметра',
  },
  {
    name: 'Название параметра',
    value: 'значение параметра',
  },
  {
    name: 'Название параметра',
    value: 'длинное значение параметра в несколько строк длиной',
  },
  {
    name: 'Название параметра',
    value: 'значение параметра',
  },
  {
    name: 'Название параметра',
    value: 'значение параметра',
  },
]

export const DeviceAttributesAndParametersSection = () => (
  <Section
    title="Атрибуты и параметры устройства"
    containerStyleProps={{ marginBottom: 'l' }}
    headerContainerStyleProps={{
      justifyContent: 'center',
      marginTop: 's',
      marginBottom: 'm',
    }}>
    <Box borderWidth={2} borderRadius={6} borderColor="tableBorder">
      {mockData.map((item, index) => {
        const isLast = mockData.length === index + 1
        return (
          <Box
            key={index}
            paddingHorizontal="m"
            backgroundColor={
              index % 2 === 0 ? 'tableRowContrastBackground' : 'white'
            }
            borderBottomWidth={isLast ? 0 : 2}
            borderBottomColor="tableBorder">
            <Box
              paddingVertical="xm"
              borderBottomWidth={1}
              borderBottomColor="tableRowBorder">
              <Text variant="bold" color="tableRowTitle">
                {item.name}
              </Text>
            </Box>
            <Box paddingVertical="xm">
              <Text variant="regular">{item.value}</Text>
            </Box>
          </Box>
        )
      })}
    </Box>
  </Section>
)
