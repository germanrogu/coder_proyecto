import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import macallan from "../../../../img/macallan.png";
import monkey from "../../../../img/monkey.png";

export const ItemListContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    //Haría el pedido a una API REST o DB
    //Consigo el resultado o archivo
    //Modifico el estado

    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(items);
      }, 2000);
    });

    promise.then((items) => {
      setProduct(items);
      setLoading(false);
    });
    // promise.catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAdd = () => {};

  return (
    <div style={{ padding: "2rem" }}>
      <Typography>{greeting}</Typography>

      {!loading ? (
        <ItemList items={product} />
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}

      <ItemCount stock={15} initial={1} onAdd={onAdd} />
    </div>
  );
};
