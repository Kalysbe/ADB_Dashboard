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
import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import Card from "@mui/material/Card";
// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TaxCar from "components/Taxes/TaxCar";
import TaxHome from "components/Taxes/TaxHome";
import TaxNoHome from "components/Taxes/TaxNoHome";
import TaxPlace from "components/Taxes/TaxPlace";
import MDTypography from "components/MDTypography";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <MDBox sx={{ p: 2 }}>
          <MDTypography>{children}</MDTypography>
        </MDBox>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Billing() {


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar  />
      <MDBox pt={6} pb={3}>
      <Card >
        <MDBox
          mx={2}
          mt={-3}
          py={3}
          px={2}
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
        >
          <MDTypography variant="h6" color="white">
          Расчет налога на имущество 
          </MDTypography>
        </MDBox>

        <MDBox px={2} py={2} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label='Транспортное средство' {...a11yProps(1)} />
            <Tab label='Жилое здание, сооружение и помещение' {...a11yProps(2)} />
            <Tab label='Нежилое здание, сооружение и помещение' {...a11yProps(3)} />
            <Tab label='Земли населенных пунктов и земли несельскохозяйственного назначения' {...a11yProps(3)} />
          </Tabs>
        </MDBox>


        <CustomTabPanel value={value} index={0}>
          <TaxCar />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TaxHome />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TaxNoHome />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <TaxPlace />
        </CustomTabPanel>

      </Card>
   
      </MDBox>
    </DashboardLayout>
  );
}

export default Billing;
