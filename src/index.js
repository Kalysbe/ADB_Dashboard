/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import SaveCurrentLocation from './saveRoute';
import App from "App";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import store from "./redux/store";
const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter basename="/admin">
    <MaterialUIControllerProvider>
      <Provider store={store}>
        <SaveCurrentLocation />
        <App />
      </Provider>
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
