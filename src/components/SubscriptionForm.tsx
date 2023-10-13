import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  Theme,
  Paper,
  Grid,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import MobileImage from '../assets/images/illustration-sign-up-mobile.svg';
import DesktopImage from '../assets/images/illustration-sign-up-desktop.svg';
import ListIcon from './ListIcon';

const benefitsList = [
  {
    id: 0,
    label: 'Product discovery and building what matters',
  },
  {
    id: 1,
    label: 'Measuring to ensure updates are a success',
  },
  {
    id: 2,
    label: 'And much more!',
  },
];

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Required' })
    .email({ message: 'Valid email required' }),
});

interface SubscriptionFormInput {
  email: string;
}

interface SubscriptionFormProps {
  onSubmitSuccess: () => void;
}

const SubscriptionForm = ({ onSubmitSuccess }: SubscriptionFormProps) => {
  const matchMD = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const { control, handleSubmit } = useForm({
    defaultValues: { email: '' },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SubscriptionFormInput) => {
    console.log(data);
    onSubmitSuccess();
  };

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'secondary.main',
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
            flexDirection: 'row-reverse',
          },
        })}
      >
        <Grid container flexDirection={{ md: 'row-reverse' }}>
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src={matchMD ? DesktopImage : MobileImage}
              alt='Illustration'
              width='100%'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              px={4}
              sx={(theme) => ({
                [theme.breakpoints.up('md')]: {
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                },
              })}
            >
              <Box component='section'>
                <Typography variant='h1' pt={3} pb={2}>
                  Stay updated!
                </Typography>
                <Typography component='p'>
                  Join 60,000+ product managers receiving monthly updates on:
                </Typography>
                <List sx={{ py: 2 }}>
                  {benefitsList.map(({ id, label }) => (
                    <ListItem key={id} alignItems='flex-start' disableGutters>
                      <ListItemIcon
                        sx={(theme) => ({
                          minWidth: theme.spacing(4),
                          marginTop: theme.spacing(0.5),
                        })}
                      >
                        <ListIcon />
                      </ListItemIcon>
                      <ListItemText>{label}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box component='section' mb={4}>
                <Stack
                  component='form'
                  gap={2}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Controller
                    control={control}
                    name='email'
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <TextField
                          {...field}
                          aria-label='Email address'
                          fullWidth
                          label='Email address'
                          name='email'
                          placeholder='email@company.com'
                          error={!!error}
                          helperText={error?.message}
                        />
                        <Button
                          type='submit'
                          color='secondary'
                          variant='contained'
                          size='large'
                          fullWidth
                        >
                          Subscribe to monthly newsletter
                        </Button>
                      </>
                    )}
                  />
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SubscriptionForm;
