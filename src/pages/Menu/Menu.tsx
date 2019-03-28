import * as React from "react";
import { Grid, Avatar } from "@material-ui/core/";
import { withStyles, WithStyles, StyleRulesCallback, Theme } from "@material-ui/core/styles";
import withRoot from "../../withRoot";
import { menuItems } from "./Menu.mock";
import MenuButton from "../../components/MenuButton";
import Placeholder from "../../assets/avatar.png";
const styles: StyleRulesCallback = (theme: Theme) => ({
    root: {
        paddingTop: theme.spacing.unit * 10,
        paddingLeft: theme.spacing.unit * 5,
        paddingRight: theme.spacing.unit * 5,
        backgroundColor: theme.palette.grey["50"]
    },
    styledPaper: {
        padding: "1rem",
        height: "8rem",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    progressContainer: {
        margin: "0 12px",
        borderRadius: "1rem",
        backgroundColor: "#eee",
        width: "100%",
        height: "1rem"
    },
    progress: {
        background: "linear-gradient(25.75deg, #7755FE 0%, #E994F7 100%)",
        borderRadius: "1rem",
        backgroundColor: "purple",
        width: "33%",
        height: "1rem"
    },
    iconWrapper: {
        width: "100%"
    },
    styledAvatar: {
        textAlign: "center",
        margin: "1rem",
        width: "8rem",
        height: "8rem"
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
});

interface Props extends WithStyles<typeof styles> {}

const Login: React.FunctionComponent<Props> = props => {
    const { classes } = props;

    return (
        <>
            <Grid container spacing={24} className={classes.root}>
                <Grid className={classes.header} alignContent="center" alignItems="center" xs={12}>
                    <Avatar sizes="lg" alt="Zakka" src={Placeholder} className={classes.styledAvatar} />
                    <h1>Kitty</h1>
                </Grid>
                <div className={classes.progressContainer}>
                    <div className={classes.progress} />
                </div>

                {menuItems.map((item, i) => (
                    <Grid item xs={6} key={i}>
                        <MenuButton label={item.label} icon={item.icon} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default withRoot(withStyles(styles)(Login));
