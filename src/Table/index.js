import styles from'./styles.js';
import xrpLogo from '../assets/xrp_logo.png'


function Table() {
  return (
    <section style={styles}>
        <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
          <img src={xrpLogo} style={{width:'40px',height:'40px'}}/>
        </div>
        <p>Table</p>
    </section>
  );
}

export default Table;