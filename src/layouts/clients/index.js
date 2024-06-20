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
import { CardContent, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination, TextField, Button } from '@mui/material';
import { useLocation, NavLink } from "react-router-dom";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Link from '@mui/material/Link';
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
import CircularProgress from '@mui/material/CircularProgress';
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import { fetchClients, fetchDeleteClient } from '../../redux/actions/client';
import Swal from 'sweetalert2';





function Declarations() {
  const actUser = {
    login: '',
    fullName: '',
    role: '',
    password: ''
  }

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [formAct, setFormAct] = useState(actUser)
  const [userData, setUserData] = useState('')
  const { items, status } = useSelector(state => state.client.clients);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);


  const ClientList = items
  const LoaderStatus = status


  console.log(ClientList.length)


  const actAdd = 'add'
  const actUpd = 'upd'





  useEffect(() => {
    dispatch(fetchClients());
  }, []);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const onDelete = (id) => {
    Swal.fire({
      title: 'Вы правда хотите удалить?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Да, удалить!',
      cancelButtonText: 'Отмена',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(fetchDeleteClient(id)).then(() => {
          Swal.fire('Успешно!', 'Запись удалена', 'success');
        })
          .catch((error) => {
            MySwal.fire('Ошибка!', 'Не удалось удалить запись: ' + error.message, 'error');
          });
      }
    });
  };

  const onAdd = () => {
    setFormAct(actAdd)
    setUserData(actUser)
    setOpen(true);
  };

  const onEdit = (id) => {
    setFormAct(actUpd)
    const { _id, login, fullName, role, password } = users.items.find(user => user._id == id)
    setUserData({
      _id,
      login,
      fullName,
      role,
      password
    });
    setOpen(true);
  }

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
                    Клиенты
                  </MDTypography>
                </MDBox>
                <MDBox color="text" px={2}>
                  <MDButton variant="gradient" color="dark"
                        component={NavLink}
                        to={`/client/add`}>
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    Новый клиент
                  </MDButton>
                </MDBox>
              </MDBox>
              <MDBox mx={2}>
                <MDInput label="Поиск пользователей"
                  value={searchTerm}
                  onChange={handleSearchChange} fullWidth />
              </MDBox>
              {LoaderStatus === "loading" ? (
                <MDBox py='30px' sx={{ display: 'flex', justifyContent: 'center' }}>
                  <CircularProgress color='info' size='60px' />
                </MDBox>) : ClientList.length ? (
                  <MDBox pt={3} mx={2} >
                    <Table>
                      <TableHead style={{ display: 'table-header-group' }}>
                        <TableRow>
                          <TableCell>Имя</TableCell>
                          <TableCell>Тип</TableCell>
                          <TableCell>Действия</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {ClientList.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <MDTypography variant="h6" color="dark">
                                {item.name}
                              </MDTypography>
                            </TableCell>
                            <TableCell>
                              <MDTypography variant="h6" color="dark">
                                ИП
                              </MDTypography>
                            </TableCell>
                            <TableCell>
                              <MDButton variant="outlined" color="error" size="small" style={{ marginLeft: '8px' }} onClick={() => onDelete(item._id)}>
                                Удалить
                              </MDButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    {/* <TablePagination
                      component="div"
                      count={filteredRows.length}
                      page={page}
                      onPageChange={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      rowsPerPageOptions={[5, 10, 25]}
                    /> */}
                  </MDBox>
                ) : (
                <MDBox pt={3} mx={2} >
                  Пусто
                </MDBox>
              )}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Declarations;



