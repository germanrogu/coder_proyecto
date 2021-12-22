import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const Item = ({
  titleItem,
  productName,
  description,
  urlImg,
  stockNumber,
}) => {
  return (
    <ListItemButton alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={urlImg} />
      </ListItemAvatar>
      <ListItemText
        primary={titleItem}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {productName}
            </Typography>
            {" - " + description}

            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.secondary"
            >
              {productName}
            </Typography>
            {" - Stock Disponible " + stockNumber}
          </>
        }
      />
    </ListItemButton>
  );
};
