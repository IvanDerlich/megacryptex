import { styles, p} from'./styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import './styles.css'


function Header() {
  return (
    <section style={styles}>
        <div><FontAwesomeIcon icon={faBars} size='3x'/></div>
        <div><p style={p}>megacryptex.com</p></div>
        <div><FontAwesomeIcon icon={faUser} size='3x'/></div>
    </section>
  );
}

export default Header;