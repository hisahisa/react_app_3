import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Suspense, useState } from "react";
import AppBar from "./AppBar";
import { MenuDrawer } from "./MenuDrawer";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import {containerStyles, layoutStyles} from "./layoutStyles";

const Layout = () => {
  const [toggleOpen, setToggleOpen] = useState(true);
  const handleToggleDrawer = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <>
      <AppBar title="My Company Application" toggleDrawer={handleToggleDrawer} />
      <MenuDrawer open={toggleOpen} toggleDrawer={handleToggleDrawer} />
      <Box
        component="main"
        sx={layoutStyles}
      >
        <Toolbar />
        <Container
          maxWidth="xl"
          sx={containerStyles}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
