import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      direction: "row",
    },
    [theme.breakpoints.up("md")]: {
      direction: "column",
    },
  },
}));

export const ImageGrid = ({ images = [], onSelect, selectedImage }) => {
  const classes = useStyles();
  return (
    // <Grid container className={classes.root}>
    //   {images.map((image, index) => (
    //     <img
    //       key={index}
    //       onClick={() => onSelect(index)}
    //       src={image}
    //       height={75}
    //       alt="images"
    //       style={{
    //         border:
    //           index === selectedImage
    //             ? "0.5px solid #4169E1"
    //             : "0.5px solid #eee",
    //         borderRadius: "10px",
    //         cursor: "pointer",
    //       }}
    //     />
    //   ))}
    // </Grid>

    <Grid container className={classes.root}>
      <img
        src={images}
        height={75}
        alt="images"
        style={{
          border: "0.5px solid #4169E1",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      />
    </Grid>
  );
};
