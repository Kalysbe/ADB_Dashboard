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
import { fetchClientById } from '../../../redux/actions/client';

import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";


const formData = [
    { key: 'name', name: 'ФИО:' },
    { key: 'typeBusiness', name: 'Вид занятности:' },
    { key: 'tax', name: 'Ставка налога (%):' },


]

function Basic() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const emitent = useSelector(state => state.client.client);



    const isEmitentLoading = emitent.status === 'loading';
    const emitentData = emitent.data;
    const clientFinanceTotal = emitentData.financeSummary



    useEffect(() => {
        dispatch(fetchClientById(id))
    }, [id]);

    useEffect(() => {
        if (emitentData.finance) {
            setYears(emitentData.finance);
        }
    }, [emitentData.finance]);


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

                    <MDBox px={3} mt={2}>
                        <MDTypography variant="h4" gutterBottom>Финансовые данные клиента</MDTypography>
                        <Grid container spacing={3} mt={3}>
                            <Grid item xs={12} md={6} lg={3}>
                                <MDBox mb={1.5}>
                                    <ComplexStatisticsCard
                                        icon="leaderboard"
                                        title="Поступления"
                                        count={formatNumber(clientFinanceTotal?.totalCost)}
                                    />
                                </MDBox>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <MDBox mb={1.5}>
                                    <ComplexStatisticsCard
                                        color="info"
                                        icon="weekend"
                                        title="Налог"
                                        count={formatNumber(clientFinanceTotal?.taxAmount)}
                                    />
                                </MDBox>
                            </Grid>

                            <Grid item xs={12} md={6} lg={3}>
                                <MDBox mb={1.5}>
                                    <ComplexStatisticsCard
                                        color="info"
                                        icon="money"
                                        title="Прибыль"
                                        count={formatNumber(clientFinanceTotal?.totalCost - clientFinanceTotal?.taxAmount)}
                                    
                                    />
                                </MDBox>
                            </Grid>
                            
                            <Grid item xs={12} md={6} lg={3}>
                                <MDBox mb={1.5}>
                                    <ComplexStatisticsCard
                                        color="info"
                                        icon="store"
                                        title="Партнеры"
                                        count={clientFinanceTotal?.uniqueContractors}
                                    />
                                </MDBox>
                            </Grid>
                        </Grid>
                        {Object.keys(years).length > 0 && (
                            <>
                                {Object.keys(years).sort().map(year => (
                                    <div key={year}>
                                        {Object.keys(years[year]).sort().map(quarter => (
                                            <div key={quarter}>
                                                <MDTypography variant="h5" gutterBottom sx={{ mt: 4 }}>{year} |  {quarter} - Квартал </MDTypography>

                                                <Table>
                                                    <TableHead style={{ display: 'table-header-group' }}>
                                                        <TableRow>
                                                            <TableCell>Организация</TableCell>
                                                            <TableCell>Дата поставки</TableCell>
                                                            <TableCell>Сумма</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {years[year][quarter].receipts.map((receipt, index) => (
                                                            <TableRow key={index}>
                                                                <TableCell>{receipt.contractorName}</TableCell>
                                                                <TableCell>{receipt.createdDate}</TableCell>
                                                                <TableCell align='right'>{formatNumber(receipt.totalCost)}</TableCell>

                                                            </TableRow>
                                                        ))}
                                                        <TableRow>
                                                            <TableCell colSpan={3}>
                                                                <MDTypography variant="h6" align='right' gutterBottom>
                                                                    Итоги: {formatNumber(years[year][quarter].total)}
                                                                </MDTypography>

                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>

                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </>
                        )}
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
