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
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: false },
      },
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
        notchedOutline: ({ theme }) => ({
          borderRadius: theme.spacing(1),
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
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
  },
});

export default theme;
