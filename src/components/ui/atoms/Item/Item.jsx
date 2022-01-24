import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const CardCustom = withStyles((theme) => ({
  root: {
    textAlign: "center",
    "&.MuiCard-root": {
      margin: "1.6rem",
      borderRadius: "10px",
    },
  },
}))(Card);

const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "#3483fa",
      fontSize: "1rem",
      fontWeight: "600",
      padding: theme.spacing(1),
      borderRadius: "8px",
      backgroundColor: "#4189e626",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#4189e659",
    },
  },
}))(Button);

export const Item = ({
  id,
  stock,
  initial,
  titleItem,
  category,
  urlImg,
}) => {
  return (
    <>
      <CardCustom>
        <CardHeader
          title={titleItem.substring(0,25)+" ..."}
          subheader={category + " - Stock: " + stock}
          action={
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          height="130"
          image={urlImg}
          alt={titleItem}
          sx={{ objectFit: "contain" }}
        />

        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Link
            to={`/item/${id}`}
            style={{ display: "flex", textDecoration: "none" }}
          >
            <ButtonCustom>Detail</ButtonCustom>
          </Link>
        </CardActions>
      </CardCustom>
    </>
  );
};
