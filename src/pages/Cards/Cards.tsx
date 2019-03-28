import * as React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Typography, FormControl } from "@material-ui/core/";
import {
  withStyles,
  WithStyles,
  StyleRulesCallback,
  Theme
} from "@material-ui/core/styles";

import { fetchCards } from "./state";
import withRoot from "../../withRoot";

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    paddingTop: theme.spacing.unit * 10,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    backgroundColor: theme.palette.grey["50"]
  }
});

interface Props extends WithStyles<typeof styles> {
  state: State["pages"]["cards"];
  fetchCards: () => void;
}

const Login: React.FunctionComponent<Props> = props => {
  const { classes, state, fetchCards } = props;

  useEffect(() => fetchCards(), []);

  console.log({ state: props.state });

  return <>Cards</>;
};

const mapStateToProps = (state: State) => ({ state: state.pages.cards });

export default connect(
  mapStateToProps,
  { fetchCards }
)(withRoot(withStyles(styles)(Login)));
