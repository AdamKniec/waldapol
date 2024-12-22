import styles from "./Cooperation.module.css";

export const Cooperation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.innerWrapper}>
        <div className={styles.textWrapper}>
          <h2>Merchendising</h2>
          <p>Zapraszamy do współpracy firmy z Polski i zagranicy</p>
          <p>Oferujemy wyjątkowo korzystne warunki współpracy.</p>
          <p>
            Oferowane przez nas zbiorniki paliwa oraz nasze bogate doświadczenie
            i ugruntowana pozycja na rynku sprawiają, że nasza firma jest
            solidnym partnerem w biznesie.
          </p>
        </div>
        <div>
          <img />
        </div>
      </div>
    </section>
  );
};
