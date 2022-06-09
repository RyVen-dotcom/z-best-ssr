import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    border: Palette['primary'];
  }

  interface PaletteOptions {
    border: PaletteOptions['primary'];
  }

  interface Palette {
    bgcolor: Palette['primary'];
  }

  interface PaletteOptions {
    bgcolor: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    border: {
      main: '#999999', // 主要的
      dark: '#D9D9D9', // 次要的
      light: '#F0F0F0', // 最次要的
      contrastText: '#cccccc',
    },
    bgcolor: {
      main: '#CCCCCC',
      light: '#FAFAFA',
      dark: '#D9D9D9',
      contrastText: '#F0F0F0',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999',
      hint: '#cccccc',
    },
    primary: {
      main: '#BF2722',
      dark: '#9D1A16',
    },
    secondary: {
      light: '#333333',
      dark: '#000000',
      main: '#BF2722',
    },
    error: {
      ...red,
      main: '#F5222D',
    },
    success: {
      main: '#52C41A',
    },
    warning: {
      main: '#FF7800',
    },
    info: {
      main: '#1B7CD7',
    },
    common: {
      white: '#ffffff',
      black: '#000000',
    },
    background: {
      default: '#F6F6F6',
    },
    action: {
      hoverOpacity: 0.06, // hover 背景值
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: '\'Microsoft Yahei\', \'PingFangSC\', Arial, sans-serif;',
    fontSize: 14,
    body1: {
      fontSize: '18px',
    },
    body2: {
      fontSize: '16px',
    },
    caption: {
      fontSize: '12px',
    },
    overline: {
      fontSize: '12px',
    },
    subtitle2: {
      fontSize: '10px',
    },
  },

  // 修改全局样式
  // overrides: {
  //   MuiPickersToolbar: {
  //     toolbar: {
  //       backgroundColor: MySecondary.A200,
  //       height: 60,
  //     },
  //   },
  //   MuiTypography: {
  //     h4: {
  //       fontSize: 16,
  //     },
  //     body2: {
  //       fontSize: 14,
  //     },
  //   },
  //   MuiPickersCalendarHeader: {},
  //   MuiPickersDay: {
  //     day: {
  //       color: MyGrey.A700,
  //     },
  //     daySelected: {
  //       backgroundColor: MySecondary.main,
  //       color: MyGrey[50],
  //     },
  //     dayDisabled: {
  //       color: MySecondary[100],
  //     },
  //     current: {
  //       color: MySecondary.dark,
  //     },
  //   },
  //   MuiPickersModal: {
  //     dialogAction: {
  //       color: MySecondary[400],
  //     },
  //   },
  //
  //   // 设置全局的input样式
  //   MuiInput: {
  //     root: {
  //       fontSize: 14,
  //     },
  //     input: {
  //       fontSize: 14,
  //     },
  //   },
  //
  //   MuiFormControlLabel: {},
  //   MuiTypography: {
  //     body1: {
  //       fontSize: 14,
  //     },
  //   },
  //   MuiFormLabel: {
  //     root: {
  //       fontSize: 14,
  //     },
  //   },
  //   MuiMenuItem: {
  //     root: {
  //       fontSize: 14,
  //     },
  //   },
  //   MuiFormGroup: {
  //     root: {
  //       flexDirection: 'row',
  //     },
  //   },
  //   // 移步全局button组件阴影
  //   MuiButton: {
  //     root: {
  //       borderRadius: 0,
  //     },
  //     contained: {
  //       boxShadow: 'none',
  //       '&:hover': {
  //         boxShadow: 'none',
  //       },
  //       '&:active': {
  //         boxShadow: 'none',
  //       },
  //     },
  //   },
  // },

  // props: {
  //   MuiButtonBase: {
  //     disableRipple: true,
  //   },
  // },
});

export default theme;
