import { Grid, Typography } from "@mui/material";
import React from "react";

export const OrderItem = ({
  product: {
    buyer: { fullName, Phone, userEmail, Address },
    created_at,
    items,
    total,
    status,
  },
}) => {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          paddingTop: "1.5rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid #7a7a7a",
        }}
      >
        <Grid item xs={12} md={2}>
          <Typography style={{ fontWeight: "bold" }} variant="subtitle1">
            {fullName}
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1">{userEmail}</Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1">{Phone}</Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1">{Address}</Typography>
        </Grid>
        <Grid item xs={5} md={2}>
          <Typography variant="subtitle1">{status}</Typography>
        </Grid>
        <Grid item xs={5} md={2}>
          <Typography variant="subtitle1">{"Total: $" + total}</Typography>
        </Grid>
      </Grid>

      {items.map((item) => (
        <Grid item xs={12} md={12} key={item.product.id}>
          <Grid
            container
            spacing={3}
            sx={{paddingTop:"0.5rem"}}
          >
            <Grid item xs={3} md={1}>
              <img
                height={40}
                src={item.product.image}
                alt={item.product.title}
              />
            </Grid>
            <Grid item xs={9} md={5}>
              <Typography variant="subtitle1">{item.product.title}</Typography>
            </Grid>
            <Grid item xs={5} md={4}>
              <Typography variant="subtitle1">
                {"$" + item.product.price}
              </Typography>
            </Grid>
            <Grid item xs={5} md={2}>
              <Typography variant="subtitle1">{item.quantity}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
