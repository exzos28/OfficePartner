import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { Box, Text } from '~/theme'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'
import { Icon, Tag } from '~/components/atom'
import { HistorySection } from './HistorySection'
import { DeviceAttributesAndParametersSection } from './DeviceAttributesAndParametersSection'

const item = {
  name: 'HP Neverstop Laser',
  code: '4QD21A',
  imgUri: require('~/assets/mock/techniks/hp.png'),
}

export const TechnikInfo: React.FC = () => (
  <Box flex={1} backgroundColor="lightGrey">
    <Header title={item.name} />
    <ScrollView>
      <Box flex={1} paddingVertical="m">
        <Section>
          <Box alignItems="center">
            <Box width={90} height={90} marginBottom="s">
              <Image
                source={item.imgUri} // TODO заменить на uri
                // style={{ ...StyleSheet.absoluteFillObject}}
              />
            </Box>
            <Text marginBottom="s" variant="medium" color="marengo">
              {item.name}
            </Text>
            <Text variant="regular" color="mediumGrey">
              {item.code}
            </Text>
          </Box>
        </Section>
        <Section title="Ресурс">
          <Text variant="regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            aliquam sed, similique neque aliquid deserunt asperiores autem sunt
            repudiandae quo aperiam rem natus doloremque non ducimus laborum?
            Assumenda, nulla quo?
          </Text>
        </Section>
        <Section
          title="Пробег"
          headerRightComponent={
            <Text
              variant="medium"
              letterSpacing={0.5}
              color="primary"
              fontSize={16}>
              140
            </Text>
          }></Section>
        <Section title="Геотег">
          <Box flexDirection="row" flexWrap="wrap" marginBottom="-s">
            <Box marginRight="s" marginBottom="s">
              <Tag title="Бухгалтерия" />
            </Box>
            <Box marginRight="s" marginBottom="s">
              <Tag title="2-ой этаж" />
            </Box>
            <Box marginRight="s" marginBottom="s">
              <Tag title="каб. 202" />
            </Box>
          </Box>
        </Section>
        <Section title="Местоположения">
          <Box flexDirection="row">
            <Box
              marginRight="m"
              backgroundColor="lightPrimary"
              width={34}
              height={34}
              borderRadius={17}
              alignItems="center"
              justifyContent="center">
              <Icon name="address" />
            </Box>
            <Box flex={1} paddingBottom="s" style={{ marginTop: 'auto' }}>
              <Text variant="regular">5 Race St. Clarksville, TN 37040</Text>
            </Box>
          </Box>
        </Section>
        <Section title="Особые отметки">
          <Text variant="regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            aliquam sed, similique neque aliquid deserunt asperiores autem sunt
            repudiandae quo aperiam rem natus doloremque non ducimus laborum?
            Assumenda, nulla quo?
          </Text>
        </Section>
        <HistorySection />
        <DeviceAttributesAndParametersSection />
        <Section
          containerStyleProps={{ paddingBottom: 'xl', marginBottom: 'm' }}
          title="QR код"
          headerRightComponent={<Icon touchable name="download" />}>
          <Box alignItems="center">
            <Box width={90} height={90}>
              <Image
                style={{ ...StyleSheet.absoluteFillObject }}
                source={require('~/assets/mock/QRCode.png')}
              />
            </Box>
          </Box>
        </Section>
      </Box>
    </ScrollView>
  </Box>
)
