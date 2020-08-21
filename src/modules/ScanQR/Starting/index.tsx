import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Box } from '~/theme'
import { Header, ListMenu } from '~/components/organisms'
import { Modal } from '~/components/molecules'
import { Icon } from '~/components/atom'
import { Section } from '~/components/template'
import { PickImage, Result } from './PickImage'

import QRCode from 'react-native-qrcode-svg'
import { StartingScreenRouteProp } from '~/navigation/ScanQRStack'
import { QRCodeSection } from './QRCodeSection'

export const Starting: React.FC = () => {
  const navigation = useNavigation()
  const route = useRoute<StartingScreenRouteProp>()

  const [resultModal, setResultModal] = useState(false)
  const [optionsModal, setOptionsModal] = useState(false)

  const [qrValue, setQrValue] = useState<string | undefined | null>(
    route.params ? route.params.data : undefined,
  )

  const onPickStart = () => {}

  const onPickFinish = (_qrValue: string | null) => {
    setQrValue(_qrValue)
  }

  const picker = new PickImage(onPickStart, onPickFinish)

  const menuItems = [
    {
      name: 'Сканировать камерой',
      icon: <Icon name="camera" />,
      onPress: () => navigation.navigate('Camera'),
    },
    {
      name: 'Сканировать из фотоальбома',
      icon: <Icon name="notebook" />,
      onPress: () => picker.pick(),
    },
  ]

  const optionsModalItems = [
    {
      id: 1,
      value: '',
      text: 'Вызвать мастера для ремонта',
    },
    {
      id: 2,
      value: '',
      text: 'Доставить на ремонт самостоятельно',
    },
    {
      id: 3,
      value: '',
      text: 'Запросить консультацию',
    },
    {
      id: 4,
      value: '',
      text: 'Подробности устройства',
    },
  ]

  const resultModalItems = [
    {
      id: 1,
      value: '',
      text: 'Отмена',
      onPress: () => setResultModal(false),
    },
    {
      id: 2,
      value: '',
      text: 'Подтвердить',
      type: 'primary',
    },
  ]

  return (
    <Box flex={1} backgroundColor="lightGrey">
      <Header title="Сканирование QR-кода" />
      {!qrValue && <ListMenu items={menuItems} />}

      <QRCodeSection {...{ qrValue }} />

      <Modal
        handleSelect={() => setOptionsModal(false)}
        modalTitle="Выбрать опцию"
        modalVisible={optionsModal}
        items={optionsModalItems}
      />
      <Modal
        handleSelect={() => {}}
        modalTitle="Такое устройство не найдено. Вы хотите поставить его на баланс?"
        modalVisible={resultModal}
        items={resultModalItems}
      />
    </Box>
  )
}
