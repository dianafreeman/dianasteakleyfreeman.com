import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// Colors from
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
});

export default responsiveFontSizes(theme);
