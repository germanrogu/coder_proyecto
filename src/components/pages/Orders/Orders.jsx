import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { alpha, Box, Button, Grid, Typography } from "@mui/material";
import { OrderItem } from "../../ui/atoms/OrderItem/OrderItem";
import { LoadingScreen } from "../../ui/atoms/LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@mui/styles";
import { ContentPages } from "../../ui/atoms/ContentPages/ContentPages";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "85%",
    paddingBottom: theme.spacing(8),

    "@media (min-width:1280px)": { maxWidth: "85%" },
    "@media (min-width:1440px)": { maxWidth: "75%" },
    "@media (min-width:1670px)": { maxWidth: "65%" },
  },
}));


const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "#722f37",
      fontSize: "1rem",
      fontWeight: "600",
      padding: theme.spacing(1),
      borderRadius: "8px",
      backgroundColor: alpha("#722f37", 0.2),
      margin: theme.spacing(2),
    },
    "&.MuiButton-root:hover": {
      backgroundColor: alpha("#722f37", 0.8),
      color: "white",
    },
  },
}))(Button);

export const Orders = () => {
  const classes = useStyles();
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
    <ContentPages>
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.8rem",
          fontWeight: "600",
          color: "#722f37",
          paddingTop: "1.3rem",
          paddingBottom: "1.8rem",
          fontFamily: "Marck Script",
        }}
      >
        {" Orders "}
      </Typography>
      {!loading ? (
        product.length > 0 ? (
          <Grid
            container
            spacing={1}
            sx={{ display: "flex", justifyContent: "center", margin: "auto" }}
            className={classes.container}
          >
            {product.map((item, index) => (
              <Grid item xs={12} md={12} key={index}>
                <OrderItem product={item} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
                fontSize: "1.2rem",
              }}
            >
              No orders
            </Typography>
            <Link
              to={`/`}
              style={{
                display: "flex",
                textDecoration: "none",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ButtonCustom variant="contained" color="primary">
                Go to Home
              </ButtonCustom>
            </Link>
          </>
        )
      ) : (
        <Box sx={{ display: "flex" }}>
          <LoadingScreen />
        </Box>
      )}
    </ContentPages>
  );
};
