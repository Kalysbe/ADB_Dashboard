import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Box, Container } from '@mui/material';
import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDButton from 'components/MDButton';

function TaxCar() {

  const [vehicleType, setVehicleType] = useState('');
  const [engineVolume, setEngineVolume] = useState('');
  const [usagePeriod, setUsagePeriod] = useState('');
  const [taxResult, setTaxResult] = useState('');

  // без двигателя
  const [vehiclePrice, setVehiclePrice] = useState('')
  const [vehicleTaxRate, setVehicleTaxRate] = useState('')
  const [taxResult2, setTaxResult2] = useState('');

  const calculateTax = () => {

    const volume = parseFloat(engineVolume);
    const period = parseFloat(usagePeriod);

    if (!isNaN(volume) && !isNaN(period)) {
      const correctionCoefficient = calculateCorrectionCoefficient(vehicleType, period);
      const taxValue = correctionCoefficient * volume;
      setTaxResult(taxValue.toFixed(2));
    } else {
      setTaxResult('Введите корректные значения');
    }
  };
  //Без двигателя
  const calculateTax2 = () => {

    const price = parseFloat(vehiclePrice);
    const rate = parseFloat(vehicleTaxRate);

    if (!isNaN(price) && !isNaN(rate)) {

      const taxValue2 = (price / 100) * rate
      setTaxResult2(taxValue2.toFixed(2));
    } else {
      setTaxResult2('Введите корректные значения');
    }
  };

  const calculateCorrectionCoefficient = (type, period) => {
    switch (type) {
      case 'Легковые автомобили, фургоны и пикапы на базе легковых автомобилей':
        switch (true) {
          case period <= 5:
            return 0.90;
          case period <= 10:
            return 0.75;
          case period <= 15:
            return 0.60;
          default:
            return 0.45;
        }
      case 'Грузовые автомобили, автобусы, микроавтобусы':
        switch (true) {
          case period <= 5:
            return 0.75;
          case period <= 10:
            return 0.60;
          case period <= 15:
            return 0.45;
          default:
            return 0.30;
        }
      case 'Самоходные машины и механизмы: тракторы, комбайны, дорожно-строительные машины':
        return period <= 15 ? 0.30 : 0.15;
      case 'Самоходные машины и механизмы (тракторы и комбайны), используемые в селхоз производстве':
        return period <= 15 ? 0.10 : 0.05;
      case 'Мотоциклы, мотороллеры, мопеды, мотосани и моторные лодки, катера, корабли, теплоходы':
        return period <= 10 ? 0.15 : 0.09;
      case 'Яхты и водные мотоциклы':
        return period <= 5 ? 1.8 : 1.2;
      default:
        return 1.0;
    }
  };

  return (
  
      // <Card id="delete-account">
        <MDBox pt={3}>
          {/* <Typography className="contact-box__title" variant='h5'>Расчет налога на имущество на транспортное средство</Typography> */}
          {/* <p className="contact-box__text">a) Объекты, имеющие двигатель внутреннего сгорания</p> */}
          <MDTypography variant="h5">a) Объекты, имеющие  двигатель с внутренним сгоранием</MDTypography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Объем двигателя"
                value={engineVolume}
                onChange={(e) => setEngineVolume(e.target.value)}
                fullWidth
                type="number"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Вид транспорта</InputLabel>
                <Select
                  style={{ height: '44px' }}
                  label="Вид транспорта"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <MenuItem value="">Выберите вид транспорта</MenuItem>
                  <MenuItem value="Легковые автомобили, фургоны и пикапы на базе легковых автомобилей">Легковые автомобили</MenuItem>
                  <MenuItem value="Грузовые автомобили, автобусы, микроавтобусы">Грузовые автомобили</MenuItem>
                  <MenuItem value="Самоходные машины и механизмы: тракторы, комбайны, дорожно-строительные машины">Самоходные машины</MenuItem>
                  <MenuItem value="Самоходные машины и механизмы (тракторы и комбайны), используемые в селхоз производстве">Сельхозтехника</MenuItem>
                  <MenuItem value="Мотоциклы, мотороллеры, мопеды, мотосани и моторные лодки, катера, корабли, теплоходы">Мототехника и водный транспорт</MenuItem>
                  <MenuItem value="Яхты и водные мотоциклы">Яхты и водные мотоциклы</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Срок эксплуатации</InputLabel>
                <Select
                  label="Срок эксплуатации"
                  value={usagePeriod}
                  onChange={(e) => setUsagePeriod(e.target.value)}>
                  <MenuItem value="">Выберите срок эксплуатации</MenuItem>
                  <MenuItem value="5">До 5 лет</MenuItem>
                  <MenuItem value="10">C 5 до 10 лет</MenuItem>
                  <MenuItem value="15">C 10 до 15 лет</MenuItem>
                  <MenuItem value="999">Свыше 15 лет</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <MDButton onClick={calculateTax} fullWidth variant="contained" color="info" style={{ backgroundColor: 'rgb(205, 179, 47)' }}  >
                Рассчитать
              </MDButton>
              <Typography variant="body1">Исчисление налоговой стоимости (сом): {taxResult}</Typography>
            </Grid>
          </Grid>
          <MDTypography variant="h5">б) Транспортные средства, не имеющие двигателя внутреннего сгорания</MDTypography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Балансовая стоимость (сом)"
                value={vehiclePrice}
                onChange={(e) => setVehiclePrice(e.target.value)}
                fullWidth
                type="number"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Ставка налога %"
                value={vehicleTaxRate}
                onChange={(e) => setVehicleTaxRate(e.target.value)}
                fullWidth
                type="number"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MDButton onClick={calculateTax2} variant="contained" color='info' style={{ backgroundColor: 'rgb(205, 179, 47)' }} className='vs-btn' fullWidth>
                Рассчитать
              </MDButton>
              <Typography variant="body1">Исчисление налоговой стоимости (сом): {taxResult2}</Typography>
            </Grid>
          </Grid>
        </MDBox>
      // </Card>

  );
};

export default TaxCar;



