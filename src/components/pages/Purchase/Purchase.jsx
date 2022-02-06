import { alpha, Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { TextFieldCustom } from "../../ui/molecules/TextFieldCustom/TextFieldCustom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { LoadingScreen } from "../../ui/atoms/LoadingScreen/LoadingScreen";
import { ContentPages } from "../../ui/atoms/ContentPages/ContentPages";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";

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

export const Purchase = () => {
  const paperStyle = {
    borderRadius: "8px",
    padding: 25,
    width: 350,
  };
  const { currentUser } = useAuth();
  const { cartArray, totalPrice, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(0);
  const orderCollection = collection(db, "orders");

  const onSubmit = (data) => {
    const userEmail = currentUser.email;
    const dataBuyer = {
      ...data,
      userEmail,
    };
    const Total = totalPrice();
    const statusOrder = "Generated";
    const newOrder = {
      buyer: dataBuyer,
      items: cartArray,
      created_at: serverTimestamp(),
      total: Total,
      status: statusOrder,
    };
    setLoading(true);
    const sendDoc = addDoc(orderCollection, newOrder);
    sendDoc
      .then((result) => {
        setOrderId(result.id);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Order successfully created!",
          text: "Your order ID is : " + result.id,
          showConfirmButton: true,
          confirmButtonColor: "#722f37",
        });
        setTimeout(() => {
          clearCart();
        }, 500);
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong!",
          text: `${error.message}`,
          showConfirmButton: true,
          confirmButtonColor: "#722f37",
        });
      });
  };

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
          paddingBottom: "1.8rem",
          fontFamily: "Marck Script",
        }}
      >
        {" Checkout "}
      </Typography>

      {!loading ? (
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          <Paper elevation={2} style={paperStyle}>
            <Grid item xs={12}>
              {!orderId ? (
                <Typography
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#722f37",
                    margin: "0.6rem",
                  }}
                  variant="h5"
                >
                  {`Total : $ ${totalPrice()}`}{" "}
                </Typography>
              ) : (
                <></>
              )}

              {orderId ? (
                <>
                  <Typography variant="h5">{"Check all orders"} </Typography>
                  <Link
                    to={`/orders`}
                    style={{
                      display: "flex",
                      textDecoration: "none",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <ButtonCustom variant="contained" color="primary">
                      Your orders
                    </ButtonCustom>
                  </Link>
                </>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextFieldCustom
                field={"purchase"}
                onSubmit={onSubmit}
                disabled={cartArray.length > 0 ? false : true}
              />
            </Grid>
          </Paper>
        </Grid>
      ) : (
        <Box sx={{ display: "flex" }}>
          <LoadingScreen />
        </Box>
      )}
    </ContentPages>
  );
};
