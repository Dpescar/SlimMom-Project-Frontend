import { createTheme } from '@mui/material/styles';

const customTheme = mode => {
  return createTheme({
    palette: {
      mode,
      //light mode is default
      ...(mode === 'light'
        ? {
            primary: {
              default: '#9B9FAA',
              main: '#fc842d',
              contrastText: '#9B9FAA',
            },
            background: {
              default: '#ffffff',
              paper: '#e0e0e0',
              secondary: '#9B9FAA',
            },
            action: {
              disabled: '#9B9FAA',
            },
          }
        : {
            primary: {
              main: '#fc842d',
              contrastText: '#e0e0e0',
              primary: '#e0e0e0',
            },
            background: {
              default: '#271a3fe3',
              paper: '#2a1d45bb',
            },
            action: {
              disabled: '#9B9FAA',
            },
          }),
    },
    typography: {
      fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          style: {
            cursor: 'pointer',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'unset',
          },
        },
      },
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#2a1d45' : '#ffffff',
            color: mode === 'dark' ? '#ffffff' : '#000000',
            boxShadow:
              '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
          },
        },
      },
    },
  });
};

export default customTheme;
