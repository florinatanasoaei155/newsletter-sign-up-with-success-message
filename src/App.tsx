import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import SubscriptionForm from './components/SubscriptionForm';
import SubscriptionSuccess from './components/SubscriptionSuccess';
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
      return <SubscriptionForm onSubmitSuccess={handleSubmitSuccess} />;
    }

    return <SubscriptionSuccess onDismiss={handleDismiss} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {renderContent()}
    </ThemeProvider>
  );
};

export default App;
