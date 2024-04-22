import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Box, Container } from '@mui/material';
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import BasicLayout from "../../components/BasicLayout";
import TaxCar from 'components/Taxes/TaxCar';

function TaxCarPage() {
  return (
    <BasicLayout>
      <MDBox style={{background:'white'}} mp={3}>
        <Container>
            <MDTypography variant="h3">Расчет налога на имущество на транспортное средство</MDTypography>
            <TaxCar />
        </Container>
      </MDBox>
    </BasicLayout>
  );
};

export default TaxCarPage;



