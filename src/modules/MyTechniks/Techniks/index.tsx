import React from 'react'
import { Box } from '~/theme'
import { Header, TechnikCardList } from '~/components/organisms'
import { useNavigation } from '@react-navigation/native'
import { Fab } from '~/components/molecules'

const items = [
  {
    name: 'HP Neverstop Laser',
    code: '4QD21A',
    imgUri:
      'https://s3-alpha-sig.figma.com/img/ebac/2142/fb632efd2ed1b0f9758d23769ee1066c?Expires=1598832000&Signature=LOAtzyUbLPW2c9YIZ9zGdcBJDNww0eW~iVld65SNgbxgMZbun8FcHkqzfevVxFrVb6x2npP-FRVujAefWX7BS7NJ3EPzmgEVyOdmXJs48W33W4WEMSwmPdfNMD8PAkvp~Eilv9y~PUjyB5uCF6U9FuUK2u-g6QfoXjoGslLl-eTQbs340~PA487YdeTs4TYP~m7F0R0YA2dwbdack7QPUi-RuCL4QxfZCR3yM5Pe-cCxF24CeV0DMSETAjxjweS1dRXcy2fN-hspXEp12kuqLs4nIPxV5Olx~P1UjvnCQayUpSUCVMz-beyAfFNJxIoWPg3oSGIgDWLvEMoCMv59wg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    name: 'Монитор 23.8" Dell P2418D',
    code: '210-AMPS',
    imgUri:
      'https://s3-alpha-sig.figma.com/img/b624/5246/47ac7d00bef115b1670739b30ccaaa14?Expires=1598832000&Signature=fH-SiEwLfBFcY8VcgROBbwSq1bXrmO8TnFVISMwLbBdnHejjxBL0XkEmouUrlcBO013BjKRs0UkjmVx1L9EpoN2ZdxqYiyPyepmFkJm3G~QVdcKCd~n5a~wtmWldewfhLwAtUwPM8krUJJrmYAYRmJw2TWTP0j-IGyeesCLiZv51lg~UBfppKw4h5BrQTHAgIFpQd5F96Q8qXSLxGCOZ4sq-MYr0MY1B489riNdV~YiCdrMkkQw6ImPE5DeRRBnKwxscYOrWbk3OKwSsaD-90Zg05UMbqcSYCnrDHQzJ3IJvGXJY603QVt8X19IHUXwDUdYAOtnXeQCGQHww4SG54Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    name: 'Xiaomi Mi Notebook Pro 15.6',
    code: 'JYU4224CN',
    imgUri:
      'https://s3-alpha-sig.figma.com/img/d6be/6b44/3ccf7de13d50be9fbc361b9533dc8009?Expires=1598832000&Signature=KbFczOPiVJwqAoyCqAQTZp3Ad763tfKtxtryjnS55BXJhQuWeDwPi-I-BloVpnqd86UikQvo4U-zNaYIgBObW1vdvvs1x~AHOs0oouufJSPHrfrflD~vDpn0PrD~HxbpEUH8tagm8o95jO~DL9PNC~IQTT8CokCVLCOS7O2M9BHd~~8LeSUnOyyTrq1QxAStQZ8lzlrZzVw0AVxvjin2w-oZw6xHOi87Gi~zVIbVPSilkIkTji3RF2RgjUuSsmw~zjCtPIFPCVyq9WJO4Zjh0pIeEpR2Jt~QRhJNUvxczL2Dn54GKKTbLKQnf0yc3nhu7wvmRuecuX5vDH8DQ0uTEw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    name: 'Vinga LCD 1500VA Shuko Metal',
    code: 'VPC-1500M',
    imgUri:
      'https://s3-alpha-sig.figma.com/img/45c0/c2b3/1fb0a9a207d5f3274ca0fdc89ee71a76?Expires=1598832000&Signature=UwGkNAcS8y4yelZytNDOtHHSbj~LHUTHgC1WUEX2plO0NOwEJuY~75wUeT0bHX5H-g2o0c9gsCLj8cJVvbmJtAWvrK8YeHsv85OGYY5-qAXCPAS~BKD-ZUDTle9zaTmIpbOGrqTUzJ8GKeTQSW2ZD1~5lDd6ow3ZaPg2WOP52ilJ67f8xzvrbF3UHDiN-D5BU~8882vLf3tWHUbL6j3EjTj567XDp~9otzAI2NXHaW1LNbF1vRNZeZZyRGk2R2o4GwJZpojxNxHSljiFIN4hcaFjmanESL86XYdPD6-R~7I2gO~JT8MpvnIzrNgAlOce031ovAiv4BI441b2He0Zpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
]

export const Techniks: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Моя техника" />
      <Box flex={1}>
        <TechnikCardList {...{ items }} />
      </Box>
      <Fab onPress={() => navigation.navigate('AddTechnik')} />
    </Box>
  )
}
