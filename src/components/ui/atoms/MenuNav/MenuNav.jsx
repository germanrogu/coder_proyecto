import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { withStyles } from "@mui/styles";

import { TitleMenu } from "../TitleMenu/TitleMenu";
import { Link } from "react-router-dom";

const StyledMenu = withStyles((theme) => ({
  paper: {
    borderRadius: " 0px",
    border: "1px solid #722f37",
  },
}))(Menu);

export const MenuNav = ({ anchorEl, open, onClose, items, menuButton }) => {
  return (
    <StyledMenu
      elevation={0}
      getcontentanchorel={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      id="menu-appbar"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={onClose}
    >
      {menuButton === "category"
        ? items.map((item) => (
            <Link
              to={`/category/${item}`}
              style={{
                display: "flex",
                textDecoration: "none",
                color: "#722f37",
              }}
              key={item}
            >
              <MenuItem key={item} onClick={onClose}>
                <TitleMenu
                  textAlign="center"
                  children={item}
                  variant={"subtitle1"}
                />
              </MenuItem>
            </Link>
          ))
        : items.map((item) => (
            <Link
              to={`/${item}`}
              style={{
                display: "flex",
                textDecoration: "none",
                color: "#722f37",
              }}
              key={item}
            >
              <MenuItem key={item} onClick={onClose}>
                <TitleMenu
                  textAlign="center"
                  children={item}
                  variant={"subtitle1"}
                />
              </MenuItem>
            </Link>
          ))}
    </StyledMenu>
  );
};
