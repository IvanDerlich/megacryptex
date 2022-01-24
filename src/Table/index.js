import { styles, logoStyles } from'./styles.js';
import xrpLogo from '../assets/xrp_logo.png'
import React from 'react';

function Table() {

  return (
    <section style={styles}>
        <div style={logoStyles}>
          <img src={xrpLogo} style={{width:'50px',height:'50px'}} alt='coin logo'/>
        </div>
    </section>
  );
}

export default Table;