import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button, Grid, Typography } from "@mui/material";
import { CartItem } from "../../ui/atoms/CartItem/CartItem";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";

const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "white",
      fontSize: "1rem",
      fontWeight: "500",
      padding: theme.spacing(1),
      borderRadius: "10px",
    },
  },
}))(Button);

export const Cart = () => {
  const { cartArray, deleteItem, totalPrice, clearCart } =
    useContext(CartContext);

  return (
    <>
      {cartArray.length !== 0 ? (
        <>
          <Grid container spacing={1}>
            {cartArray.map((item) => (
              <Grid item xs={12} md={12} key={item.product.id}>
                <CartItem product={item} deleteItem={deleteItem} />
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
                  Seguir comprando
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
              <ButtonCustom variant="contained" color="success">
                Hacer pedido
              </ButtonCustom>
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
                onClick={() => clearCart()}
                variant="contained"
                color="error"
              >
                Vaciar carrito
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
            No hay items en el carrito
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
              Ir al inicio
            </ButtonCustom>
          </Link>
        </>
      )}
    </>
  );
};
