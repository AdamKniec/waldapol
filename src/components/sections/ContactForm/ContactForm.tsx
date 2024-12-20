import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <section>
      <div className={styles.innerWrapper}>
        <h2>Zamów teraz</h2>
        <p>Oferujemy zbiorniki paliwowe najwyższej jakości</p>
        <p>
          W celu złożenia zamówienia na zbiorniki paliwa lub zapytania
          ofertowego prosimy o skorzystanie z formularza kontaktowego poniżej
          lub tradycyjnie poprzez kontakt telefoniczny lub mailowy.
        </p>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </section>
  );
};
