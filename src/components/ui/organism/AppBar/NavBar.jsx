import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLogo } from "../../atoms/NavLogo/NavLogo";
import logo from "../../../../img/comercio-electronico.png";
import { Box } from "@mui/system";
import { AvatarName } from "../../atoms/AvatarName/AvatarName";
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = () => {
  const pages = ["Productos", "Nosotros", "Blog"];
  const settings = ["Perfil", "Configuración", "Cerrar sesión"];

  const [anchorElNav, setAnchorElNav] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(false);

  return (
    <AppBar position="static" elevation={1}>
              <Container maxWidth="xl">
      <Toolbar disableGutters>
        {/* <Grid container> */}
          {/* <Grid item xs={3}> */}
            <NavLogo logo={logo} />
          {/* </Grid> */}
          {/* <Grid item xs={2} />
          <Grid item xs={7}> */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setAnchorElNav(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={anchorElNav}
                onClose={() => setAnchorElNav(false)}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => setAnchorElNav(false)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => setAnchorElNav(false)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <AvatarName Name={"G"} onClick={() => setAnchorElUser(true)} />
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(false)}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => setAnchorElUser(false)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          {/* </Grid> */}
        {/* </Grid> */}
      </Toolbar>
      </Container>

    </AppBar>
  );
};
