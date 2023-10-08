import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import NewsletterForm from './components/NewsletterForm';
import SuccessMessage from './components/SuccessMessage';
import theme from './theme';

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
      <Box>
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
      <Container>{renderContent()}</Container>
    </ThemeProvider>
  );
};

export default App;
