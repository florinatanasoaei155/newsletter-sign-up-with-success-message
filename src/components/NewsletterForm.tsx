import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
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

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  return (
    <>
      <Box component='section'>
        <Typography
          variant='h1'
          sx={{ fontSize: '2em', fontWeight: '700' }}
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
      <Box component='section'>
        <Box component='form'>
          <TextField
            label='Email address'
            name='email'
            placeholder='email@company.com'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            InputLabelProps={{ shrink: false, sx: { position: 'static' } }}
          />
          <Button type='submit'>Subscribe to monthly newsletter</Button>
        </Box>
      </Box>
    </>
  );
};

export default NewsletterForm;
