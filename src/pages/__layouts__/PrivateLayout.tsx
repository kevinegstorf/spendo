import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import {
  withStyles,
  WithStyles,
  Theme,
  StyleRulesCallback
} from '@material-ui/core/styles';
import { withTheme, Typography } from '@material-ui/core';
import withRoot from '../../withRoot';

const styles: StyleRulesCallback = (theme: Theme) => ({});

interface Props extends WithStyles<typeof styles> {
  component: any;
  route: string;
  title: string | undefined;
}

const PrivateLayout: React.FunctionComponent<Props> = props => {
  const {component: Component} = props;
  return (
    <div className={props.classes.root}>
      <Component route={props.route} className={props.classes.component} />
    </div>
  );
};

const mapStateToProps = (state: State) => ({ state: state.auth });

export default withRoot(withStyles(styles)(PrivateLayout));
