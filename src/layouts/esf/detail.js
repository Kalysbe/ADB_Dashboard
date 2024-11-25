// Basic.js
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink, useParams } from "react-router-dom";
import { Grid, Card, Container, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { fetchXmlById } from '../../redux/actions/xml';

import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";


const formData = [
    { key: 'name', name: 'ФИО:' },
    { key: 'typeBusiness', name: 'Вид занятности:' },
    { key: 'tax', name: 'Ставка налога (%):' },


]

const renderItem = (item, level = 0) => {
    // Если item - объект, перебирать его рекурсивно
    return Object.keys(item).sort().map((key) => {
        const value = item[key];

        // Проверяем, является ли значением объект или массив
        if (typeof value === "object" && value !== null) {
            return (
                <TableRow key={key}>
                    <TableCell width="30%" style={{ paddingLeft: `${level * 20}px` }}>
                        <MDTypography variant="h6" color="dark">
                            {key}
                        </MDTypography>
                    </TableCell>
                    <TableCell>
                        <Table>
                            <TableBody>{renderItem(value, level + 1)}</TableBody>
                        </Table>
                    </TableCell>
                </TableRow>
            );
        } else {
            // Если значение не объект, просто отображаем его
            return (
                <TableRow key={key}>
                    <TableCell width="30%" style={{ paddingLeft: `${level * 20}px` }}>
                        <MDTypography variant="h6" color="dark">
                            {key}
                        </MDTypography>
                    </TableCell>
                    <TableCell>
                        <MDTypography variant="h6" color="dark">
                            {value?.toString() ?? "Неизвестно"}
                        </MDTypography>
                    </TableCell>
                </TableRow>
            );
        }
    });
};

function Basic() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { esfDetail, status } = useSelector(state => state.xml);


    console.log(esfDetail)


    useEffect(() => {
        dispatch(fetchXmlById(id))
    }, [id]);




    const [years, setYears] = useState({});

    const formatNumber = (number, locale = 'en-US') => {
        if (typeof number !== 'number') {
            return 'Invalid number';
        }
        return number.toLocaleString(locale, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).replace(/,/g, ' '); // Убираем запятые
    };

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
                                Детали ЭСФ
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox px={3} mt={2}>
                        <MDTypography align='center' variant="h3" mr={2}>  </MDTypography>

                        {esfDetail?.data?.map((item, index) => (
                            <Table key={index}>
                                <TableBody>{renderItem(item)}</TableBody>
                            </Table>
                        ))}



                    </MDBox>



                    <MDBox px={3} display="flex" alignItems="center" justifyContent="end">
                        <MDButton
                            variant="outlined"
                            color="info"
                            size="small"
                            style={{ marginRight: '12px' }}
                            component={NavLink}
                            to={`/client/${id}/edit`}
                        >
                            Скачать
                        </MDButton>

                    </MDBox>
                </MDBox>
            </Card>

        </DashboardLayout>
    );
}

export default Basic;
