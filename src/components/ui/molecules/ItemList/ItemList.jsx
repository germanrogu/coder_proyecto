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
              stock={item.stockNumber}
              initial={1}
              onAdd={onAdd}
              titleItem={item.titleItem}
              productName={item.productName}
              description={item.description}
              urlImg={item.urlImg}
              stockNumber={item.stockNumber}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
