import {
  Button,
  Card,
  CardActions,
  // CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  // Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { withStyles } from "@mui/styles";
import { ItemCount } from "../../molecules/ItemCount/ItemCount";
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
      color: "black",
      fontSize: "1rem",
      fontWeight: "400",
      padding: theme.spacing(1),
      borderRadius: "10px",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#C1D1D6",
    },
  },
}))(Button);

export const Item = ({
  id,
  stock,
  initial,
  onAdd,
  titleItem,
  category,
  // description,
  urlImg,
  //stockNumber,
}) => {
  return (
    <>
      <CardCustom>
        <CardHeader
          
          title={titleItem}
          subheader={category + " - Stock: " + stock}
          action={
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          height="150"
          image={urlImg}
          alt="Paella dish"
          sx={{ objectFit: "contain" }}
        />
        {/* <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description.length > 120
              ? description.substring(0, 120 - 3) + " ..."
              : description}
          </Typography>
        </CardContent> */}
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Link
            to={`/item/${id}`}
            style={{ display: "flex", textDecoration: "none" }}
          >
            <ButtonCustom>Más información</ButtonCustom>
          </Link>
        </CardActions>
        <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      </CardCustom>
    </>
  );
};
