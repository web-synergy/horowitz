// import React from 'react';
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import routes from "./config/routes";
import { theme } from "./theme";
import "./config/i18n";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={routes} />
  </ThemeProvider>
);
