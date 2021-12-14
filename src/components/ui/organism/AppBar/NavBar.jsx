import React from "react";
import { AppBar, Button, CssBaseline, Grid, Toolbar } from "@mui/material";
import { NavLogo } from "../../atoms/NavLogo/NavLogo";
import logo from "../../../../img/comercio-electronico.png";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { MenuOption } from "../../molecules/MenuOption/MenuOption";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    backgroundColor: "black",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  ini: {
    display: "flex",
    alignItems: "center",
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  const pages = ["Productos", "Nosotros", "Blog"];
  const settings = ["Perfil", "Configuración", "Cerrar sesión"];

  const handleItem = () => {
    console.log("Item");
  };

  return (
    <>
      <CssBaseline />

      <AppBar position="static" className={classes.root} elevation={1}>
        <Toolbar disableGutters className={classes.toolbar}>
          <Grid container>
            <Grid item xs={2} className={classes.ini}>
              <NavLogo logo={logo} />
            </Grid>


            <Grid
              item
              xs={5}
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <MenuOption icon={<MenuIcon />} tooltip={"Items"} items={pages} />
            </Grid>

            <Grid
              item
              xs={5}
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
                <Button key={page} onClick={handleItem} sx={{ color: "white" }}>
                  {page}
                </Button>
              ))}
            </Grid>

            <Grid item xs={5} sx={{ flexGrow: 0,display: "flex" ,justifyContent: "flex-end", }}>
              <MenuOption
                icon={<AccountCircleIcon />}
                tooltip={"Items"}
                items={settings}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
