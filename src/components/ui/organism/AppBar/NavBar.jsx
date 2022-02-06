import React, { useContext } from "react";
import {
  AppBar,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { NavLogo } from "../../atoms/NavLogo/NavLogo";
import logo from "../../../../img/comercio-electronico.png";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { MenuOption } from "../../molecules/MenuOption/MenuOption";
import { makeStyles } from "@mui/styles";
import { CartWidget } from "../../atoms/CartWidget/CartWidget";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "5rem",
  },
  toolbar: {
    height: "5rem",
    backgroundColor: "#722f37",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

    "@media (min-width:1280px)": {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
    "@media (min-width:1440px)": {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
    "@media (min-width:1670px)": {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  ini: {
    display: "flex",
    alignItems: "center",
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { cartCounter, clearCart } = useContext(CartContext);
  const { currentUser, logOut } = useAuth();

  const onClickLogOut = () => {
    logOut();
    clearCart();
    navigate("/auth/login");
  };

  const pages = ["Still wines", "Sparkling wines", "White wine", "Rosé wine"];
  const settings = ["orders"];

  return (
    <>
      <CssBaseline />

      <AppBar position="static" className={classes.root} elevation={0}>
        <Toolbar disableGutters className={classes.toolbar}>
          <Grid container>
            <Grid item xs={2} className={classes.ini}>
              <NavLogo logo={logo} />
            </Grid>

            <Grid
              item
              xs={5}
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                paddingLeft: "1.5rem",
              }}
            >
              <MenuOption
                menuButton={"category"}
                icon={<MenuIcon fontSize="large" />}
                tooltip={"Categories"}
                items={pages}
              />
            </Grid>

            <Grid
              item
              xs={5}
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {pages.map((page) => (
                <Link
                  to={`/category/${page}`}
                  style={{ display: "flex", textDecoration: "none" }}
                  key={page}
                >
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      paddingRight: "1.3rem",
                    }}
                  >
                    {page}
                  </Typography>
                </Link>
              ))}
            </Grid>

            <Grid
              item
              xs={5}
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!currentUser && (
                <Link
                  to={`/auth/login`}
                  style={{ display: "flex", textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      paddingRight: "1.3rem",
                    }}
                  >
                    Log In
                  </Typography>
                </Link>
              )}

              {!currentUser && (
                <Link
                  to={`/auth/register`}
                  style={{ display: "flex", textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      paddingRight: "1.3rem",
                    }}
                  >
                    Register
                  </Typography>
                </Link>
              )}

              {currentUser && (
                <>
                  <Link
                    to={`/cart`}
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <CartWidget itemNumber={cartCounter()} />
                  </Link>
                  <MenuOption
                    menuButton={"account"}
                    icon={<AccountCircleIcon fontSize="medium" />}
                    tooltip={"Orders"}
                    items={settings}
                  />
                  <Tooltip title={"Log out"}>
                    <IconButton onClick={onClickLogOut} aria-label="Log out">
                      <LogoutIcon
                        fontSize="medium"
                        style={{ color: "white" }}
                      />
                    </IconButton>
                  </Tooltip>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
