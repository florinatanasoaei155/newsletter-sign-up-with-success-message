import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from '@mui/material';

import DesktopIlustration from './assets/images/illustration-sign-up-mobile.svg';
import NewsletterForm from './components/NewsletterForm';
import SuccessMessage from './components/SuccessMessage';

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
      <CssBaseline />
      <img src={DesktopIlustration} alt='Illustration' width='100%' />
      <Container>
        <NewsletterForm />
        <SuccessMessage />
        <div className='attribution'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href='https://www.frontendmentor.io/profile/ericstradivarius'>
            Florin Atanasoaei
          </a>
          .
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
