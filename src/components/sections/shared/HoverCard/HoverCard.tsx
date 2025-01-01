import styles from "./HoverCard.module.css";

export const HoverCard = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div>
          <img
            className={styles.image}
            src="https://media.istockphoto.com/id/1406705759/pl/zdj%C4%99cie/stos-niebieskich-skrzynek-kontenerowych-z-t%C5%82em-nieba-wysy%C5%82ka-%C5%82adunk%C3%B3w-dla-logistyki-importu.jpg?s=2048x2048&w=is&k=20&c=5oE0dX2r57vVje-nEKCRra02ySWJCLhoscdwIvr5gAc="
            alt=""
          />
        </div>
        <div className={styles.textWrapper}>
          <p>Zbiorniki paliwa</p>
          <p>ze stopniem</p>
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
