import React, { useState } from "react";
import { Badge, IconButton, Tooltip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = ({ itemNumber }) => {
  // eslint-disable-next-line no-unused-vars
  const [anchorEl, setAnchorEl] = useState(null);
  //const openAccount = Boolean(anchorEl);

  /**
   * Open main menu
   * @param {Event} event
   */
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  return (
    <Tooltip title={"Carrito"}>
      <IconButton
        aria-label="notifications"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
      >
        <Badge badgeContent={itemNumber} color="secondary">
          <ShoppingCartIcon fontSize="large" style={{ color: "white" }} />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
