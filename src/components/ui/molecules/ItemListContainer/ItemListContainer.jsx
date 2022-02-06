import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { LoadingScreen } from "../../atoms/LoadingScreen/LoadingScreen";
import { db } from "../../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ContentPages } from "../../atoms/ContentPages/ContentPages";

export const ItemListContainer = ({ greeting = "Welcome" }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "productos");
    const getDocuments = id
      ? getDocs(
          query(
            productsCollection,
            where("category", "==", id.toLowerCase() || " ")
          )
        )
      : getDocs(productsCollection);

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
  }, [id]);

  const onAdd = () => {};

  return (
    <ContentPages>
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.8rem",
          fontWeight: "600",
          color: "#722f37",
          paddingTop: "1.3rem",
          paddingBottom: "1.3rem",
          fontFamily: 'Marck Script',
        }}
      >
         {id ? "Welcome, to " + id : greeting}
      </Typography>

      {!loading ? (
        <ItemList items={product} onAdd={onAdd} />
      ) : (
        <Box sx={{ display: "flex" }}>
          <LoadingScreen />
        </Box>
      )}
    </ContentPages>
  );
};
