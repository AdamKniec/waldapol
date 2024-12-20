import styles from "./OfferIntro.module.css";

export const OfferIntro = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.innerWrapper}>
        <div>
          <h2>
            Oferujemy zbiorniki paliwa do wszystkich typów samochodów
            ciężarowych
          </h2>
          <button>zamów teraz</button>
        </div>
        <div>
          <p>
            Jesteśmy od lat na rynku polskim strategicznym partnerem handlowym
            głównych producentów oryginalnych zbiorników paliwowych.
          </p>
          <p>
            WALDAPOL to firma o ugruntowanej pozycji w sektorze zaopatrzenia w
            części zamienne i zbiorniki paliwa do takich marek jak MAN, DAF,
            VOLVO, IVECO, MERCEDES, SCANIA, RENAULT i inne.
          </p>
          <p>
            Posiadamy w ofercie pełen asortyment litrażowy i gabarytowy
            zbiorników oraz wszystkie akcesoria niezbędne do montażu i
            podłączenia zbiornika takie jak podpory, obejmy, korki, zawory
            spustowe itd.
          </p>
          <p>
            Oferowane przez nas zbiorniki paliwa są najwyższej jakości, nasze
            doświadczenie w tej dziedzinie gwarantuje Państwu wysoką jakość i
            rzetelność obsługi.
          </p>
        </div>
      </div>
    </section>
  );
};
