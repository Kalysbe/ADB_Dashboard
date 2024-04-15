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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";



function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Справочник
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {/* <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                /> */}
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <MDTypography variant="h5" color="dark">
                      Исчисление налога на имущество на транспортное средство, работающее на двигателе внутреннего сгорания
                    </MDTypography>

                  </AccordionSummary>
                  <AccordionDetails>
                    <table style={{width:'70%'}}>
                      <thead>
                        <tr>
                          <td width="281">
                            <strong>Вид транспорта</strong>
                          </td>
                          <td width="167">
                            <strong>Сроки эксплуатации, </strong><strong>включая год</strong>
                            <strong>выпуска заводом- изготовителем</strong>
                          </td>
                          <td width="174">
                            <strong>Базовая налоговая </strong>
                            <strong>стоимость, сомов на 1 куб.см </strong>
                            <strong>рабочего объема двигателя</strong>
                          </td>
                        </tr>
                      </thead>
                  
                      <tbody>
                        <tr>
                          <td rowspan="4" width="281">
                            Легковые автомобили, фургоны и пикапы на базе легковых автомобилей
                          </td>
                          <td width="167">
                            до 5 лет
                          </td>
                          <td width="174">
                            90
                          </td>
                        </tr>
                        <tr>
                          <td width="167">
                            от 5 до 10 лет
                          </td>
                          <td width="174">
                            75
                          </td>
                        </tr>
                        <tr>
                          <td width="167">
                            от 10 до 15 лет
                          </td>
                          <td width="174">
                            60
                          </td>
                        </tr>
                        <tr>
                          <td width="167">
                            15 лет и более
                          </td>
                          <td width="174">
                            45
                          </td>
                        </tr>
                        <tr>
                          <td rowspan="4" width="281">
                            Грузовые автомобили, автобусы, микроавтобусы
                          </td>
                          <td width="167">
                            до 5 лет
                          </td>
                          <td width="174">
                            75
                          </td>
                        </tr>
                        <tr>
                          <td width="167">
                            от 5 до 10 лет
                          </td>
                          <td width="174">
                            60
                          </td>
                        </tr>
                        <tr>
                          <td width="167">
                            от 10 до 15 лет
                          </td>
                          <td width="174">
                            45
                          </td>
                        </tr>
                        <tr>
                          <td width="167">
                            15 лет и более
                          </td>
                          <td width="174">
                            30
                          </td>
                        </tr>
                        <tr>
                          <td rowspan="2" width="281">
                            Самоходные машины и/или механизмы: тракторы, комбайны, дорожно-строительные машины
                          </td>
                          <td width="167">
                            до 15 лет
                          </td>
                          <td width="174">
                            30
                          </td>
                        </tr>
                        <tr>
                          <td width="167">
                            15 лет и более
                          </td>
                          <td width="174">
                            15
                          </td>
                        </tr>
                        <tr>
                          <td rowspan="2" width="281">
                            из их числа: самоходные машины и/или механизмы (тракторы и комбайны), используемые в
                            сельскохозяйственном производстве
                          </td>
                          <td width="167">
                            до 15 лет
                          </td>
                          <td width="174">
                            10
                          </td>
                        </tr>
                        <tr>
                          <td width="167">
                            15 лет и более
                          </td>
                          <td width="174">
                            5
                          </td>
                        </tr>
                        <tr>
                          <td rowspan="2" width="281">
                            Мотоциклы, мотороллеры, мопеды, мотосани и моторные лодки, катера, корабли, теплоходы
                          </td>
                          <td width="167">
                            до 10 лет
                          </td>
                          <td width="174">
                            15
                          </td>
                        </tr>
                        <tr>
                          <td width="167">
                            10 лет и более
                          </td>
                          <td width="174">
                            9
                          </td>
                        </tr>
                        <tr>
                          <td rowspan="2" width="281">
                            Яхты и водные мотоциклы
                          </td>
                          <td width="167">
                            до 5 лет
                          </td>
                          <td width="174">
                            180
                          </td>
                        </tr>
                        <tr>
                          <td width="167">
                            5 лет и более
                          </td>
                          <td width="174">
                            120
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <ol start="3">
                      <li>Для исчисления налога на имущество на транспортное средство, работающее на двигателе внутреннего сгорания, налоговая база налога на имущество определяется на основании данных об объеме рабочего объема двигателя, указанных в техническом паспорте транспортного средства.</li>
                    </ol>
                    Налог на имущество на транспортное средство, работающее на двигателе внутреннего сгорания, не предусмотренное в части 2 настоящей статьи, исчисляется в порядке, предусмотренном статьей 406 настоящего Кодекса.
                    <ol start="4">
                      <li>Корректировочный коэффициент Кк устанавливается в зависимости от мощности двигателя легкового автомобиля, фургона и пикапа на базе легкового автомобиля в размерах:</li>
                    </ol>
                    <table>
                      <tbody>
                        <tr>
                          <td rowspan="2" width="176">
                            <strong>Объем </strong><strong>двигателя, куб.см</strong>
                          </td>
                          <td colspan="2" width="447">
                            <strong>Сроки эксплуатации, включая год выпуска заводом-изготовителем</strong>
                          </td>
                        </tr>
                        <tr>
                          <td width="184">
                            <strong>до 5 лет</strong>
                          </td>
                          <td width="262">
                            <strong>свыше 5 лет</strong>
                          </td>
                        </tr>
                        <tr>
                          <td width="176">
                            с 3000 до 4500
                          </td>
                          <td width="184">
                            2,5
                          </td>
                          <td width="262">
                            1
                          </td>
                        </tr>
                        <tr>
                          <td width="176">
                            с 4500 и выше
                          </td>
                          <td width="184">
                            3,0
                          </td>
                          <td width="262">
                            1
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    Корректировочный коэффициент для транспортных средств, работающих на двигателе внутреннего сгорания, по которым коэффициент не установлен настоящей статьей, принимается равным 1,0.
                    <ol start="5">
                      <li>Сумма налога на имущество на транспортное средство, работающее на двигателе внутреннего сгорания, определяется по формуле, предусмотренной в статье 380 настоящего Кодекса.</li>
                    </ol>
                    (В редакции Закона Кыргызской Республики от 3 апреля 2023 года № 78)
                  </AccordionDetails>
                </Accordion>
              </MDBox>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
