import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
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

  const handleDismiss = () => {
    setIsSubmitted(false);
  };

  const renderContent = () => {
    if (!isSubmitted) {
      return <NewsletterForm onSubmitSuccess={handleSubmitSuccess} />;
    }

    return <SuccessMessage onDismiss={handleDismiss} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {renderContent()}
    </ThemeProvider>
  );
};

export default App;
