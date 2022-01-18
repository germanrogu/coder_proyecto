import { Backdrop, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.text.terciary_white,
    backgroundColor: theme.palette.primary.main,
  },
}));

export const LoadingScreen = () => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress size={100} color="inherit" />
    </Backdrop>
  );
};
