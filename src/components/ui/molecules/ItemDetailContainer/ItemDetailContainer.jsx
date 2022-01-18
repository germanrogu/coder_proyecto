import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import { LoadingScreen } from "../../atoms/LoadingScreen/LoadingScreen";
// import image1 from "../../../../img/1.png";
// import image2 from "../../../../img/2.png";
// import image3 from "../../../../img/3.png";
import { ItemDetail } from "../../molecules/ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const { id } = useParams();
  const {addToCart} = useContext(CartContext)
  // const item = {
  //   id: 2,
  //   titleItem: "GIFTPACK TANQUERAY",
  //   category: "Whisky",
  //   description:
  //     "La Ginebra Tanqueray es una de las Ginebras más apreciadas y apetecidas por el público local e internacional. La Tanqueray London Dry Gin, se ha mantenido en el mercado hasta la actualidad conservando su originalidad y calidad Premium, y hoy muestra su presentación de 375ml en un GiftPack que disfrutarás al máximo.",
  //   price: 70.5,
  //   stockNumber: 10,
  //   images: [image1, image2, image3],
  // };

  // useEffect(() => {
  //   setLoading(true);

  //   const promise = new Promise((res, rej) => {
  //     setTimeout(() => {
  //       res(item);
  //     }, 2000);
  //   });

  //   promise.then((items) => {
  //     setProduct(items);
  //     setLoading(false);
  //   });
  //   promise.catch((error) => {
  //     console.log(error);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    setLoading(true);

    const getProducts = fetch(`https://fakestoreapi.com/products/${id}`);

    getProducts
      .then((response) => response.json())
      .then((items) => {
        setProduct(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const onAdd = (count) => {
    addToCart(product,count)
    // console.log(`Agregaste ${product.title}, cantidad: ${count} .`);
    setAdded(true)
  };

  return (
    <div>
      {!loading ? (
        <ItemDetail product={product} onAdd={onAdd} added={added} />
      ) : (
        <Box sx={{ display: "flex" }}>
          <LoadingScreen/>
        </Box>
      )}
    </div>
  );
};
