import { Box, Grid, Snackbar, Typography } from "@mui/material";
import React, { forwardRef, useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { TextFieldCustom } from "../../ui/molecules/TextFieldCustom/TextFieldCustom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { LoadingScreen } from "../../ui/atoms/LoadingScreen/LoadingScreen";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Purchase = () => {
  const { cartArray, totalPrice, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(0);
  const [openAlert, setOpenAlert] = useState(false);
  const orderCollection = collection(db, "orders");

  const onSubmit = (data) => {
    // console.log(data);
    const Total = totalPrice();
    const statusOrder = "Generated"
    // console.log(items);
    const newOrder = {
      buyer: data,
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
        setOpenAlert(true);
        setTimeout(() => {
          clearCart();
        }, 500);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openAlert}
        onClose={() => setOpenAlert(false)}
        message="Order successfully created"
      >
        <Alert
          onClose={() => setOpenAlert(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Order successfully created!
        </Alert>
      </Snackbar>

      {!loading ? (
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TextFieldCustom onSubmit={onSubmit} />
          </Grid>

          <Grid item xs={12} md={6}>
            {!orderId ? (
              <Typography variant="h5">
                {`Total : $ ${totalPrice()}`}{" "}
              </Typography>
            ) : (
              <></>
            )}

            {orderId ? (
              <>
                <Typography variant="h5">
                  {`Your order was generated with the following ID : ${orderId}`}{" "}
                </Typography>
                <Typography variant="h4">{"Your purchase detail:"} </Typography>
              </>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      ) : (
        <Box sx={{ display: "flex" }}>
          <LoadingScreen />
        </Box>
      )}
    </>
  );
};
