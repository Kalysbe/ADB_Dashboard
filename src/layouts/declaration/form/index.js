
import React, { useEffect, useState } from 'react';

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";



// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";






function Form() {


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={6} pb={3}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card>
                            <MDBox display="flex" justifyContent="space-between" alignItems="center" py={1}>
                                <MDBox
                                    mx={2}
                                    mt={-3}
                                    py={1}
                                    px={6}
                                    variant="gradient"
                                    bgColor="info"
                                    borderRadius="lg"
                                    coloredShadow="info"
                                >
                                    <MDTypography variant="h5" color="white">
                                        Декларации
                                    </MDTypography>
                                </MDBox>
                            </MDBox>
                            
                            <MDBox pt={3} mx={2} >

                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
            {/* <Footer /> */}
        </DashboardLayout>
    );
}

export default Users;



