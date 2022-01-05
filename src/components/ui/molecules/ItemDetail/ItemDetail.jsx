import React, { useState } from "react";

import { Grid } from "@mui/material";
import { ImageGrid } from "../../atoms/ImageGrid/ImageGrid";
import { MainImage } from "../../atoms/MainImage/MainImage";
import { ProductInformation } from "../../atoms/ProductInformation/ProductInformation";

export const ItemDetail = ({ product, onAdd }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  // const [mainImage, setMainImage] = useState([]);

  // useEffect(() => {
  //   setMainImage(product.images);
  // }, [product]);
  return (
    <Grid container spacing={1} sx={{ maxWidth: 1100, margin: "0 auto" }}>
      <Grid item sm={1}>
        <ImageGrid
          images={product.image}
          onSelect={setSelectedImage}
          selectedImage={selectedImage}
        />
      </Grid>
      <Grid item sm={5} sx={{ paddingRight: "2rem", paddingLeft: "2rem" }}>
        {/* <MainImage src={mainImage[selectedImage]} /> */}
        <MainImage src={product.image} />
      </Grid>
      <Grid item sm={6}>
        <ProductInformation product={product} onAdd={onAdd} />
      </Grid>
    </Grid>
  );
};
