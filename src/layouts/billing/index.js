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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

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

import TaxCar from "components/Taxes/TaxCar";
import TaxHome from "components/Taxes/TaxHome";
import TaxNoHome from "components/Taxes/TaxNoHome";
import TaxPlace from "components/Taxes/TaxPlace";
import MDTypography from "components/MDTypography";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <MDTypography className="contact-box__title" variant='h5'>Расчет налога на имущество на транспортное средство</MDTypography>
            </AccordionSummary>
            <AccordionDetails>
              <TaxCar />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <MDTypography className="contact-box__title" variant='h5'>Расчет налога на имущество на жилое здание, сооружение и помещение</MDTypography>
            </AccordionSummary>
            <AccordionDetails>
            <TaxHome />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <MDTypography className="contact-box__title" variant='h5'>Расчет налога на имущество на нежилое здание, сооружение и помещение</MDTypography>
            </AccordionSummary>
            <AccordionDetails>
            <TaxNoHome />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
                   <MDTypography variant="h5">Расчет налога на имущество на земли населенных пунктов и земли несельскохозяйственного назначения</MDTypography>
            </AccordionSummary>
            <AccordionDetails>
            <TaxPlace />
            </AccordionDetails>
          </Accordion>



   
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Billing;
