import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import 'fontsource-roboto/100.css'; // Weight 200 with all styles included.
import 'fontsource-roboto/300.css'; // Weight 300 with all styles included.
import 'fontsource-roboto/400.css'; // Weight 400 with all styles included.
import 'fontsource-roboto/500.css'; // Weight 500 with all styles included.
import 'fontsource-roboto/700.css'; // Weight 700 with all styles included.
import 'fontsource-roboto/900.css'; // Weight 900 with all styles included.

import 'fontsource-roboto-condensed/300.css'; // Weight 300 with all styles included.
import 'fontsource-roboto-condensed/400.css'; // Weight 400 with all styles included.
import 'fontsource-roboto-condensed/700.css'; // Weight 700 with all styles included.

/*
 *  Default Material Theme: https://material-ui.com/customization/default-theme/
 */
const { typography, spacing } = createMuiTheme();

const size = {
  XXL: '3.5rem',
  XL: '3rem',
  LG: '2.5rem',
  MD: '2rem',
  SM: '1.5rem',
};

const roboto = {
  regular: `'Roboto', sans-serif`,
  condensed: `'Roboto Condensed', sans-serif`,
};

const theme = createMuiTheme({
  overrides: {
    MuiDivider: {
      light: {
        marginTop: spacing(1),
        marginBottom: spacing(1),
      },
    },
    MuiTouchRipple: {
      root: {
        color: blue[200],
      },
    },
    MuiButtonBase: {
      root: {
        background: 'red',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: typography.fontWeightBold,
      },
    },
  },
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: blue[50],
    },
    text: {
      secondary: grey[800],
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
    },
  },
  typography: {
    fontFamily: roboto.regular,
    h1: {
      fontWeight: typography.fontWeightBoldest,
      fontSize: size.XL,
      lineHeight: size.XXL,
    },
    h2: {
      fontWeight: typography.fontWeightBoldest,
      fontSize: size.LG,
      lineHeight: size.XL,
    },
    h3: {
      fontFamily: roboto.condensed,
      fontWeight: typography.fontWeightBoldest,
      fontSize: size.MD,
      lineHeight: size.XL,
    },
    h4: {
      fontFamily: roboto.condensed,
      fontWeight: typography.fontWeightBold,
      fontSize: size.SM,
      lineHeight: size.XL,
    },
    subtitle1: {
      fontFamily: roboto.condensed,
      fontWeight: typography.fontWeightLight,
      fontSize: size.MD,
      lineHeight: size.XL,
      color: grey[800],
    },
  },
  props: {
    MuiDivider: {
      light: true,
    },
  },
});

export default theme;
// export default responsiveFontSizes(theme);
