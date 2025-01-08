import { BarlowCondensedFont500, BarlowCondensedFont800 } from "@/app/fonts";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <section>
      <div className={styles.innerWrapper}>
        <div className={styles.imageWrapper}>
          <iframe
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kopanica Spacerowa 6&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="588"
            height="1058"
            style={{ border: 0 }}
            aria-hidden="false"
            className={styles.map}
          />
        </div>
        <div className={styles.mainContentWrapper}>
          <h2 id="contact-form">Zamów teraz</h2>
          <p className={`${BarlowCondensedFont800.className} ${styles.header}`}>
            Oferujemy zbiorniki paliwowe najwyższej jakości
          </p>
          <p className={styles.paragraphRegular}>
            W celu złożenia zamówienia na zbiorniki paliwa lub zapytania
            ofertowego prosimy o skorzystanie z formularza kontaktowego poniżej
            lub tradycyjnie poprzez kontakt telefoniczny lub mailowy.
          </p>
          <div className="">
            <form action="" className={styles.form}>
              <input
                className={`${styles.input} ${BarlowCondensedFont500.className}`}
                type="text"
                placeholder="Imię i nazwisko"
              />
              <input
                className={`${styles.input} ${BarlowCondensedFont500.className}`}
                type="text"
                placeholder="adres email"
              />
              <input
                className={`${styles.input} ${BarlowCondensedFont500.className}`}
                type="text"
                placeholder="numer telefonu"
              />
              <textarea
                className={`${styles.input} ${BarlowCondensedFont500.className} ${styles.textArea}`}
                placeholder="treść zapytania ofertowego"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
