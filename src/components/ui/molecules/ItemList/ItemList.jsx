import { Grid } from "@mui/material";
import React from "react";

import { Item } from "../../atoms/Item/Item";

export const ItemList = ({ items, onAdd }) => {
  return (
    <>
      <Grid container spacing={1}>
        {items.map((item) => (
          <Grid item xs={12} md={3} key={item.id}>
            <Item
              id={item.id}
              //stock={item.stockNumber}
              stock={10}
              initial={1}
              onAdd={onAdd}
              titleItem={item.title}
              category={item.category}
              description={item.description}
              urlImg={item.image}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
