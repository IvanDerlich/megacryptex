import styles from'./styles.js';

function Header() {
  return (
    <section style={styles}>
        <div><i class="fas fa-bars"></i></div>
        {/* https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react */}
        <div>megacryptex.com</div>
        <div>Usr</div>
    </section>
  );
}

export default Header;