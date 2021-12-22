import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import macallan from "../../../../img/macallan.png";
import monkey from "../../../../img/monkey.png";

export const ItemListContainer = ({ greeting }) => {
  const items = [
    {
      id: 1,
      titleItem: "MACALLAN 18 AÑOS DOUBLE CASK",
      productName: "Whisky",
      description:
        "Macallan Double Cask es perfectamente equilibrado gracias a su maduración en barricas de roble sazonadas con jerez americano y europeo, durante 18 años.",
      urlImg: macallan,
      stockNumber: 8,
    },
    {
      id: 2,
      titleItem: "MONKEY SHOULDER",
      productName: "Whisky",
      description:
        "Whisky Monkey Shoulder, es un magnífico whisky Blended Malt de William Grant, hecho con maltas singulares de tres famosas destilerías de Speyside. Cuyo resultado es un whisky escocés suave, cremoso y suave que funciona perfectamente bien, sobre hielo o en cócteles de whisky (donde realmente sobresale).",
      urlImg: monkey,
      stockNumber: 10,
    },
  ];

  useEffect(() => {


  }, []);

  const onAdd =()=>{
  }

  return (
    <div style={{ padding: "2rem" }}>
      <Typography>{greeting}</Typography>

      <ItemList items={items} />

      <ItemCount stock={15} initial={1} onAdd={onAdd} />
    </div>
  );
};
