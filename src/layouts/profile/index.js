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

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import Chapter1 from "./components/Chapter1";
import Chapter2 from "./components/Chapter2";
import Chapter3 from "./components/Chapter3";
import Chapter4 from "./components/Chapter4";
import Chapter5 from "./components/Chapter5";
import Chapter6 from "./components/Chapter6";
import Chapter7 from "./components/Chapter7";
import Chapter8 from "./components/Chapter8";
import Chapter9 from "./components/Chapter9";
import Chapter10 from "./components/Chapter10";
import Chapter11 from "./components/Chapter11";
import Chapter12 from "./components/Chapter12";
import Chapter13 from "./components/Chapter13";
import Chapter14 from "./components/Chapter14";

function Overview() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <p>НАЛОГОВЫЙ КОДЕКС КЫРГЫЗСКОЙ РЕСПУБЛИКИ</p>
      <p><strong>&nbsp;</strong></p>
      <p>от 18 января 2022 года № 3</p>
      <p>(Введен в действие Законом КР от 18 января 2022 года № 4 с 1 января 2022</p>
      <p>года)</p>
      <p>(В редакции Законов Кыргызской Республики от 30 июня 2022 года № 51, 3</p>
      <p>апреля 2023 года № 78)</p>
      ОБЩАЯ ЧАСТЬ
      <Chapter1/>
      <Chapter2/>
      <Chapter3/>
      <Chapter4/>
      <Chapter5/>
      <Chapter6/>
      <Chapter7/>
      <Chapter8/>
      <Chapter9/>
      <Chapter10/>
      <Chapter11/>
      <Chapter12/>
      <Chapter13/>
      <Chapter14/>
 
    
 
     
      <p><strong>Президент</strong></p>
      <table>
        <tbody>
          <tr>
            <td width="353">
              <p><strong>Кыргызской Республики</strong></p>
            </td>
            <td width="263">
              <p><strong>С.Н. Жапаров</strong></p>
            </td>
          </tr>
        </tbody>
      </table>
      <p><strong>&nbsp;</strong></p>
      <table>
        <tbody>
          <tr>
            <td width="325">
              <p>Принят Жогорку Кенешем</p>
              <p>Кыргызской Республики</p>
            </td>
            <td width="291">
              <p><strong>&nbsp;</strong></p>
              <p>22 декабря 2021 года</p>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Overview;
