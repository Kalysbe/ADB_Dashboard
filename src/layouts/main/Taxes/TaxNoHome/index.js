import { useState, useEffect } from 'react';
import { Grid, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, Container } from '@mui/material';
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import BasicLayout from "../../components/BasicLayout";
import TaxNoHome from 'components/Taxes/TaxNoHome';

function TaxNoHomePage() {
  return (
    <BasicLayout>
    <MDBox style={{background:'white'}} mp={3}>
        <Container>
            <MDTypography variant="h3">Расчет налога на имущество на нежилое здание, сооружение и помещение</MDTypography>
            <TaxNoHome />
        </Container>
      </MDBox>
    </BasicLayout>
  )
};

export default TaxNoHomePage;