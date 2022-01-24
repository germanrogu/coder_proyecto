import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { Box, Grid } from "@mui/material";
import { OrderItem } from "../../ui/atoms/OrderItem/OrderItem";
import { LoadingScreen } from "../../ui/atoms/LoadingScreen/LoadingScreen";

export const Orders = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const orderCollection = collection(db, "orders");
    const getDocuments = getDocs(orderCollection);

    getDocuments
      .then((response) => {
        const docs = response.docs;
        const docsFormat = docs.map((doc) => {
          return doc.data();
        });

        setProduct(docsFormat);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {!loading ? (
        <Grid container spacing={1}>
          {product.map((item, index) => (
            <Grid item xs={12} md={12} key={index}>
              <OrderItem product={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ display: "flex" }}>
          <LoadingScreen />
        </Box>
      )}
    </>
  );
};
