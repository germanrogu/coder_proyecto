import React, { useState } from "react";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { NavLogo } from "../../atoms/NavLogo/NavLogo";
import logo from "../../../../img/comercio-electronico.png";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { MenuOption } from "../../molecules/MenuOption/MenuOption";

export const NavBar = () => {
  const pages = ["Productos", "Nosotros", "Blog"];
  const settings = ["Perfil", "Configuración", "Cerrar sesión"];

  const [anchorElNav, setAnchorElNav] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(false);

  return (
    <AppBar position="static" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLogo logo={logo} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MenuOption icon={<MenuIcon />} tooltip={"Items"} items={pages} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => setAnchorElNav(false)}
                sx={{ color: "white" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <MenuOption
              icon={<AccountCircleIcon />}
              tooltip={"Items"}
              items={settings}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
