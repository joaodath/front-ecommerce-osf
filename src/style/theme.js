import { createTheme } from '@material-ui/core/';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#120b08',
    },
    error: {
      main: '#e63946',
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#4caf50',
    },
    info: {
      main: '#2196f3',
    },
  },
  typography: {
    subtitle1: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 600,
    fontWeightBold: 900,
    fontSize: 14,
    h1: {
      fontFamily: 'Libre Caslon Text',
    },
    h2: {
      fontFamily: 'Libre Caslon Text',
    },
    fontFamily: 'Montserrat',
    h3: {
      fontFamily: 'Libre Caslon Text',
    },
    h4: {
      fontFamily: 'Libre Caslon Text',
    },
    h5: {
      fontFamily: 'Libre Caslon Text',
    },
    h6: {
      fontFamily: 'Libre Caslon Text',
    },
    body1: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: 600,
    },
    caption: {
      fontWeight: 500,
    },
    button: {
      fontSize: '0.8rem',
    },
  },
});