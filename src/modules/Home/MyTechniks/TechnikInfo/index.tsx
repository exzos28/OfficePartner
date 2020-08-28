import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { Box, Text } from '~/theme'
import { Header } from '~/components/organisms'
import { Section } from '~/components/template'
import { Icon } from '~/components/atom'
import { HistorySection } from './HistorySection'

const item = {
  name: 'HP Neverstop Laser',
  code: '4QD21A',
  imgUri:
    'https://s3-alpha-sig.figma.com/img/ebac/2142/fb632efd2ed1b0f9758d23769ee1066c?Expires=1598832000&Signature=LOAtzyUbLPW2c9YIZ9zGdcBJDNww0eW~iVld65SNgbxgMZbun8FcHkqzfevVxFrVb6x2npP-FRVujAefWX7BS7NJ3EPzmgEVyOdmXJs48W33W4WEMSwmPdfNMD8PAkvp~Eilv9y~PUjyB5uCF6U9FuUK2u-g6QfoXjoGslLl-eTQbs340~PA487YdeTs4TYP~m7F0R0YA2dwbdack7QPUi-RuCL4QxfZCR3yM5Pe-cCxF24CeV0DMSETAjxjweS1dRXcy2fN-hspXEp12kuqLs4nIPxV5Olx~P1UjvnCQayUpSUCVMz-beyAfFNJxIoWPg3oSGIgDWLvEMoCMv59wg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
}

export const TechnikInfo: React.FC = () => (
  <Box flex={1} backgroundColor="lightGrey">
    <Header title="HP Neverstop Laser" />
    <ScrollView>
      <Box flex={1} paddingVertical="m">
        <Section>
          <Box alignItems="center">
            <Box width={90} height={90} marginBottom="s">
              <Image
                source={{ uri: item.imgUri }}
                resizeMode="center"
                style={{ ...StyleSheet.absoluteFillObject }}
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
            <Text color="primary" fontSize={16}>
              140
            </Text>
          }></Section>
        <Section title="Атрибуты">
          <Box height={40} />
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
        <Section
          containerStyleProps={{ paddingBottom: 'xl' }}
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
