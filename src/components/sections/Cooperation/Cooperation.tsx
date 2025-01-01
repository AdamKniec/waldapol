import { BarlowCondensedFont800 } from "@/app/fonts";
import styles from "./Cooperation.module.css";
import Image from "next/image";
import workerImage from "@/assets/images/worker.png";

export const Cooperation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.innerWrapper}>
        <div className={styles.textWrapper}>
          <h2>Merchendising</h2>
          <p className={`${BarlowCondensedFont800.className} ${styles.header}`}>
            Zapraszamy do współpracy firmy z Polski i zagranicy
          </p>
          <div className={styles.innerTextWrapper}>
            <p className={`${styles.paragraphRegular} ${styles.spacing}`}>
              Oferujemy wyjątkowo korzystne warunki współpracy.
            </p>
            <p className={`${styles.paragraphRegular} ${styles.spacing}`}>
              Oferowane przez nas zbiorniki paliwa oraz nasze bogate
              doświadczenie i ugruntowana pozycja na rynku sprawiają, że nasza
              firma jest solidnym partnerem w biznesie.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={workerImage}
            alt="Pracownik zajmujący się spawaniem"
            width={700}
            height={765}
          />
        </div>
      </div>
    </section>
  );
};
