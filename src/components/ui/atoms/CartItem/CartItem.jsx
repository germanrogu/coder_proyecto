import React from "react";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";

const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "white",
      fontSize: "1rem",
      fontWeight: "500",
      padding: theme.spacing(1),
      borderRadius: "10px",
      backgroundColor: "red",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "red",
    },
  },
}))(Button);

export const CartItem = ({
  product: {
    product: { id, title, image, category, price },
    quantity,
  },
  deleteItem,
}) => {
  return (
    <Grid container spacing={3} sx={{ borderBottom: "1px solid #48484826" }}>
      <Grid item xs={1} md={1}>
        <img height={75} src={image} alt={title} />
      </Grid>
      <Grid item xs={3} md={3}>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item xs={3} md={1}>
        <Typography variant="subtitle1">{"$" + price}</Typography>
      </Grid>
      <Grid item xs={3} md={1}>
        <Typography variant="subtitle1">{quantity}</Typography>
      </Grid>
      <Grid item xs={3} md={3}>
        <ButtonCustom onClick={() => deleteItem(id)}>Delete</ButtonCustom>
      </Grid>
    </Grid>
  );
};
