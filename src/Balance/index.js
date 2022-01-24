import {styles, state} from'./styles.js';
const balance = 53200

function Balance() {
  return (
    <section style={styles}>
      <div style={state}>{`Balance: $ ${balance}`}</div>
    </section>
  );
}

export default Balance;