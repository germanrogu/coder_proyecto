import { Button, Divider, Grid, Typography, alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../../molecules/ItemCount/ItemCount";

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
    },
    "&.MuiButton-root:hover": {
      backgroundColor: alpha("#722f37", 0.8),
      color: "white",
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
      <Box mt={3}>
        <Typography
          style={{ color: "#722f37",paddingBottom: "1.5rem" }}
          variant="h4"
        >
          {title}
        </Typography>
        <Typography style={{ paddingBottom: "1.5rem" }} variant="subtitle1">
          {description}
        </Typography>
        <Typography
          style={{
            color: "#722f37",
            paddingBottom: "1.5rem",
            fontWeight: "600",
          }}
          variant="h5"
        >
          {"$ " + price}
        </Typography>
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
            <ButtonCustom>Go to cart</ButtonCustom>
          </Link>
        ) : (
          <ItemCount stock={stockNumber} initial={1} onAdd={onAdd} />
        )}
      </Grid>
    </Grid>
  );
};
