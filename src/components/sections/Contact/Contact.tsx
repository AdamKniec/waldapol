import { BarlowCondensedFont500, BarlowCondensedFont800 } from "@/app/fonts";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section>
      <div className={styles.innerWrapper}>
        <div className={styles.mainContentWrapper}>
          <h2
            id="contact"
            className={`${styles.decorativeHeader} ${BarlowCondensedFont500.className}`}
          ></h2>
          <p className={`${BarlowCondensedFont800.className} ${styles.header}`}>
            Oferujemy zbiorniki paliwowe najwyższej jakości
          </p>
          <p className={styles.paragraphRegular}>
            W celu złożenia zamówienia na zbiorniki paliwa lub zapytania
            ofertowego prosimy o kontakt telefoniczny lub mailowy.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <iframe
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kopanica zamkowa 6&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="588"
            height="1058"
            style={{ border: 0 }}
            aria-hidden="false"
            className={styles.map}
          />
        </div>
      </div>
    </section>
  );
};
