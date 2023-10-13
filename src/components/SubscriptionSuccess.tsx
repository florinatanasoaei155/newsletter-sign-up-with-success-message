import { Box, Typography, Container, Button } from '@mui/material';
import SuccessIcon from './SuccessIcon';

interface SubscriptionSuccessProps {
  onDismiss: () => void;
}

const SubscriptionSuccess = ({ onDismiss }: SubscriptionSuccessProps) => (
  <Container>
    <Box
      component='section'
      pt={14}
      pb={4}
      sx={{ height: '100vh' }}
      display='flex'
      flexDirection='column'
    >
      <Box flex={1}>
        <Box pb={4}>
          <SuccessIcon sx={{ fontSize: '64px' }} />
        </Box>
        <Typography variant='h1' pb={2} maxWidth='60%'>
          Thanks for subscribing!
        </Typography>
        <Typography component='p'>
          A confirmation email has been sent to{' '}
          <Typography fontWeight={700} component='span'>
            ash@loremcompany.com
          </Typography>
          . Please open it and click the button inside to confirm your
          subscription.
        </Typography>
      </Box>
      <Button
        variant='contained'
        color='secondary'
        size='large'
        fullWidth
        sx={{ alignSelf: 'flex-end' }}
        onClick={onDismiss}
      >
        Dismiss message
      </Button>
    </Box>
  </Container>
);

export default SubscriptionSuccess;
