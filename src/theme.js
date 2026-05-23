import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00E5FF', // Cian eléctrico de la interfaz
    },
    secondary: {
      main: '#FF007F', // Magenta neón del eslogan
    },
    background: {
      default: '#02000A', // El negro espacial profundo del cartel
      paper: '#0B1120',   // Gris tecnológico para la tarjeta de registro
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#94A3B8',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 900 },
    h2: { fontWeight: 800 },
  },
});

export default theme;