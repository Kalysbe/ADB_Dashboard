// Basic.js
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink, useParams } from "react-router-dom";
import { Grid, Card, Container, Table, TableBody, TableRow, TableCell } from '@mui/material';

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { fetchClientById } from '../../../redux/actions/client';


const formData = [
    { key: 'name', name: 'Имя' },

]

function Basic() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const emitent = useSelector(state => state.client.client);


    const isEmitentLoading = emitent.status === 'loading';
    const emitentData = emitent.data;


    useEffect(() => {
        dispatch(fetchClientById(id))
      }, [id]);


    console.log(emitentData)

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Card>
                <MDBox py={3}>
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
                               Профиль клиента
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox px={3} mt={2}>
                        <MDTypography align='center' variant="h3" mr={2}>  </MDTypography>
                        <Table>
                            <TableBody>
                                {formData.map((item, key) => (
                                    <TableRow key={key}>
                                        <TableCell width={'30%'}>
                                            <MDTypography variant="h6" color="dark">
                                                {item.name}
                                            </MDTypography>
                                        </TableCell>
                                        <TableCell fullwidth>
                                            <MDTypography variant="h6" color="dark">
                                                {emitentData[item.key]}
                                            </MDTypography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </MDBox>
                    <MDBox px={3} display="flex" alignItems="center" justifyContent="end">
                        <MDButton
                            variant="outlined"
                            color="info"
                            size="small"
                            style={{ marginRight: '12px' }}
                            component={NavLink}
                            to={`/emitent/${id}/edit`}
                        >
                            Редактировать
                        </MDButton>
                        <MDButton
                            variant="outlined"
                            color="error"
                            size="small"
                            
                        >
                          Удалить клиента
                        </MDButton>
                    </MDBox>
                </MDBox>
            </Card>
         
        </DashboardLayout>
    );
}

export default Basic;
