import { BarlowCondensedFont800 } from "@/app/fonts";
import { HoverCard } from "../shared/HoverCard/HoverCard";
import styles from "./Products.module.css";

export const Products = () => {
  return (
    <section>
      <div className={styles.innerWrapper}>
        <span className={styles.decorator}>|</span>
        <h2 className={`${styles.header} ${BarlowCondensedFont800.className}`}>
          Poznaj naszą ofertę zbiorników paliwa
        </h2>
        <p className={styles.subheader}>
          Oferujemy w szerokim asortymencie (duży wybór pojemności) do różnych
          typów samochodów ciężarowych:
        </p>
        <div className={styles.cardWrapper}>
          <HoverCard />
          <HoverCard />
          <HoverCard />
          <HoverCard />
          <HoverCard />
        </div>
      </div>
    </section>
  );
};
