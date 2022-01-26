import { styles, logoStyles } from'./styles.js';
import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import xrpLogo from '../assets/xrp_logo.png'
import btcLogo from '../assets/btc_logo.png'
import ethLogo from '../assets/eth_logo.jpeg'
import './styles.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    textAlign:'left',
  },
}));

function createData( sell, quote, logo, name, changeAbs, changeRel, buy) {
  return { sell, quote, logo, name, changeAbs, changeRel, buy };
}

const rows = [
  createData(64743.00, 'BTC', btcLogo, 'Bitcoin', 550.01, 0.86, 65364.41),
  createData(4568.9659, 'ETH', ethLogo, 'Ethereum', 31.6387, 0.70, 4660.8133),
];

function TableComponent() {
  return (
    <section className='table-section' style={styles}>
        <div style={logoStyles}>
          <img src={xrpLogo} style={{width:'50px',height:'50px'}} alt='coin logo'/>
        </div>
        <table>
          <thead>
            <tr>
              <th className='coins-table-header sell'>SELL</th>
              <th className='coins-table-header market'>MARKET</th>
              <th className='coins-table-header change'>CHANGE</th>
              <th className='coins-table-header buy'>BUY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
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
                <StyledTableRow key={row.quote}>
                  <StyledTableCell align="right" scope="row" padding='none'>
                    <div style={{
                      backgroundColor:'red',
                      height:'100%',
                      height: '4vh',
                      marginLeft: '2vw',
                      textAlign: 'center',
                      paddingTop: '1.5vw',
                      fontSize:'20px',  
                    }}>{row.sell}</div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div style={{display:'flex', flexDirection: 'row'}}>
                      <div><img 
                        src={row.logo} className='coin-logo'
                      /></div>
                      <div style={{textAlign:'left',paddingLeft:'8px'}}>
                        <div>{row.quote}</div>
                        <div>{row.name}</div>
                      </div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div style={{textAlign: 'rigth'}}>{row.changeAbs}</div>
                    <div style={{textAlign: 'rigth'}}>{`(${row.changeRel}%)`}</div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.buy}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </section>
  );
}

export default TableComponent;