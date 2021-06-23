import { makeStyles } from "@material-ui/core/styles";

function navStyles() {
  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      textAlign: "left",
      marginLeft: "40%",
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },

    inputRoot: {
      color: "inherit",
    },
  }));
  return useStyles;
}

export default navStyles;
