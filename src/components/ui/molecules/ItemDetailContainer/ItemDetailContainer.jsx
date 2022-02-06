import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import { db } from "../../../../firebase";
import { LoadingScreen } from "../../atoms/LoadingScreen/LoadingScreen";
import { ItemDetail } from "../../molecules/ItemDetail/ItemDetail";
import { collection, where, getDocs, query } from "firebase/firestore";
import { NotFound } from "../../organism/NotFound/NotFound";
import { ContentPages } from "../../atoms/ContentPages/ContentPages";
import { useAuth } from "../../../../context/AuthContext";
import Swal from "sweetalert2";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { currentUser } = useAuth();

  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "productos");
    const filter = where("id", "==", Number(id));
    const consult = query(productsCollection, filter);

    const getDocuments = getDocs(consult);
    getDocuments
      .then((response) => {
        const docs = response.docs;
        const docsFormat = docs.map((doc) => {
          return doc.data();
        });
        const result = docsFormat.find((element) => element.id === Number(id));
        setProduct(result);
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong!",
          text: `${error.message}`,
          showConfirmButton: true,
          confirmButtonColor: "#722f37",
        });
        setLoading(false);
      });
  }, [id]);

  const onAdd = (count) => {
    if (currentUser) {
      addToCart(product, count);
      setAdded(true);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong!",
        text: "To buy, log in to your account",
        showConfirmButton: true,
        confirmButtonColor: "#722f37",
      });
    }
  };

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
          paddingBottom: "1.5rem",
          fontFamily: "Marck Script",
        }}
      >
        {" Product details "}
      </Typography>

      {!product ? (
        <NotFound />
      ) : (
        <>
          {!loading ? (
            <ItemDetail product={product} onAdd={onAdd} added={added} />
          ) : (
            <Box sx={{ display: "flex" }}>
              <LoadingScreen />
            </Box>
          )}
        </>
      )}
    </ContentPages>
  );
};
