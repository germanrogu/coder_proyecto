import { alpha, Button, Grid, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles, withStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    height: "90vh",
  },
}));
const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "#722f37",
      fontSize: "1rem",
      fontWeight: "600",
      padding: theme.spacing(1),
      borderRadius: "8px",
      backgroundColor: alpha("#722f37", 0.2),
      margin: theme.spacing(2),
    },
    "&.MuiButton-root:hover": {
      backgroundColor: alpha("#722f37", 0.8),
      color: "white",
    },
  },
}))(Button);

export const NotFound = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={12} sm={12} style={{ marginTop: "3rem"}}>
        <Typography
          variant="h1"
          style={{ fontSize: "12rem", textAlign: "center", color: "black" }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          style={{ textAlign: "center", color: "black" }}
        >
          {" "}
          It looks like you are lost.
        </Typography>
      </Grid>

      <Grid item style={{ textAlign: "center" }} xs={12} sm={12}>
        <Link
          to={`/`}
          style={{
            display: "flex",
            textDecoration: "none",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ButtonCustom startIcon={<HomeIcon />}>
            Go to the homepage
          </ButtonCustom>
        </Link>
      </Grid>
    </Grid>
  );
};
