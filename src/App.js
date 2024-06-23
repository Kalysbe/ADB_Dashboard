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

import { React, useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import { useDispatch, useSelector } from 'react-redux';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

import { useTranslation } from 'react-i18next';
import './i18n';

// Material Dashboard 2 React routes
import routes from "routes";

import { fetchAuthMe } from './redux/actions/auth';
import { selectIsAuth } from './redux/slices/auth'
// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import NotPage from "./layouts/main/NotPage"
import { layouts } from "chart.js";



import "./assets/css/layerslider.css"
import "./assets/css/classic-theme.css"
import "./assets/css/global.css"
import "./assets/css/extendify-utilities.css"
import "./assets/css/styles.css"
import "./assets/css/style.css"
import "./assets/css/flaticon_plugin-plate-icons.css"
import "./assets/css/custom-style.css"
import "./assets/css/slick.css"
import "./assets/css/perfect-scrollbar.min.css"
import "./assets/css/custom-theme.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/feather.css"
import "./assets/css/frontend.css"
import "./assets/css/webfont.min.css"
import "./assets/css/elementor-icons.min.css"
import "./assets/css/frontend-legacy.min.css"
import "./assets/css/frontend.min.css"
import "./assets/css/swiper.min.css"
import "./assets/css/post-12.css"
import "./assets/css/post-61.css"
import "./assets/css/style_1.css"
import "./assets/css/fontawesome.min_1.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/style_2.css"
import "./assets/css/color.schemes.css"
import "./assets/css/fontawesome.min.css"
import "./assets/css/fonts.css"
import "./assets/css/post-2106.css"
import "./assets/css/post-172.css"
import "./assets/css/core-block-supports.css"
import "./assets/css/animations.min.css"
export default function App() {
  const navigate = useNavigate();
  const dispath = useDispatch()
  const isAuth = useSelector(selectIsAuth);
  const data = useSelector(state => state.auth.data);
  const userRole = data && data.role
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  const { t, i18n } = useTranslation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );


  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispath(fetchAuthMe())
    }

  }, [])

  console.log(layout)

  useEffect(() => {
  if (layout === "dashboard" && !window.localStorage.getItem("token") || !isAuth) {
    navigate('/authentication/sign-in');
  }
}, [layout])

  useEffect(() => {

      const lastVisitedPath = localStorage.getItem('lastVisitedPath');
      if (lastVisitedPath) {
        navigate(lastVisitedPath);
      } 
  
  }, [isAuth, navigate]);



  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {isAuth && layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="ADB Solution"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            UserRole={userRole}
          />
          <Configurator />
          {/* {configsButton} */}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<NotPage />} />
      </Routes>
    </ThemeProvider>
  )



}
