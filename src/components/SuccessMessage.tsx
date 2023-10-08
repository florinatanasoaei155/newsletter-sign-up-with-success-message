import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Typography, Container, Button } from '@mui/material';

interface SuccessMessageProps {
  onDismiss: () => void;
}

const SuccessMessage = ({ onDismiss }: SuccessMessageProps) => (
  <Container>
    <Box
      component='section'
      pt={16}
      pb={4}
      sx={{ height: '100vh' }}
      display='flex'
      flexDirection='column'
    >
      <Box flex={1}>
        <Box sx={{ fontSize: '64px' }}>
          <CheckCircleIcon color='primary' fontSize='inherit' />
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

export default SuccessMessage;
