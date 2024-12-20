import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.section}>
      <div className={styles.innerWrapper}>
        <div className={styles.companySummary}>
          <h2>Na polskim rynku od 1990 roku</h2>
          <p>
            Jesteśmy od lat na rynku polskim strategicznym partnerem handlowym
            głównych producentów oryginalnych zbiorników paliwowych.
          </p>
          <p>©1990-2024 Waldapol.</p>
          <p>Wszelkie prawa zastrzeżone. </p>
        </div>
        <div className={styles.contactInfoWrapper}>
          <div>
            <p>Kontakt telefoniczny</p>
            <p>068 384 53 92</p>
            <p>+48 600 445 663</p>
            <p>+48 604 231 058</p>
          </div>
          <div>
            <p>Kontakt mailowy</p>
            <p>waldapol@wp.pl</p>
          </div>
          <div>
            <p>Adres firmowy</p>
            <p>WALDAPOL</p>
            <p>64-225 Kopanica,</p>
            <p>ul. Zamkowa 6</p>
            <p>Polska</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
