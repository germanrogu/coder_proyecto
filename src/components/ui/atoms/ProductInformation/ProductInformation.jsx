import { Button, Divider, Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
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
  product: { price, category, description, title, stockNumber = 10 },
  onAdd,
  added,
}) => {
  return (
    <Grid container direction="column">
      <Typography variant="subtitle1">{category}</Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
        <Typography variant="h5">{"$ " + price}</Typography>
      </Box>
      <Grid item sm={6}>
        {added ? (
          <Link
            to={`/cart`}
            style={{
              display: "flex",
              textDecoration: "none",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ButtonCustom variant="contained" color="primary">
              Ir a carrito
            </ButtonCustom>
          </Link>
        ) : (
          <ItemCount stock={stockNumber} initial={1} onAdd={onAdd} />
        )}
      </Grid>
    </Grid>
  );
};
