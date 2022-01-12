import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    height: "5rem",
    backgroundColor: "black",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: "flex",
    justifyContent:"center"
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root} elevation={1}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="body1" color="inherit">
          Copyright © 2021 eCommerce
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
