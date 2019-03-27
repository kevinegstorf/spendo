import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors/';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "'Open Sans'"
  },
  palette: {
    primary: {
      light: '#E7EDF3',
      main: '#7755FE',
      dark: '#7755FE'
    },
    secondary: {
      light: '#B9C4CF',
      main: '#7755FE',
      dark: '#7755FE'
    },
    background: {
      default: '#fff'
    },
    error: {
      main: '#fff'
    },
    grey: {
      50: '#f5f5f5'
    }
  }
});
// @ts-ignore
function withRoot(Component) {
  // @ts-ignore
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
