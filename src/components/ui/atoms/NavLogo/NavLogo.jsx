
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  size: {
     maxWidth: 60,
  },
}));

export const NavLogo = ({logo}) => {
const classes = useStyles();
  return (
    <>
      <img className={classes.size} alt="logo" src={logo} />
    </>
  );
};
