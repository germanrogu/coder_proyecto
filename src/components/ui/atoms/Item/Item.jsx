import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { withStyles } from "@mui/styles";
import { ItemCount } from "../../molecules/ItemCount/ItemCount";

const CardCustom = withStyles((theme) => ({
  root: {
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
      color: "Black",
      fontSize: "1rem",
      fontWeight: "bold",
      padding: theme.spacing(1),
      borderRadius: "10px",
    },
  },
}))(Button);

export const Item = ({
  stock,
  initial,
  onAdd,
  titleItem,
  productName,
  description,
  urlImg,
  stockNumber,
}) => {
  return (
    <>
      <CardCustom>
        <CardHeader
          title={titleItem}
          subheader={productName + " - Stock: " + stockNumber}
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
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description.length > 120
              ? description.substring(0, 120 - 3) + " ..."
              : description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ButtonCustom size="small">Ver más</ButtonCustom>
        </CardActions>
        <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      </CardCustom>
    </>
  );
};
