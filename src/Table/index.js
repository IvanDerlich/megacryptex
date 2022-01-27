import { styles, logoStyles, sellStyles, buyStyles } from'./styles.js';
import React from 'react';
import xrpLogo from '../assets/xrp_logo.png'
import btcLogo from '../assets/btc_logo.png'
import ethLogo from '../assets/eth_logo.jpeg'
import bchLogo from '../assets/bch_logo.png'
import adaLogo from '../assets/ada_logo.png'
import './styles.css'

function createData( sell, quote, logo, name, changeAbs, changeRel, buy, action) {
  return { sell, quote, logo, name, changeAbs, changeRel, buy, action };
}

const rows = [
  createData(64743.0, 'BTC', btcLogo, 'Bitcoin', 550.01, 0.86, 65364.4, 'sell'),
  createData(4568.9, 'ETH', ethLogo, 'Ethereum', 31.6387, 0.70, 4660.8, 'buy'),
  createData(1.1693, 'XRP', xrpLogo, 'XRP', 0.0014, 0.12  , 1.2018, null),
  createData(666.63, 'BCH', bchLogo, 'Bitcoin Cash', 6.42, 0.97  , 683.66, null),
  createData(2.0045, 'ADA', adaLogo, 'Cardano', -0.0039, -0.19  , 2.0655, null),
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
            {rows.map((row) =>(
              <tr key={row.quote}>
                <td className='transaction-cell sell-cell'>
                  <div style={row.action == 'sell'? sellStyles : {}}>{row.sell}</div>
                </td>
                <td className='market-row'>
                  <div className='logo-container'><img 
                    src={row.logo} className='coin-logo'
                  /></div>
                  <div className='market-row-right'>
                    <div className='cell-quote'>{row.quote}</div>
                    <div className='cell-name'>{row.name}</div>
                  </div>
                </td>
                <td className={`change-cell ${row.changeRel < 0 ? 'negative-change':''}`}>
                  <div>{row.changeAbs}</div>
                  <div>
                    {`${row.changeRel < 0 ? '\u25BE' : '\u25B4' } (${row.changeRel}%)`}
                  </div>
                </td>
                <td className='transaction-cell'>
                  <div style={row.action == 'buy'? buyStyles : {}}>{row.buy}</div>
                </td>
              </tr>
            ))}    
          </tbody>
        </table>
    </section>
  );
}

export default TableComponent;