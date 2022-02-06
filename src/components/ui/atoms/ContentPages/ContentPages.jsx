import { CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "90vh",

    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

    "@media (min-width:1280px)": {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    "@media (min-width:1440px)": {
      paddingLeft: theme.spacing(7),
      paddingRight: theme.spacing(7),
    },
    "@media (min-width:1670px)": {
      paddingLeft: theme.spacing(9),
      paddingRight: theme.spacing(9),
    },
  },
}));

export const ContentPages = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main className={classes.container}>{children}</main>
    </>
  );
};
