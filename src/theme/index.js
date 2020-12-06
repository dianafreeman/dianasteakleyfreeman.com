import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// Colors from
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
  typography: {
    htmlFontSize: 15,
    h2: {
      fontWeight: 700,
    },
    h1: {
      fontWeight: 700,
      fontFamily: `Roboto, sans-serif`,
    },
    subtitle1: {
      textTransform: 'uppercase',
      fontWeight: 100,
      fontFamily: `Roboto Condensed, sans-serif`,
    },
  },
});

export default responsiveFontSizes(theme);
