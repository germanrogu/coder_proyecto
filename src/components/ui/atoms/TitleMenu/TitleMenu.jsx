import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const styles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
  },
}));

export const TitleMenu = ({ children, variant }) => {
  const classes = styles();

  return (
    <Typography variant={variant} className={classes.title}>
      {children.charAt(0).toUpperCase() + children.slice(1)}
    </Typography>
  );
};
