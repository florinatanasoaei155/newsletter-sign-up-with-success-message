import { Box, Typography, Paper, Button } from '@mui/material';
import SuccessIcon from './SuccessIcon';

interface SubscriptionSuccessProps {
  onDismiss: () => void;
}

const SubscriptionSuccess = ({ onDismiss }: SubscriptionSuccessProps) => (
  <Box
    sx={(theme) => ({
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'secondary.main',
        height: '100%',
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(20),
      },
    })}
  >
    <Paper
      sx={(theme) => ({
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          padding: theme.spacing(4),
          borderRadius: theme.spacing(5),
          maxWidth: '400px',
        },
      })}
    >
      <Box
        component='section'
        pt={{ xs: 14, md: 4 }}
        pb={4}
        px={4}
        sx={(theme) => ({
          height: '100vh',
          [theme.breakpoints.up('md')]: {
            height: 'auto',
            paddingTop: theme.spacing(4),
          },
        })}
        display='flex'
        flexDirection='column'
      >
        <Box flex={1} mb={{ md: 4 }}>
          <Box pb={4}>
            <SuccessIcon sx={{ fontSize: '64px' }} />
          </Box>
          <Typography variant='h1' pb={2} maxWidth={{ xs: '60%', md: '100%' }}>
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
    </Paper>
  </Box>
);

export default SubscriptionSuccess;
