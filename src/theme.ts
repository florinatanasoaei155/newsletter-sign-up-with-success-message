import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(4, 100%, 67%)', // Tomato
    },
    secondary: {
      main: 'hsl(234, 29%, 20%)', // Dark Slate Grey
      dark: 'hsl(235, 18%, 26%)', // Charcoal Grey
      light: 'hsl(231, 7%, 60%)', // Grey
      contrastText: 'hsl(0, 0%, 100%)', // White
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: { fontSize: '2em', fontWeight: 700 },
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
        },
      },
    },
  },
});

export default theme;
