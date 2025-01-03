import { HoverCard } from "../shared/HoverCard/HoverCard";
import styles from "./Products.module.css";

export const Products = () => {
  return (
    <section>
      <div className={styles.innerWrapper}>
        <span>|</span>
        <h2>Poznaj naszą ofertę zbiorników paliwa</h2>
        <p>
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
