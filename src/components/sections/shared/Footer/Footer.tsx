import { BarlowCondensedFont500 } from "@/app/fonts";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.section} id={"footer"}>
      <div className={styles.innerWrapper}>
        <div className={styles.companySummary}>
          <h2 className={styles.header}>Na polskim rynku od 1990 roku</h2>
          <div className={styles.textRegular}>
            <p>
              Jesteśmy od lat na rynku polskim strategicznym partnerem handlowym
              głównych producentów oryginalnych zbiorników paliwowych.
            </p>
            <p className={styles.copyright}>©1990-2024 Waldapol.</p>
            <p>Wszelkie prawa zastrzeżone. </p>
          </div>
        </div>
        <div className={styles.contactInfoWrapper}>
          <div>
            <p
              className={`${BarlowCondensedFont500.className} ${styles.contactType} ${styles.firstContactCategoryType}`}
            >
              Kontakt telefoniczny
            </p>
            <p className={styles.textRegular}>068 384 53 92</p>
          </div>
          <div>
            <p
              className={`${BarlowCondensedFont500.className} ${styles.contactType}`}
            >
              Kontakt mailowy
            </p>
            <p className={styles.textRegular}>waldapol@wp.pl</p>
          </div>
          <div>
            <p
              className={`${BarlowCondensedFont500.className} ${styles.contactType}`}
            >
              Adres firmowy
            </p>
            <div className={styles.textRegular}>
              <p>WALDAPOL</p>
              <p>64-225 Kopanica,</p>
              <p>ul. Zamkowa 6</p>
              <p>Polska</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
