import { styles, logoStyles } from'./styles.js';
import xrpLogo from '../assets/xrp_logo.png'
import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: 'red'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Frozen', 159, 6.0, 24),
  createData('Ice cream', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Frozen', 159, 6.0, 24),
  createData('Ice cream', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Frozen ', 159, 6.0, 24),
  createData('Ice cream', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Frozen', 159, 6.0, 24),
  createData('Ice cream', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

function TableComponent() {
  return (
    <section className='table-section' style={styles}>
        <div style={logoStyles}>
          <img src={xrpLogo} style={{width:'50px',height:'50px'}} alt='coin logo'/>
        </div>
        <TableContainer component={Paper} style={{overflow:'hidden'}}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell > <div className='table-header-cell'>SELL</div></StyledTableCell>
                <StyledTableCell align="right">
                  <div className='table-header-cell'>MARKET</div>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div className='table-header-cell'>CHANGE</div>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div className='table-header-cell'>BUY</div>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell  scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </section>
  );
}

export default TableComponent;