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
  Container,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import DesktopIlustration from '../assets/images/illustration-sign-up-mobile.svg';
import IconList from './IconList';

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
    .email({ message: 'Must be a valid email' }),
});

interface NewsletterFormInput {
  email: string;
}

interface NewsletterFormProps {
  onSubmitSuccess: () => void;
}

const NewsletterForm = ({ onSubmitSuccess }: NewsletterFormProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: '' },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: NewsletterFormInput) => {
    console.log(data);
    onSubmitSuccess();
  };

  return (
    <>
      <img src={DesktopIlustration} alt='Illustration' width='100%' />
      <Container>
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
                  <IconList />
                </ListItemIcon>
                <ListItemText>{label}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box component='section' mb={4}>
          <Stack component='form' gap={2} onSubmit={handleSubmit(onSubmit)}>
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
                    disabled={!!error}
                  >
                    Subscribe to monthly newsletter
                  </Button>
                </>
              )}
            />
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default NewsletterForm;
