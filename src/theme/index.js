import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
// import '@fontsource/teko';
// import '@fontsource/caveat';
/*
 *  Default Material Theme: https://material-ui.com/customization/default-theme/
 */
const { typography, spacing, palette } = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#020202',
    },
  },
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

  props: {
    MuiDivider: {
      light: true,
    },
  },
});

// export default theme;
export default responsiveFontSizes(theme);
