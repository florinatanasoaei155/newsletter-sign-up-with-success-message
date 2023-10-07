import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(4, 100%, 67%)', // Tomato
    },
    secondary: {
      main: 'hsl(234, 29%, 20%)', // Dark Slate Grey
      dark: 'hsl(235, 18%, 26%)', // Charcoal Grey
      light: 'hsl(231, 7%, 60%)', // Grey
      contrastText: 'hsl(0, 0%, 100%)', // White
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Test</h1>
      <Button variant='contained'>Test</Button>
    </ThemeProvider>
  );
};

export default App;
