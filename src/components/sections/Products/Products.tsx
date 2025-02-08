import { BarlowCondensedFont800 } from "@/app/fonts";
import { HoverCard } from "../shared/HoverCard/HoverCard";
import styles from "./Products.module.css";
import Container from "@/assets/images/container.png";
import FuelContainer from "@/assets/images/container1.png";
import ManContainer from "@/assets/images/container_man.png";
import StepContainer from "@/assets/images//step_container.png";
import "photoswipe/dist/photoswipe.css";
import { GallerySection } from "@/components/sections/Gallery/Gallery";

export const Products = () => {
  return (
    <section>
      <div className={styles.innerWrapper}>
        <span className={styles.decorator}></span>
        <h2 className={`${styles.header} ${BarlowCondensedFont800.className}`}>
          Poznaj naszą ofertę zbiorników paliwa
        </h2>
        <p className={styles.subheader}>
          Oferujemy w szerokim asortymencie (duży wybór pojemności) do różnych
          typów samochodów ciężarowych:
        </p>
        <div className={styles.cardWrapper}>
          <HoverCard
            type={"Aluminiowe"}
            src={FuelContainer.src}
            description={
              "Wytrzymałe, lekkie i odporne na korozję – aluminiowe zbiorniki paliwa to idealne rozwiązanie dla maksymalnej efektywności i długiej żywotności."
            }
          />
          <HoverCard
            type={"Łączone"}
            src={ManContainer.src}
            description={
              "Większa pojemność i optymalne wykorzystanie przestrzeni – zbiorniki łączone to doskonałe rozwiązanie dla wymagających transportów."
            }
          />
          <HoverCard
            type={"ze stopniem"}
            src={StepContainer.src}
            description={
              "Funkcjonalność i wygoda – zbiorniki ze stopniem ułatwiają dostęp do kabiny, łącząc ergonomię z najwyższą jakością wykonania."
            }
          />
          <HoverCard
            type={"Z podporami"}
            src={Container.src}
            description={
              "Stabilność i bezpieczeństwo w każdych warunkach – zbiorniki z podporami zapewniają solidne mocowanie i niezawodność na długie trasy."
            }
          />
        </div>
        <GallerySection />
      </div>
    </section>
  );
};
