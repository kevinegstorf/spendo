import * as React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import {
  withStyles,
  WithStyles,
  Theme,
  StyleRulesCallback
} from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles: any = (theme: Theme) => ({
  button: {
    height: ' 40px',
    width: '245px',
    textTransform: 'none',
    fontWeight: 'bold',
    borderRadius: '4px',
    background: 'linear-gradient(135deg, #7755FE 0%, #E994F7 100%)',
    color: '#fff',
    fontSize: '14px'
  },
  default: {
    color: '#fff'
    // backgroundColor: theme.palette.secondary.dark
  }
});

interface AppButtonProps extends ButtonProps {
  component?: React.ReactType<ButtonProps> | React.ComponentType;
  to?: string;
}

interface Props extends WithStyles<typeof styles> {
  component?: React.ComponentType;
  children?: string;
  path: string;
  onClick?: any;
  fullWidth?: boolean;
  buttonType: string;
  to: string;
  type: string;
}

const MyAppButton = (props: AppButtonProps) => <Button {...props} />;

const AppButton: React.FunctionComponent<Props> = props => {
  return (
    <>
      <MyAppButton
        className={props.classes.button}
        variant="contained"
        fullWidth={props.fullWidth}
        component={props.component}
        to={props.path}
        onClick={props.onClick}
        type={props.type}
      >
        {props.children}
      </MyAppButton>
    </>
  );
};

export default withRoot(withStyles(styles)(AppButton));
