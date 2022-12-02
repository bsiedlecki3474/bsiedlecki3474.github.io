import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const ThemeWrapper = props => {
  const userTheme = props.theme ?? browserTheme;
  const theme = responsiveFontSizes(createTheme({
    palette: {
      mode: userTheme,
    },
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: red[500],
            fontWeight: 600
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: 'unset'
          }
        }
      }
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
  
  
}

export default ThemeWrapper;
