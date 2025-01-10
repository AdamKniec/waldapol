import { BarlowCondensedFont800 } from "@/app/fonts";
import { HoverCard } from "../shared/HoverCard/HoverCard";
import styles from "./Products.module.css";
import Container from "@/assets/images/container.png";
import FuelContainer from "@/assets/images/container1.png";
import ManContainer from "@/assets/images/container_man.png";
import StepContainer from "@/assets/images//step_container.png";

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
          <HoverCard type={"Aluminiowe"} src={FuelContainer.src}/>
          <HoverCard type={'Łączone'} src={ManContainer.src}/>
          <HoverCard type={'ze stopniem'} src={StepContainer.src}/>
          <HoverCard type={'Z podporami'} src={Container.src}/>
        </div>
      </div>
    </section>
  );
};
