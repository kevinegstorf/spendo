import * as React from 'react';
import { Typography, FormControl } from '@material-ui/core/';
import {
  withStyles,
  WithStyles,
  StyleRulesCallback,
  Theme
} from '@material-ui/core/styles';
import withRoot from '../../withRoot';

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    paddingTop: theme.spacing.unit * 10,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    backgroundColor: theme.palette.grey['50']
  }
});

interface Props extends WithStyles<typeof styles> {}

const Login: React.FunctionComponent<Props> = props => {
  const { classes } = props;

  return <>Cards</>;
};

export default withRoot(withStyles(styles)(Login));
