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
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import { fetchUsers, fetchDeleteUser } from '../../redux/actions/users';
import Swal from 'sweetalert2';

function SimpleDialog(props) {
  const { onClose, selectedValue, open , formAct , user} = props;


  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle> {formAct === 'add' ? 'Добавление' : 'Редактирование'} пользователя </DialogTitle>
      <DialogContent>
        <MDBox >
          <MDBox my={1}>
            <MDInput fullWidth label="Логин" value={user.login}/>
          </MDBox>
          <MDBox my={1}>
            <MDInput fullWidth label="Имя" value={user.fullName} />
          </MDBox>
          <MDBox my={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Роль пользователя {user.fullName}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user.role}
                label="Роль пользователя"
                // onChange={12}
              >
                <MenuItem value={1}>Главный админ</MenuItem>
                <MenuItem value={2}>Модератор</MenuItem>
                <MenuItem value={5}>Гость</MenuItem>
              </Select>
            </FormControl>
          </MDBox>
        </MDBox>
      </DialogContent>
      <DialogActions>
        <MDButton color="error" onClick={handleClose}>Закрыть</MDButton>
        <MDButton variant="contained" color="info" onClick={handleClose}>Сохранить</MDButton>
      </DialogActions>
    </Dialog>
  )

}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  formAct:PropTypes.string.isRequired,
  user: PropTypes.array.isRequired
};




function Users() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [formAct , setFormAct] = useState('')
  const [userData , setUserData] = useState('')
  const { users } = useSelector(state => state.users);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const actAdd = 'add'
  const actUpd = 'upd'

  const actUser = {
    login: ''
  }
  


  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    dispatch(fetchUsers({ page, searchTerm }));
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


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SimpleDialog
        
        open={open}
        onClose={handleClose}
        formAct={formAct}
        user={userData}
      />
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
                    {users.items.map((item, index) => (
                      <TableRow key={index}>
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
                            to={`/declaration/${1}`}
                            onClick={() => onEdit(item._id)}>
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



