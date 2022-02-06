import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";

import { MenuNav } from "../../atoms/MenuNav/MenuNav";

export const MenuOption = ({ icon, tooltip, items, menuButton }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openAccount = Boolean(anchorEl);

  /**
   * Open main menu
   * @param {Event} event
   */
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={tooltip}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          {icon}
        </IconButton>
      </Tooltip>

      <MenuNav
        menuButton={menuButton}
        anchorEl={anchorEl}
        open={openAccount}
        onClose={handleClose}
        items={items}
      />
    </>
  );
};
