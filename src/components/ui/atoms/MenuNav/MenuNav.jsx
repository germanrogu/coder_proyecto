import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { withStyles } from "@mui/styles";

import { TitleMenu } from "../TitleMenu/TitleMenu";
import { Link } from "react-router-dom";

const StyledMenu = withStyles((theme) => ({
  paper: {
    borderRadius: " 15px",
    border: "1px solid #1E6594",
  },
}))(Menu);

export const MenuNav = ({ anchorEl, open, onClose, items, menuButton }) => {
  return (
    <>
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
        {/* <NavLink to="/home" style={{ textDecoration: "none" }}>
        <MenuItem>
          <TitleMenu children={children} variant={"h6"} />
        </MenuItem>
        </NavLink> */}
        {menuButton === "category"
          ? items.map((item) => (
              <Link
                to={`/categoria/${item}`}
                style={{ display: "flex", textDecoration: "none" }}
                key={item}
              >
                <MenuItem key={item} onClick={onClose}>
                  <TitleMenu
                    textAlign="center"
                    children={item}
                    variant={"h6"}
                  />
                </MenuItem>
              </Link>
            ))
          : items.map((item) => (
              <Link
                to={`/${item}`}
                style={{ display: "flex", textDecoration: "none" }}
                key={item}
              >
                <MenuItem key={item} onClick={onClose}>
                  <TitleMenu
                    textAlign="center"
                    children={item}
                    variant={"h6"}
                  />
                </MenuItem>
              </Link>
            ))}

        {}
      </StyledMenu>
    </>
  );
};
