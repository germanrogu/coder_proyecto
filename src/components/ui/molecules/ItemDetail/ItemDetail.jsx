import React, { useState } from "react";

import { Grid } from "@mui/material";
import { ImageGrid } from "../../atoms/ImageGrid/ImageGrid";
import { MainImage } from "../../atoms/MainImage/MainImage";
import { ProductInformation } from "../../atoms/ProductInformation/ProductInformation";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "85%",
    paddingBottom:theme.spacing(8),

    "@media (min-width:1280px)": { maxWidth: "85%" },
    "@media (min-width:1440px)": { maxWidth: "75%" },
    "@media (min-width:1670px)": { maxWidth: "65%" },
  },
}));

export const ItemDetail = ({ product, onAdd, added }) => {
  const classes = useStyles();
  const { image } = product;
  const [selectedImage, setSelectedImage] = useState(0);
  // const [mainImage, setMainImage] = useState([]);

  // useEffect(() => {
  //   setMainImage(product.images);
  // }, [product]);

  return (
    <Grid
      container
      spacing={1}
      className={classes.container}
      sx={{ margin: "auto" }}
    >
      <Grid item sm={1}>
        <ImageGrid
          images={image}
          onSelect={setSelectedImage}
          selectedImage={selectedImage}
        />
      </Grid>
      <Grid
        item
        sm={5}
        sx={{
          paddingRight: "2.5rem",
          paddingLeft: "2.5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <MainImage src={mainImage[selectedImage]} /> */}
        <MainImage src={image} />
      </Grid>
      <Grid item sm={6}>
        <ProductInformation product={product} onAdd={onAdd} added={added} />
      </Grid>
    </Grid>
  );
};
