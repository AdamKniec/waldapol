import Image from "next/image";
import styles from "./IntroSection.module.css";
import Logo from "@/assets/images/logo.svg";
import { BarlowCondensedFont800 } from "@/app/fonts";

export const IntroSection = () => {
  return (
    <section>
      <div className={styles.innerWrapper}>
        <Image src={Logo} width={154} height={220} alt="Waldapol" />
        <h1 className={BarlowCondensedFont800.className}>
          <span className={styles.textRed}>Zbiorniki</span>
          <span className={styles.textSecondary}>
            do samochodów ciężarowych
          </span>
        </h1>
        ;
      </div>
    </section>
  );
};
