import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.innerWrapper}>
        <li>strona główna</li>
        <li>Oferta</li>
        <li>Zamówienia</li>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
};
