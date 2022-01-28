import {
  alpha,
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
    },
  },
}))(Card);

const ButtonCustom = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      textTransform: "none",
      color: "#722f37",
      fontSize: "0.9rem",
      fontWeight: "600",
      padding: theme.spacing(1),
      borderRadius: "8px",
      backgroundColor: alpha("#722f37", 0.2),
    },
    "&.MuiButton-root:hover": {
      backgroundColor: alpha("#722f37", 0.8),
      color:"white",
    },
  },
}))(Button);

export const Item = ({ id, stock, titleItem, category, urlImg }) => {
  let titleCustom = titleItem.toLowerCase();
  let titleCustom2 = titleCustom.charAt(0).toUpperCase() + titleItem.slice(1);

  return (
    <>
      <CardCustom>
        <CardHeader
          titleTypographyProps={{
            variant: "subtitle1",
            fontWeight: "600",
            color: "#722f37",
          }}
          title={titleCustom2.substring(0, 20) + "..."}
          subheader={
            category.charAt(0).toUpperCase() +
            category.slice(1) +
            " - Stock: " +
            stock
          }
          subheaderTypographyProps={{
            variant: "body2",
          }}
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
            <ButtonCustom> Detail </ButtonCustom>
          </Link>
        </CardActions>
      </CardCustom>
    </>
  );
};
