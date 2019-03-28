import * as React from "react";
import Paper, { PaperProps } from "@material-ui/core/Paper";
import { Typography} from "@material-ui/core";

import { withStyles, WithStyles, Theme, StyleRulesCallback } from "@material-ui/core/styles";
import withRoot from "../withRoot";

const styles: any = (theme: Theme) => ({
    styledPaper: {
      padding: "1rem",
      height: "8rem",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  },
});

interface PaperButtonProps extends PaperProps {
}

interface Props extends WithStyles<typeof styles> {
  icon?: string;
  label?: string;
}

const MenuButton = (props: PaperButtonProps) => <Paper {...props} />;

const AppButton: React.FunctionComponent<Props> = props => {
    return (
        <>
            <MenuButton className={props.classes.styledPaper}>
                <div className="iconWrapper">
                    <img src={props.icon} />
                </div>
                <Typography align="center" variant="h5" component="h3">
                    {props.label}
                </Typography>
            </MenuButton>
        </>
    );
};

export default withRoot(withStyles(styles)(AppButton));
