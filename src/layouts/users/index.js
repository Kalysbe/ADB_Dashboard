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

import { fetchUsers, fetchAddUsers, fetchUpdateUsers, fetchDeleteUser } from '../../redux/actions/users';
import Swal from 'sweetalert2';

function SimpleDialog(props) {
  const dispatch = useDispatch();
  const { onClose, selectedValue, open, formAct, user } = props;
  const [data, setData] = useState('')
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const { _id, ...newUser } = user
    setData(newUser)
    setUserId(_id)
  }, [user]);


  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = async () => {
    try {

      if (formAct === 'upd') {
        console.log(data)
        dispatch(fetchUpdateUsers({ id: userId, data: data }));
      } else {
        console.log(data, 'datafetch')
        dispatch(fetchAddUsers(data));
      }

      handleClose();

      await Swal.fire({
        title: 'Успешно!',
        text: 'Данные успешно отправлены',
        icon: 'success',
        confirmButtonText: 'Ок'
      });


    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      await Swal.fire({
        title: 'Ошибка!',
        text: 'Произошла ошибка при отправке данных на сервер',
        icon: 'error',
        confirmButtonText: 'Ок'
      });
    }
  };

  console.log(data,'dataa')

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle> {formAct === 'add' ? 'Добавление' : 'Редактирование'} пользователя </DialogTitle>
      <DialogContent>
        <MDBox >
        <MDBox my={1}>
            <MDInput 
            fullWidth 
            label="Имя"
            name="fullName" 
            value={data.fullName} 
            onChange={handleChange}/>
          </MDBox>
          <MDBox my={2}>
            <FormControl fullWidth>
              <InputLabel>Роль пользователя</InputLabel>
              <Select
                label="Роль пользователя"
                name="role"
                value={data.role}
                onChange={handleChange}
              >
                <MenuItem value={1}>Главный админ</MenuItem>
                <MenuItem value={2}>Модератор</MenuItem>
                <MenuItem value={5}>Гость</MenuItem>
              </Select>
            </FormControl>
          </MDBox>
       
          <MDBox my={1}>
            <MDInput 
            fullWidth
             label="Логин" 
             name="login"
             value={data.login}
             onChange={handleChange}/>
          </MDBox>
        
          <MDBox my={1}>
            <MDInput 
            fullWidth
             label={formAct === 'add' ? 'Пароль' : 'Новый пароль'} 
             name="password"
             value={data.password} 
             onChange={handleChange}/>
          </MDBox>
          {/* {Object.keys(data).map((key) => (
            <MDBox my={2} key={key}>
              {key === 'role' ? (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Роль пользователя</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name={key}
                    value={data[key]}
                    label="Роль пользователя"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Главный админ</MenuItem>
                    <MenuItem value={2}>Модератор</MenuItem>
                    <MenuItem value={5}>Гость</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <MDInput
                  fullWidth
                  label={key}
                  type="text"
                  name={key}
                  value={data[key]}
                  onChange={handleChange}
                />
              )}
            </MDBox>
          ))} */}
        </MDBox>
      </DialogContent>
      <DialogActions>
        <MDButton color="error" onClick={handleClose}>Закрыть</MDButton>
        <MDButton variant="contained" color="info" onClick={onSubmit}>Сохранить</MDButton>
      </DialogActions>
    </Dialog>
  )

}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  formAct: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};




function Users() {
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
  const { users } = useSelector(state => state.users);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const myAccount = useSelector(state => state.auth.data)

  console.log(myAccount)

  const actAdd = 'add'
  const actUpd = 'upd'





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
                    Пользователи
                  </MDTypography>
                </MDBox>
                <MDBox color="text" px={2}>
                  <MDButton variant="gradient" color="dark"
                    onClick={onAdd}>
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    Новый пользователь
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
                      <TableCell>Логин</TableCell>
                      <TableCell>Имя</TableCell>
                      <TableCell>Роль</TableCell>
                      <TableCell>Действие</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <MDTypography variant="h6" color="dark">
                            {item.login}
                          </MDTypography>
                        </TableCell>
                        <TableCell>
                          <MDTypography variant="h6" color={myAccount?._id === item._id ? 'success' : 'dark'}>
                            {item.fullName}
                          </MDTypography>
                        </TableCell>
                        <TableCell>
                          <MDTypography variant="h6" color="dark">
                            {item.role}
                          </MDTypography>
                        </TableCell>
                        <TableCell>

                          <MDButton
                            variant="outlined"
                            color="info"
                            size="small"
                            onClick={() => onEdit(item._id)}
                          >
                            Редактировать
                          </MDButton>

                        {myAccount?._id !== item._id && (
                          <MDButton variant="outlined" color="error" size="small" style={{ marginLeft: '8px' }} onClick={() => onDelete(item._id)}>
                          Удалить
                        </MDButton>
                        )}
                          

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



