import { BarlowCondensedFont800 } from "@/app/fonts";
import styles from "./HoverCard.module.css";
import Image from "next/image";


interface HoverCardProps {
  type: string
  src: string
}


export const HoverCard = (props: HoverCardProps) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div>
          <Image
            width={278}
            height={176}
            src={props.src}
            alt="Fuel container"
          />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.productName}>Zbiorniki paliwa</p>
          <p
            className={`${styles.productType} ${BarlowCondensedFont800.className}`}
          >
            {props.type}
          </p>
          <p className="hiddenText">
            Wytrzymałość, precyzja i niezawodność – nasze stalowe zbiorniki
            paliwa do ciężarówek to gwarancja bezpiecznego transportu na każdym
            kilometrze. Stworzone z myślą o długiej żywotności i łatwej
            instalacji, dostosowane do Twoich potrzeb.
          </p>
        </div>
      </div>
    </div>
  );
};
