import { styles, logoStyles } from'./styles.js';
import { useState } from 'react';
import Row from './Row'
import { data as tableData, logos } from './data'
import './styles.css'

function TableComponent() {
  const [selectionQuote, setSelectionQuote] = useState()
  return (
    <section className='table-section' style={styles}>
        <div style={logoStyles}>
          {selectionQuote && (<img 
            src={logos[selectionQuote]}
            style={{width:'50px',height:'50px'}}
            alt='coin logo'
          />)}
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
            {tableData.map((rowData) =>(
              <Row 
                data={rowData}
                key={rowData.quote}
                selectionQuote={selectionQuote}
                setSelectionQuote={setSelectionQuote}
            />))}    
          </tbody>
        </table>
    </section>
  );
}

export default TableComponent;