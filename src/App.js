import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { lazy } from "react";

const IndexPage = lazy(() => import("./pages/IndexPage"));
const UsersPage = lazy(() => import("./pages/UserList"));
const ItemsPage = lazy(() => import("./pages/ItemList"));

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/items" element={<ItemsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}
