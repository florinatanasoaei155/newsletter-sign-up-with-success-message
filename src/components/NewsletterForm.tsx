import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  Stack,
} from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

const EMAIL_MESSAGE_REQUIRED = 'Email is required';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (email === '') {
      setIsError(true);
      return;
    }

    setIsError(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (event.target.value === '') {
      setIsError(true);
      return;
    }

    setIsError(false);
  };

  return (
    <>
      <Box component='section'>
        <Typography
          variant='h1'
          sx={{ fontSize: '3em', fontWeight: '700' }}
          pt={3}
          pb={2}
        >
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
                <CheckCircleIcon color='primary' />
              </ListItemIcon>
              <ListItemText>{label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box component='section' mb={4}>
        <Stack component='form' gap={2} onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label='Email address'
            name='email'
            placeholder='email@company.com'
            value={email}
            onChange={handleChange}
            error={isError}
            helperText={isError && EMAIL_MESSAGE_REQUIRED}
          />
          <Button
            type='submit'
            color='secondary'
            variant='contained'
            size='large'
            fullWidth
            disabled={isError}
          >
            Subscribe to monthly newsletter
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default NewsletterForm;
