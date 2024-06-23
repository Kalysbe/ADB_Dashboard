import React, { useState } from 'react';
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';
import MDBox from "components/MDBox";


const InputFile = styled('input')({
  display: 'none',
  border:'1px solid red',
  width:'0px',
  height:'0px'
});

function parseXML(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "application/xml");

  const receipts = xmlDoc.getElementsByTagName('receipt');
  if (receipts.length === 0) {
    a
  }
  const receiptArray = [];

  for (let i = 0; i < receipts.length; i++) {
    const receipt = receipts[i];

    const contractorNameElement = receipt.getElementsByTagName('contractorName')[0];
    const createdDateElement = receipt.getElementsByTagName('createdDate')[0];
    const totalCostElement = receipt.getElementsByTagName('totalCost')[0];
    const documentStatusNameElement = receipt.getElementsByTagName('documentStatusName')[0];

    if (!contractorNameElement || !createdDateElement || !totalCostElement || !documentStatusNameElement) {
      throw new Error('Invalid XML structure: Missing required elements inside <receipt>.');
    }

    const documentStatusName = receipt.getElementsByTagName('documentStatusName')[0].textContent;
    if (documentStatusName === 'Принят') {
    receiptArray.push({
      contractorName: receipt.getElementsByTagName('contractorName')[0].textContent,
      createdDate: receipt.getElementsByTagName('createdDate')[0].textContent,
      totalCost: parseFloat(receipt.getElementsByTagName('totalCost')[0].textContent), // Парсим totalCost как float
    });
  }
  }

  return receiptArray;
}

function getQuarter(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Месяцы от 0 до 11
  if (month <= 3) return 1;
  if (month <= 6) return 2;
  if (month <= 9) return 3;
  return 4;
}

function groupByYearAndQuarter(receipts) {
  const years = {};

  receipts.forEach(receipt => {
    const date = new Date(receipt.createdDate);
    const year = date.getFullYear();
    const quarter = getQuarter(receipt.createdDate);

    if (!years[year]) {
      years[year] = {};
    }
    if (!years[year][quarter]) {
      years[year][quarter] = {
        receipts: [],
        total: 0,
      };
    }

    years[year][quarter].receipts.push(receipt);
    years[year][quarter].total += receipt.totalCost;
  });

  return years;
}

function XMLParser({ onUpdateReceipts }) {
  const [receipts, setReceipts] = useState([]);
  const [years, setYears] = useState({});

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.name.endsWith('.xml')) {
        alert('Please select a valid XML file.');
        return;
      }


      const reader = new FileReader();
      reader.onload = function (e) {
        const xmlContent = e.target.result;
        const parsedReceipts = parseXML(xmlContent);
        setReceipts(parsedReceipts);

        const groupedYears = groupByYearAndQuarter(parsedReceipts);
        setYears(groupedYears);

        onUpdateReceipts(groupedYears); // Обновляем данные в родительском компоненте
       
      };
      reader.readAsText(file);
    }
  };
 
  return (
    <MDBox>
      <Typography variant="h4" gutterBottom>Финансовые данные клиента</Typography>
      <label htmlFor="fileInput" style={{width:'150px'}}>
        <InputFile accept=".xml"  id="fileInput" type="file" onChange={handleFileChange} />
        <Button variant="contained"  component="span" style={{color:'white'}}>Загрузить XML</Button>
      </label>
      {Object.keys(years).length > 0 && (
        <>
          {Object.keys(years).sort().map(year => (
            <div key={year}>
              {Object.keys(years[year]).sort().map(quarter => (
                <div key={quarter}>
                  <Typography variant="h5" gutterBottom sx={{mt:4}}>{year} |  {quarter} - Квартал </Typography>
                  <TableContainer component={Paper}>
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
                            <TableCell align='right'>{receipt.totalCost.toFixed(2)}</TableCell>
                
                          </TableRow>
                        ))}
                          <TableRow>
                              <TableCell colSpan={3}>
                            <Typography variant="h6" align='right' gutterBottom>
                             Итоги: {years[year][quarter].total.toFixed(2)}
                            </Typography>
                          
                              </TableCell>
                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </MDBox>
  );
}

export default XMLParser;
