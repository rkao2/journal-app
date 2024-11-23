import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a90e2', // Custom primary color
    },
    secondary: {
      main: '#81b5b0', // Custom secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Customize font
  },
});

export default theme;
