import { useState, useEffect } from 'react';
import {Container} from '@mui/material';
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import BasicLayout from "../../components/BasicLayout";
import TaxPlace from 'components/Taxes/TaxPlace';

function TaxPlacePage() {
 

 




  return (
    <BasicLayout>
    <MDBox style={{background:'white'}} mp={3}>
        <Container>
            <MDTypography variant="h3">Расчет налога на имущество на земли населенных пунктов и земли несельскохозяйственного назначения</MDTypography>
            <TaxPlace />
        </Container>
      </MDBox>
    </BasicLayout>
  );
};

export default TaxPlacePage;