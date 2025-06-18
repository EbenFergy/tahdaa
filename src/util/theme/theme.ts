// src/theme.ts (optional but recommended)
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#003CC5',
    },
    secondary: {
      main: '#29BFF4',
    },
  },
  typography: {
    fontFamily: 'Urbanist, Roboto, Arial, sans-serif',
  },
});

export default theme;
