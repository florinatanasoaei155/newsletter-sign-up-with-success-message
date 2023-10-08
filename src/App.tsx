import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import theme from './theme';
import DesktopIlustration from './assets/images/illustration-sign-up-mobile.svg';
import NewsletterForm from './components/NewsletterForm';
import SuccessMessage from './components/SuccessMessage';
import { useState } from 'react';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  const renderContent = () => {
    if (!isSubmitted) {
      return <NewsletterForm onSubmitSuccess={handleSubmitSuccess} />;
    }

    return (
      <Box display='none'>
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
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <img src={DesktopIlustration} alt='Illustration' width='100%' />
      <Container>{renderContent()}</Container>
    </ThemeProvider>
  );
};

export default App;
