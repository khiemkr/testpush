// ** Type Imports
import { PaletteMode } from '@mui/material'
import { Skin, ThemeColor } from 'src/@core/layouts/types'

const DefaultPalette = (mode: PaletteMode, skin: Skin, themeColor: ThemeColor) => {
  // ** Vars
  const lightColor = '58, 53, 65'
  const darkColor = '231, 227, 252'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const primaryGradient = () => {
    if (themeColor === 'primary') {
      return '#C6A7FE'
    } else if (themeColor === 'secondary') {
      return '#9C9FA4'
    } else if (themeColor === 'success') {
      return '#93DD5C'
    } else if (themeColor === 'error') {
      return '#FF8C90'
    } else if (themeColor === 'warning') {
      return '#FFCF5C'
    } else {
      return '#6ACDFF'
    }
  }

  const defaultBgColor = () => {
    if (skin === 'bordered' && mode === 'light') {
      return '#FFF'
    } else if (skin === 'bordered' && mode === 'dark') {
      return '#312D4B'
    } else if (mode === 'light') {
      return '#F4F5FA'
    } else return '#28243D'
  }

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      darkBg: '#28243D',
      lightBg: '#F4F5FA',
      primaryGradient: primaryGradient(),
      bodyBg: mode === 'light' ? '#F4F5FA' : '#28243D', // Same as palette.background.default but doesn't consider bordered skin
      tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759'
    },
    common: {
      black: '#000',
      white: '#FFF',
    },
    mode: mode,
    primary: {
      light: '#9E69FD',
      main: '#66FF66',
      dark: '#804BDF',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#9C9FA4',
      main: '#8A8D93',
      dark: '#777B82',
      contrastText: '#FFF'
    },
    success: {
      light: '#6AD01F',
      main: '#56CA00',
      dark: '#4CB200',
      contrastText: '#FFF'
    },
    error: {
      light: '#FF6166',
      main: '#FF4C51',
      dark: '#E04347',
      contrastText: '#FFF'
    },
    warning: {
      light: '#FFCA64',
      main: '#FFB400',
      dark: '#E09E00',
      contrastText: '#FFF'
    },
    info: {
      light: '#32BAFF',
      main: '#16B1FF',
      dark: '#139CE0',
      contrastText: '#FFF'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#060911',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? '#FFF' : '#312D4B',
      default: defaultBgColor()
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.3)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`
    },
    custom: { 
      primary_1: '#00FFFF',  
      primary_2: '#00CACA',
      primary_3: '#0ABF37',
      primary_4: '#22903D',
      primary_5: '#096520',
      primary_6: '#014111', 
      primary_7: '#23262F',
      primary_8: '#0A8F8F',
      error: '#FA9494',
      warning: '#FFB780',
      success: '#66C56D',
      noti: '#62F0CC',
      secondary_1: '#4BC9F0', 
      secondary_2: '#E4D7CF', 
      secondary_3: '#FFD166',
      secondary_4: '#CDB4DB',
      secondary_5: '#FF6838',
      secondary_6: '#040d0e',
      neutral_1: '#141416',
      neutral_2: '#23262F',
      neutral_3: '#353945',
      neutral_4: '#777E91',
      neutral_5: '#B1B5C4',
      neutral_6: '#E6E8EC',
      neutral_7: '#FCFCFD',
      neutral_8: '#23262F',
      neutral_9: '#262338',
      neutral_10: '#14142b'
    }
  }
}

export default DefaultPalette
