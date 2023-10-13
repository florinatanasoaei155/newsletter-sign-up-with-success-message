import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(4, 100%, 67%)', // Tomato
    },
    secondary: {
      dark: 'hsl(234, 29%, 20%)', // Dark Slate Grey
      main: 'hsl(235, 18%, 26%)', // Charcoal Grey
      light: 'hsl(231, 7%, 60%)', // Grey
      contrastText: 'hsl(0, 0%, 100%)', // White
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: ({ theme }) => ({
            fontSize: '2em',
            fontWeight: 700,
            [theme.breakpoints.up('md')]: {
              fontSize: '3em',
            },
          }),
        },
      ],
    },
    MuiTextField: {
      defaultProps: { InputLabelProps: { shrink: false } },
      styleOverrides: {
        root: {
          'label[data-shrink=false]+.MuiInputBase-formControl .MuiOutlinedInput-input::placeholder':
            {
              opacity: '0.42 !important',
            },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.primary,
          },
          '&.Mui-error': {
            color: theme.palette.error.main,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.error.main,
              borderWidth: '1px',
              backgroundColor: '#ef535059',
            },
          },
        }),
        notchedOutline: ({ theme }) => ({ borderRadius: theme.spacing(1) }),
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      variants: [
        {
          props: { size: 'large' },
          style: { paddingTop: '15px', paddingBottom: '15px' },
        },
      ],
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(1),
          textTransform: 'initial',
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '0.7em',
          color: theme.palette.secondary.main,
          transform: 'none',
          fontWeight: 700,
          paddingBottom: theme.spacing(1),
          position: 'static',
          '&.Mui-focused': {
            color: theme.palette.text.primary,
            borderWidth: '1px',
          },
          '&.Mui-error': { color: theme.palette.text.primary },
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
          position: 'absolute',
          top: 0,
          right: 0,
          marginTop: 0,
          letterSpacing: 'initial',
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;
