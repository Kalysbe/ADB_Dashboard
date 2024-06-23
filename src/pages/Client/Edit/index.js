import React, { useEffect, useState } from 'react';
import { useNavigate, Navigate, useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Card, Container } from '@mui/material';
import Swal from 'sweetalert2';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { selectIsAuth } from '../../../redux/slices/auth';
import { fetchClientById, fetchAddClient, fetchUpdateClient } from '../../../redux/actions/client';


import XMLParser from './XmlParser';
const formConfig = [
  { key: 'name', label: 'ФИО', type: "text" },
  { key: 'typeBusiness', label: 'Вид бизнеса', type: "list", option: 'businessTypes' },
  { key: 'tax', label: 'Налоговая ставка', type: "number" },

];

const businessTypes = [
  { id: 1, name: 'Индивидуальный предприниматель ', value: 'ip' },
  { id: 2, name: 'ОсОО', value: 'ocoo' }
]

const optionsMap = {
  businessTypes: businessTypes,
};



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

  const [receiptsFromDB, setReceiptsFromDB] = useState([]);

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
    let response = ''

    try {
      if (!isEditing) {
        response = await dispatch(fetchAddClient(formData));
      } else {
        response = await dispatch(fetchUpdateClient({ id: id, data: formData }));
      }
      if (response.error) {
        throw new Error(response.error);
      }

      console.log(response, 'respons')

      const newId = response.payload._id;

      Swal.fire({
        title: 'Успешно!',
        text: 'Данные успешно отправлены',
        icon: 'success',
        confirmButtonText: 'Ок',
      }).then((result) => {
        if (result.isConfirmed) {
          if (!isEditing) {
            navigate(`/client/${newId}`)
          } else {
            navigate(`/client/${id}`)
          }
        }
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

  // Функция для обновления formData из XMLParser
  const updateFormDataFromXML = (receiptsData) => {
    const mergedReceipts = { ...receiptsFromDB, ...receiptsData }; // Объединяем receipts из базы и XML
    setFormData((prevData) => ({
      ...prevData,
      ['finance']: mergedReceipts,
    }));

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
              {formConfig.map(({ key, label, type, option }) => (
                <Grid sm={12} md={6} item key={key}> 
                  {type === 'list' ? (
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                      <Select
                        name={key}
                        value={formData[key]}
                        label={label}
                        onChange={handleChange}
                      >

                        {(optionsMap[option] || []).map(opt => (
                          <MenuItem key={opt.id} value={opt.value}>
                            {opt.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : (
                    <MDInput
                      fullWidth
                      label={label}
                      type={type}
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                    />
                  )}

                </Grid>
              ))}
            </Grid>
          </MDBox>



          <XMLParser onUpdateReceipts={updateFormDataFromXML} />



          <MDBox mt={4} display="flex" justifyContent="end">
            <MDButton
              color="error"
              component={NavLink}
              to={isEditing ? `/client/${id}` : '/clients'}
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
