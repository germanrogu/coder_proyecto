import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const CartItem = ({
  product: {
    product: { id, title, image, price },
    quantity,
  },
  deleteItem,
}) => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={3} md={1}>
        <img height={50} src={image} alt={title} />
      </Grid>
      <Grid
        item
        xs={9}
        md={4}
        sx={{ display: "flex", justifyContent: "flex-start" }}
      >
        <Typography
          style={{
            fontWeight: "600",
            color: "#722f37",
            display: "flex",
            overflow: "hidden",
            noWrap: true,
          }}
          variant="subtitle1"
        >
          {title.substring(0, 35) + "..."}
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
        md={1}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Typography
          style={{
            fontWeight: "600",
          }}
          variant="subtitle1"
        >
          {"$" + price}
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
        md={1}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Typography
          style={{
            fontWeight: "600",
          }}
          variant="subtitle1"
        >
          {quantity}
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        md={1}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <IconButton
          onClick={() => deleteItem(id)}
          aria-label="delete"
          style={{ color: "#722f37" }}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
