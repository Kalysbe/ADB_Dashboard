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
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { CardContent, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TextField, Button } from '@mui/material';
import { useLocation, NavLink } from "react-router-dom";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";



import Swal from 'sweetalert2';






function Users() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [formAct, setFormAct] = useState('')
  const [userData, setUserData] = useState('')
  const { users } = useSelector(state => state.users);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const actAdd = 'add'
  const actUpd = 'upd'

 

  const reports = [
    { id: '102_4', name: 'Единая налоговая декларация физического лица, осуществляющего предпринимательскую деятельность (01.01.2022 -) (FORM STI-102_4)' }
  ]





  useEffect(() => {

  }, [dispatch, page, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };


  const onAdd = () => {
    setFormAct(actAdd)
    setOpen(true);
  };


  const handleClose = (value) => {
    setOpen(false);
  };


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
                    Выберите декларацию
                  </MDTypography>
                </MDBox>
               
              </MDBox>
              <MDBox mx={2}>
                <MDInput label="Поиск по декларациям"
                  value={searchTerm}
                  onChange={handleSearchChange} fullWidth />
              </MDBox>
              <MDBox pt={3} mx={2} >
                {/* <TableContainer>авы */}
                <Table>
                  <TableHead style={{ display: 'table-header-group' }}>
                    <TableRow>
                      <TableCell>Название</TableCell>
                      <TableCell>Действие</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {reports.map((item, key) => (
                      <TableRow key={key}>
                        <TableCell>
                          <MDTypography variant="h6" color="dark">
                          {item.name}
                          </MDTypography>
                        </TableCell>
                        <TableCell>
                          <MDButton
                            variant="outlined"
                            color="info"
                            size="small"
                            component={NavLink}
                            to={`/declaration/${item.id}`}
                           
                          >
                            Заполнить
                          </MDButton>
                        </TableCell>
                      </TableRow>
                    ))}


                  </TableBody>
                </Table>
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



