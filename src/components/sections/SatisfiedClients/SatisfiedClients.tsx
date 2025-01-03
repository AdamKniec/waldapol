import Image from "next/image";
import styles from "./SatisfiedClients.module.css";
import VolvoLogo from "@/assets/images/volvo-logo.svg";
import ScaniaLogo from "@/assets/images/scania-logo.svg";
import ManLogo from "@/assets/images/man-logo.svg";
import DafLogo from "@/assets/images/daf-logo.svg";
import RenaultLogo from "@/assets/images/renault-logo.svg";
import BenzLogo from "@/assets/images/benz-logo.svg";
import IvecoLogo from "@/assets/images/iveco-logo.svg";

export const SatisfiedClients = () => {
  return (
    <section className={styles.innerWrapper}>
      <div className={styles.contentWrapper}>
        <div>
          <h2>Zaufali nam</h2>
        </div>

        <div className={styles.customersWrapper}>
          <Image width={120} height={16} alt="Volvo" src={VolvoLogo} />
          <Image width={40} height={40} alt="Mercedes" src={BenzLogo} />
          <Image width={88} height={24} alt="Daf" src={DafLogo} />
          <Image width={72} height={40} alt="Man" src={ManLogo} />
          <Image width={90} height={20} alt="Iveco" src={IvecoLogo} />
          <Image width={30} height={40} alt="Renault" src={RenaultLogo} />
          <Image width={123} height={20} alt="Scania" src={ScaniaLogo} />
        </div>
      </div>
    </section>
  );
};
