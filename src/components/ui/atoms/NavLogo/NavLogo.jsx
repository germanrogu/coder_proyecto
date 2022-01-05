import React from "react";
import { makeStyles } from "@mui/styles";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  size: {
    maxWidth: 60,
  },
}));

export const NavLogo = ({ logo }) => {
  const classes = useStyles();
  return (
    <Link to={"/"} style={{ display: "flex" }}>
      <img className={classes.size} alt="logo" src={logo} />
    </Link>
  );
};
