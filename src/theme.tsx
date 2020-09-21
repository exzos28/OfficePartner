import {
  createTheme,
  createBox,
  createText,
  BorderProps,
  BackgroundColorProps,
  border,
  backgroundColor,
  ShadowProps,
  ResponsiveValue,
} from '@shopify/restyle'

import { TouchableOpacity } from 'react-native'

import {
  createRestyleComponent,
  spacing,
  layout,
  SpacingProps,
  LayoutProps,
} from '@shopify/restyle'
import { TouchableOpacityProps } from 'react-native'

export const restyleTheme = createTheme({
  colors: {
    transparent: 'transparent',
    dark: '#242424',
    main: '#006B90',
    lightMain: '#51A2BE',
    marengo: 'rgba(58, 57, 84, 1)',
    grey: '#CECECE',
    white: '#FFFFFF',
    lightGrey: '#FAFAFC',
    inputLabel: '#1F1F1F',
    inputBackground: '#F5F5F5',
    inputText: '#58585E',
    mediumGrey: '#BEBEC0',
    info: '#FB5717',
    yellow: '#FCBC04',
    green: '#4CAC44',
    primary: '#006B90',
    blue: '#1C74FC',
    lightPrimary: 'rgba(81, 162, 190, 0.15)',

    dropdownText: '#4B4B67',

    notificationTitle: '#4B4B67',
    notificationDate: '#CFCFCF',

    chatInputBackground: '#F0F0F0',
    chatMessageLeftBackground: 'rgba(237, 236, 242, 1)',
    chatMessageRightBackground: '#006B90',
    chatMessageLeftText: '#4B4B67',
    chatMessageRighText: '#FFFFFF',
    chatMessageLeftDate: '#8D8C91',
    chatMessageRightDate: 'rgba(255, 255, 255, 0.5)',

    tagBackgroundPrimary: '#E6F1F4',
    tagColorPrimary: '#006B90',
    tagBackgroundInfo: '#FFF7F4',
    tagColorInfo: '#FCBC04',

    tableRowTitle: '#4B4B67',
    tableBorder: '#deeaef',
    tableRowContrastBackground: '#F3F9FB',
    tableRowBorder: '#E0E8EB',

    requestCardTitle: '#4B4B67',
    requestInnerLine: '#E5F1F5',

    scrollBackground: '#E6F1F4',
    scrollIndicator: '#51A2BE',
  },
  spacing: {
    '-xs': -4,
    '-s': -8,
    '-xm': -11,
    '-m': -15,
    '-l': -25,
    '-xl': -40,

    xs: 4,
    s: 8,
    xm: 11,
    m: 15,
    l: 25,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    headerTitle: {
      fontFamily: 'Raleway-Medium',
      fontSize: 16,
      lineHeight: 19,
      color: 'marengo',
    },
    sectionTitle: {
      fontFamily: 'Raleway-Medium',
      fontSize: 18,
      lineHeight: 21,
      color: 'marengo',
    },
    sectionSubtitle: {
      fontFamily: 'Raleway-Medium',
      fontSize: 12,
      lineHeight: 14,
      color: 'grey',
    },
    inputLabel: {
      fontFamily: 'Raleway-Regular',
      fontSize: 12,
      lineHeight: 14,
      color: 'inputLabel',
    },
    light: {
      fontFamily: 'Raleway-Light',
      fontSize: 14,
      lineHeight: 16,
      color: 'dark',
    },
    regular: {
      fontFamily: 'Raleway-Regular',
      fontSize: 14,
      lineHeight: 16,
      letterSpacing: 0.4,
      color: 'marengo',
    },
    medium: {
      fontFamily: 'Raleway-Medium',
      fontSize: 14,
      lineHeight: 16,
      color: 'dark',
    },
    bold: {
      fontFamily: 'Raleway-Bold',
      fontSize: 14,
      lineHeight: 16,
      color: 'dark',
    },
    semiBold: {
      fontFamily: 'Raleway-SemiBold',
      fontSize: 14,
      lineHeight: 16,
      color: 'dark',
    },
    dropdownText: {
      fontFamily: 'Raleway-SemiBold',
      fontSize: 9,
      lineHeight: 10,
      color: 'dropdownText',
    },
  },
})

export const shadow: ShadowProps<Theme> = {
  shadowColor: 'grey',
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.25,
  shadowRadius: 10,
  elevation: 1,
}

type TouchableProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  TouchableOpacityProps & {
    children?: React.ReactNode
  }

export const TouchableBox = createBox<Theme, TouchableProps>(TouchableOpacity)

export type ColorValueType = keyof Theme['colors']

export const Box = createBox<Theme>()
export const Text = createText<Theme>()

export type Theme = typeof restyleTheme
export default restyleTheme
