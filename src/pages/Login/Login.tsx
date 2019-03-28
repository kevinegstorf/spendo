import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import {
  Typography,
  FormControl,
  Grid,
  TextField,
  Button,
  Link,
} from '@material-ui/core/';
import {
  withStyles,
  WithStyles,
  StyleRulesCallback,
  Theme,
} from '@material-ui/core/styles';

import { fireApp, provider } from '../../index';
import withRoot from '../../withRoot';

import spendrLogo from '../../logo.svg';
import { useState, useEffect, useReducer } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Dispatch } from 'redux';
import { updateUser } from './state';

import history from '../../routes/history'

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    backgroundColor: theme.palette.grey['50'],
    height: '100vh',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 1,
  },
  forget: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing.unit,
  },
  a: {
    textDecoration: 'none',
  },
});

interface Props extends WithStyles<typeof styles> {
  state: State['auth'];
  updateUser: (payload: any) => void
}

const Login: React.FunctionComponent<Props> = (props) => {
  const { classes, state, updateUser } = props;
  console.log(props.state)
  const initialStateLogin = {
    email: '',
    password: '',
  };

  const [loginState, setLoginstate] = useState(initialStateLogin);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = loginState;
    fireApp.auth().signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
      fireApp.auth().onAuthStateChanged((change) => {
        updateUser(change)
        if(change){
          history.push('/menu');
        }
      })
  },[]);

  const loginWithGoogle = () => {
    fireApp.auth().signInWithRedirect(provider);
  };

  const handleChange = (name: any) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginstate({ ...loginState, [name]: event.target.value } as any);
  };

  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Grid className={classes.center} item xs={12}>
        <img src={spendrLogo} />
      </Grid>
      <Grid className={classes.form} item xs={10}>
        <form className={classes.loginForm}>
          <TextField
            id="email"
            autoComplete="email"
            className={classes.textField}
            label="Email"
            type="email"
            margin="dense"
            placeholder="email@example.com"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange('email')}
          />

          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange('password')}
          />

          <Button
            type="submit"
            className={classes.button}
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Inloggen
          </Button>
          <Typography
            className={[classes.forget, classes.a].join(' ')}
            variant="caption"
          >
            <RouteLink className={classes.a} to="ForgotPassword">
              Wachtwoord vergeten?
            </RouteLink>
          </Typography>
        </form>

        <Grid container>
          <Grid item xs={12} className={classes.center}>
            <Typography variant="button" gutterBottom>
              of
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              fullWidth
              variant="contained"
              color="primary"
              onClick={loginWithGoogle}
            >
              Inloggen met Google
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} className={classes.center}>
        <Typography variant="caption">
          Heb je nog geen Account? <strong>Sign Up</strong>
          {state.user && state.user.displayname}
        </Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: State) => ({ state: state.auth });

export default connect(
  mapStateToProps,
  {updateUser}
)(withRoot(withStyles(styles)(Login)));
