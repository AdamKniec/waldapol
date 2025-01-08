import { BarlowCondensedFont800 } from "@/app/fonts";
import styles from "./OfferIntro.module.css";
import { Button } from "../shared/Button/Button";

export const OfferIntro = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.innerWrapper}>
        <div>
          <h2
            className={`${BarlowCondensedFont800.className} ${styles.header}`}
          >
            Oferujemy zbiorniki paliwa do wszystkich typów samochodów
            ciężarowych
          </h2>
          <Button scrollTo="contact-form" />
        </div>
        <div className={styles.textWrapper}>
          <p className={`${styles.textBold} ${styles.spacing}`}>
            Jesteśmy od lat na rynku polskim strategicznym partnerem handlowym
            głównych producentów oryginalnych zbiorników paliwowych.
          </p>
          <p className={styles.spacing}>
            <span className={styles.paragraphRegular}>
              WALDAPOL to firma o ugruntowanej pozycji w sektorze zaopatrzenia w
              części zamienne i zbiorniki paliwa do takich marek jak
            </span>
            <span className={styles.textBold}>
               MAN, DAF, VOLVO, IVECO, MERCEDES, SCANIA, RENAULT i inne.
            </span>
          </p>
          <p className={`${styles.paragraphRegular} ${styles.spacing}`}>
            Posiadamy w ofercie pełen asortyment litrażowy i gabarytowy
            zbiorników oraz wszystkie akcesoria niezbędne do montażu i
            podłączenia zbiornika takie jak podpory, obejmy, korki, zawory
            spustowe itd.
          </p>
          <p className={styles.paragraphRegular}>
            Oferowane przez nas zbiorniki paliwa są najwyższej jakości, nasze
            doświadczenie w tej dziedzinie gwarantuje Państwu wysoką jakość i
            rzetelność obsługi.
          </p>
        </div>
      </div>
    </section>
  );
};
