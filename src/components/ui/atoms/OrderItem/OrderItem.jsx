import { Grid, Typography } from "@mui/material";
import React from "react";

export const OrderItem = ({
  product: {
    buyer: { fullName, Phone, Email, Address },
    created_at,
    items,
    total,
    status,
  },
}) => {
    
  return (
    <>
      <Grid container spacing={3} sx={{ borderBottom: "1px solid #48484826" }}>
        <Grid item xs={3} md={1}>
          <Typography variant="h6">
            {fullName.charAt(0).toUpperCase() + fullName.slice(1)}
          </Typography>
        </Grid>
        <Grid item xs={3} md={2}>
          <Typography variant="h6">{Email}</Typography>
        </Grid>
        <Grid item xs={3} md={1}>
          <Typography variant="h6">{Phone}</Typography>
        </Grid>
        <Grid item xs={3} md={1}>
          <Typography variant="h6">{Address}</Typography>
        </Grid>
        <Grid item xs={3} md={1}>
          <Typography variant="h6">{status}</Typography>
        </Grid>
        <Grid item xs={3} md={2}>
          <Typography variant="h6">{"Total: $" + total}</Typography>
        </Grid>
      </Grid>

      {items.map((item) => (
        <Grid item xs={12} md={12} key={item.product.id}>
          <Grid
            container
            spacing={3}
            sx={{ borderBottom: "1px solid #48484826" }}
          >
            <Grid item xs={1} md={1}>
              <img
                height={50}
                src={item.product.image}
                alt={item.product.title}
              />
            </Grid>
            <Grid item xs={3} md={3}>
              <Typography variant="subtitle1">{item.product.title}</Typography>
            </Grid>
            <Grid item xs={3} md={1}>
              <Typography variant="subtitle1">
                {"$" + item.product.price}
              </Typography>
            </Grid>
            <Grid item xs={3} md={1}>
              <Typography variant="subtitle1">
                {item.quantity}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
