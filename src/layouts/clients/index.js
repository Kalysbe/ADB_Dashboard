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
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import { fetchDeclarations } from '../../redux/actions/declarations';
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
  const { declarations } = useSelector(state => state.declarations);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);


  console.log(declarations)

  const actAdd = 'add'
  const actUpd = 'upd'





  useEffect(() => {
    dispatch(fetchDeclarations());
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
        dispatch(fetchDeleteUser(id)).then(() => {
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
                    onClick={onAdd}>
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
              <MDBox pt={3} mx={2} >
                {/* <TableContainer>авы */}
                <Table>
                  <TableHead style={{ display: 'table-header-group' }}>
                    <TableRow>
                      <TableCell>Название</TableCell>
                      <TableCell> отчета</TableCell>
                      <TableCell>Дата</TableCell>
                      <TableCell>Статус</TableCell>


                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {declarations.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <MDTypography variant="h6" color="dark">
                            {item.user.fullName}
                          </MDTypography>
                        </TableCell>
                        <TableCell>

                          <Link href={`/declaration/102_4/${item._id}`} color="info">
                            <MDTypography variant="body2" color="info">
                              {item.title}
                            </MDTypography>
                          </Link>

                        </TableCell>
                        <TableCell>
                          <MDTypography variant="h6" color="dark">
                            {item.updatedAt}
                          </MDTypography>
                        </TableCell>
                        <TableCell>
                          <MDTypography variant="h6" color="dark">
                            {item.status}
                          </MDTypography>
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

export default Declarations;



