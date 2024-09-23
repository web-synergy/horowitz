// import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import routes from './config/routes';
import { theme } from './theme';
// import loadAnalytics from './utils/loadAnalytics';

import './config/i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes} />
    </ThemeProvider>
  </HelmetProvider>
);

// loadAnalytics();
