import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";
import { ImageGrid } from "../../atoms/ImageGrid/ImageGrid";
import { MainImage } from "../../atoms/MainImage/MainImage";
import { ProductInformation } from "../../atoms/ProductInformation/ProductInformation";

export const ItemDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [mainImage, setMainImage] = useState([]);

  useEffect(() => {
    setMainImage(product.images);
  }, [product]);
  return (
    <Grid container spacing={1} sx={{ maxWidth: 1100, margin: "0 auto" }}>
      <Grid item sm={1}>
        <ImageGrid
          images={product.images}
          onSelect={setSelectedImage}
          selectedImage={selectedImage}
        />
      </Grid>
      <Grid item sm={5} sx={{paddingRight:"2rem",paddingLeft:"2rem"}}>
        <MainImage src={mainImage[selectedImage]} />
      </Grid>
      <Grid item sm={6}>
        <ProductInformation product={product} />
      </Grid>
    </Grid>
  );
};
