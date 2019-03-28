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

import { fetchTransactions } from "./state";
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
  state: State["pages"]["transactions"];
  fetchTransactions: () => void;
}

const Login: React.FunctionComponent<Props> = props => {
  const { classes, state, fetchTransactions } = props;

  useEffect(() => fetchTransactions(), []);

  console.log({ state: props.state });

  return <>Transaction</>;
};

const mapStateToProps = (state: State) => ({ state: state.pages.transactions });

export default connect(
  mapStateToProps,
  { fetchTransactions }
)(withRoot(withStyles(styles)(Login)));
