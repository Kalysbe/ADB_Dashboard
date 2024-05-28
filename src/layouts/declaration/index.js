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
import { Link } from 'react-router-dom';
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
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import { fetchDeclarations } from '../../redux/actions/declarations';
import Swal from 'sweetalert2';







function Users() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [formAct, setFormAct] = useState('')
  const [userData, setUserData] = useState('')
  const { declarations } = useSelector(state => state.declarations);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const actAdd = 'add'
  const actUpd = 'upd'




  const reports = [
    { id: '102_4', name: 'Единая налоговая декларация физического лица, осуществляющего предпринимательскую деятельность (01.01.2022 -) (FORM STI-102_4)' }
  ]



  useEffect(() => {
    dispatch(fetchDeclarations());
  }, []);

  useEffect(() => {
    dispatch(fetchDeclarations({ page, searchTerm }));
  }, [dispatch, page, searchTerm]);

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
    setOpen(true);
  };

  const onEdit = (id) => {
    setFormAct(actUpd)
    setUserData(users.items.find(user => user._id == id))
    setOpen(true);
  }

  const handleClose = (value) => {
    setOpen(false);
  };

  const status = (value) => {
    switch (value) {
      case 1:
        return 'Сохранен';
      case 2:
        return 'На проверке';
      case 3:
        return 'Одобрен';
      case 0:
        return 'Отклонен';
      default:
        return 'foo';
    }
  }

  const title = (value) => {
    return reports.find(item => item.id == value ).name
  }


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
                <MDBox color="text" px={2}>
                  <MDButton variant="gradient" color="info"
                    component={NavLink}
                    to={`/declaration/types`}>
                    Создать
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>

                  </MDButton>
                </MDBox>
              </MDBox>
              <MDBox mx={2}>
                <MDInput label="Поиск по декларациям"
                  value={searchTerm}
                  onChange={handleSearchChange} fullWidth />
              </MDBox>
              <MDBox pt={3} mx={2} >

                <Table>
                  <TableHead style={{ display: 'table-header-group' }}>
                    <TableRow>
                      <TableCell>От</TableCell>
                      <TableCell>Название отчета</TableCell>
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

                          <Link to={`/declaration/102_4/${item._id}`} color="info">
                            <MDTypography variant="body2" color="info">
                              {item.title}
                            </MDTypography>
                          </Link>

                        </TableCell>
                        <TableCell>
                          <MDTypography variant="h6" color="dark">
                            {item.createdAt}
                          </MDTypography>
                        </TableCell>
                        <TableCell>
                          <MDTypography variant="h6" color="dark">
                            {status(item.status)}

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

export default Users;



