import { useState, useEffect } from 'react';
import { Grid, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, Container } from '@mui/material';
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import BasicLayout from "../../components/BasicLayout";
import TaxHome from 'components/Taxes/TaxHome';

function TaxHomePage()  {
  return (
    <BasicLayout>
    <MDBox style={{background:'white'}} mp={3}>
        <Container>
            <MDTypography variant="h3">Расчет налога на имущество на жилое здание, сооружение и помещение</MDTypography>
            <TaxHome />
        </Container>
      </MDBox>
    </BasicLayout>
  );
};

export default TaxHomePage;