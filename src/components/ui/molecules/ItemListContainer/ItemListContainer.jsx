import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { ItemList } from "../ItemList/ItemList";
import macallan from "../../../../img/macallan.png";
import monkey from "../../../../img/monkey.png";

export const ItemListContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const items = [
    {
      id: 1,
      titleItem: "MACALLAN 18 AÑOS ",
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
    {
      id: 3,
      titleItem: "MONKEY SHOULDER",
      productName: "Whisky",
      description:
        "Whisky Monkey Shoulder, es un magnífico whisky Blended Malt de William Grant, hecho con maltas singulares de tres famosas destilerías de Speyside. Cuyo resultado es un whisky escocés suave, cremoso y suave que funciona perfectamente bien, sobre hielo o en cócteles de whisky (donde realmente sobresale).",
      urlImg: monkey,
      stockNumber: 10,
    },
    {
      id: 4,
      titleItem: "MACALLAN 18 AÑOS ",
      productName: "Whisky",
      description:
        "Macallan Double Cask es perfectamente equilibrado gracias a su maduración en barricas de roble sazonadas con jerez americano y europeo, durante 18 años.",
      urlImg: macallan,
      stockNumber: 8,
    },
  ];

  useEffect(() => {
    setLoading(true);
    //Haría el pedido a una API REST o DB
    //Consigo el resultado o archivo
    //Modifico el estado

    // //CALLBACK HELL / Pyramid of Doom
    // //Paso 1 Se piden con fetch
    // const getProducts = fetch("https://fakestoreapi.com/products");

    // getProducts
    //   .then((response) => {
    //     //2) Validation
    //     //Response.json()
    //     //Response.text()
    //     //Response.blob()
    //     //Response.arrayBuffer()
    //     const result = response.json();

    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     console.log("Termino todo");
    //   });

    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(items);
      }, 2000);
    });

    promise.then((items) => {
      setProduct(items);
      setLoading(false);
    });
    promise.catch((error) => {
      console.log(error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAdd = () => {};

  return (
    <div style={{ padding: "2rem" }}>
      <Typography>{greeting}</Typography>

      {!loading ? (
        <ItemList items={product} onAdd={onAdd} />
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};
