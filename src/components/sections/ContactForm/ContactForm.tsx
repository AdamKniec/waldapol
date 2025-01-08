import { BarlowCondensedFont500, BarlowCondensedFont800 } from "@/app/fonts";
import styles from "./ContactForm.module.css";
import Image from "next/image";
import MapImge from "@/assets/images/map.png";

export const ContactForm = () => {
  return (
    <section>
      <div className={styles.innerWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={MapImge}
            alt="Mapa przedstawiająca położenie firmy Waldapol"
            height={1058}
            width={588}
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
