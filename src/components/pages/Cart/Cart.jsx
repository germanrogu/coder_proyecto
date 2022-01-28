import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { CartItem } from "../../ui/atoms/CartItem/CartItem";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@mui/styles";
import { ContentPages } from "../../ui/atoms/ContentPages/ContentPages";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "85%",
    paddingBottom: theme.spacing(8),

    "@media (min-width:1280px)": { maxWidth: "85%" },
    "@media (min-width:1440px)": { maxWidth: "75%" },
    "@media (min-width:1670px)": { maxWidth: "65%" },
  },
}));

const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      // color: "#3483fa",
      fontSize: "1rem",
      fontWeight: "600",
      padding: theme.spacing(1),
      borderRadius: "8px",
      // backgroundColor: "#4189e626",
      margin: theme.spacing(2),
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#4189e659",
    },
  },
}))(Button);

export const Cart = () => {
  const classes = useStyles();

  const { cartArray, deleteItem, totalPrice, clearCart } =
    useContext(CartContext);

  return (
    <ContentPages>
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.8rem",
          fontWeight: "600",
          color: "#722f37",
          paddingTop: "1.3rem",
          paddingBottom: "1.5rem",
          fontFamily: "Marck Script",
        }}
      >
        {" Shopping cart "}
      </Typography>

      {cartArray.length !== 0 ? (
        <>
          <Grid
            container
            spacing={1}
            sx={{ display: "flex", justifyContent: "center", margin: "auto" }}
            className={classes.container}
          >
            {cartArray.map((item) => (
              <Grid item xs={12} md={12} key={item.product.id}>
                <CartItem product={item} deleteItem={deleteItem} />
                <Divider />
              </Grid>
            ))}
            <Grid item xs={12} md={6}>
              <Typography variant="h5">{`Total : $ ${totalPrice()}`}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                to={`/`}
                style={{
                  display: "flex",
                  textDecoration: "none",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ButtonCustom variant="contained" color="secondary">
                  Keep shopping
                </ButtonCustom>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                to={`/purchase`}
                style={{
                  display: "flex",
                  textDecoration: "none",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ButtonCustom variant="contained" color="success">
                  Place an order
                </ButtonCustom>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ButtonCustom
                variant="contained"
                onClick={() => clearCart()}
                color="error"
              >
                Empty cart
              </ButtonCustom>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            No items in the cart
          </Typography>
          <Link
            to={`/`}
            style={{
              display: "flex",
              textDecoration: "none",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ButtonCustom variant="contained" color="primary">
              Go to Home
            </ButtonCustom>
          </Link>
        </>
      )}
    </ContentPages>
  );
};
