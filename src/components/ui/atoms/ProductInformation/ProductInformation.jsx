import { Button, Divider, Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { ItemCount } from "../../molecules/ItemCount/ItemCount";

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
  product: { price, category, description, title, stockNumber=10, onAdd },
}) => {
  return (
    <Grid container direction="column" sx={{ heigth: "100%" }}>
      <Typography variant="subtitle1">{category}</Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
        <Typography variant="h5">{"$ " + price}</Typography>
      </Box>
      <Grid item sm={6}>
        <ItemCount stock={stockNumber} initial={1} onAdd={onAdd} />
      </Grid>
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
