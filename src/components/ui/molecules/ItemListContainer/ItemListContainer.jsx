import React from "react";
import { Typography } from "@mui/material";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography>{greeting}</Typography>

      <ItemCount stock={15} initial={1} />
    </div>
  );
};
