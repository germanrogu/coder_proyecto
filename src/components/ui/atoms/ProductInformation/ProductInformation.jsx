import { Button, Divider, Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
      padding: theme.spacing(1),
      borderRadius: "10px",
    },
  },
}))(Button);

export const ProductInformation = ({
  product: { price, category, description, titleItem },
}) => {
  return (
    <Grid container direction="column" sx={{ heigth: "100%" }}>
      <Typography variant="subtitle1">{category}</Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="h4">{titleItem}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
        <Typography variant="h5">{"$ " + price}</Typography>
      </Box>
      <ButtonCustom
        variant="contained"
        color="primary"
        sx={{ marginTop: "auto" }}
      >
        Comprar
      </ButtonCustom>
    </Grid>
  );
};
