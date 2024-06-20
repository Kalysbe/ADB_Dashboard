import React, { useEffect, useState } from 'react';
import { useNavigate, Navigate, useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Card, Container } from '@mui/material';
import Swal from 'sweetalert2';

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { selectIsAuth } from '../../../redux/slices/auth';
import { fetchClientById, fetchAddClient, fetchUpdateClient } from '../../../redux/actions/client';

const formConfig = [
  { key: "name", label: "Имя клиента", type: "text" },

];

const EditEmitent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const emitent = useSelector(state => state.client.client);
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState(
    formConfig.reduce((acc, { key }) => {
      acc[key] = '';
      return acc;
    }, {})
  );

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isEditing) {
      dispatch(fetchClientById(id));
    } else {
      setFormData(
        formConfig.reduce((acc, { key }) => {
          acc[key] = '';
          return acc;
        }, {})
      );
    }
  }, [dispatch, id, isEditing]);

  useEffect(() => {
    if (isEditing && emitent && emitent.data) {
      const { id, ...emitentData } = emitent.data;
      setFormData(emitentData);
    }
  }, [emitent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (isEditing) {
        await dispatch(fetchUpdateClient({ id, data: formData }));
      } else {
        await dispatch(fetchAddClient(formData));
      }

      Swal.fire({
        title: 'Успешно!',
        text: 'Данные успешно отправлены',
        icon: 'success',
        confirmButtonText: 'Ок',
      });
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      Swal.fire({
        title: 'Ошибка!',
        text: 'Произошла ошибка при отправке данных на сервер',
        icon: 'error',
        confirmButtonText: 'Ок',
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card style={{ padding: 30 }}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" py={1} mb={2}>
          <MDBox
            mt={-3}
            py={1}
            px={6}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h5" color="white">
              {isEditing ? 'Редактирование' : 'Добавление'} клиента
            </MDTypography>
          </MDBox>
        </MDBox>
        <form>
          <MDBox>
            <Grid container spacing={2}>
              {formConfig.map(({ key, label, type }) => (
                <Grid sm={12} md={4} item key={key}>
                  <MDInput
                    fullWidth
                    label={label}
                    type={type}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
            </Grid>
          </MDBox>
          <MDBox mt={4} display="flex" justifyContent="end">
            <MDButton
              color="error"
              component={NavLink}
              to={isEditing ? `/emitent/personalData/${id}` : '/emitents'}
              style={{ marginRight: '12px' }}
            >
              Назад
            </MDButton>
            <MDButton
              onClick={handleSubmit}
              disabled={loading}
              variant="gradient"
              color="info"
            >
              {isEditing ? 'Сохранить' : 'Добавить'}
            </MDButton>
          </MDBox>
        </form>
      </Card>
    </DashboardLayout>
  );
};

export default EditEmitent;
