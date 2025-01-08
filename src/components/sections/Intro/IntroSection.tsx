import Image from "next/image";
import styles from "./IntroSection.module.css";
import Logo from "@/assets/images/logo.svg";
import { BarlowCondensedFont800 } from "@/app/fonts";
import SteelContainer from "@/assets/images/steelContainer.png";

export const IntroSection = () => {
  return (
    <section>
      <div className={styles.innerWrapper}>
        <div className={styles.headerWrapper}>
          <Image
            src={Logo}
            width={154}
            height={220}
            alt="Waldapol"
            className={styles.logo}
          />
          <h1 className={BarlowCondensedFont800.className}>
            <span className={styles.textRed}>Zbiorniki</span>
            <span className={styles.textSecondary}>
              do samochodów ciężarowych
            </span>
          </h1>
        </div>
        <div className={styles.imagesWrapper}>
          <div>
            <Image
              width={340}
              height={210}
              src={SteelContainer}
              alt="Fuel container"
            />
          </div>
          <div>
            <Image
              width={340}
              height={210}
              src={SteelContainer}
              alt="Fuel container"
            />
          </div>
          <div>
            <Image
              width={340}
              height={210}
              src={SteelContainer}
              alt="Fuel container"
            />
          </div>
          <div>
            <Image
              width={340}
              height={210}
              src={SteelContainer}
              alt="Fuel container"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
