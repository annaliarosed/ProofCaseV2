import React from "react";
import logo from "../images/logo.png";
import suitcase from "../images/suitcase.png";
import styles from "./TopSection.module.scss";

const TopSection = () => (
  <div className={styles.container}>
    <img src={logo} alt="logo" className={styles.logo} />
    <section className={styles.wrapper}>
      <img src={suitcase} alt="suitcase" />
      <h1 className={styles.header}>Connoisseur's travel kit</h1>
      <div className={styles.text}>
        <p>
          For too long, connoisseurs wishing to have a proper pour of
          top-quality bourbon, whiskey, armagnac, brandy, rum, tequila or
          otherwise have had to either drink below their palates when on the
          road, or strategically fill their travel bags and luggage with
          glassware and sample bottles wrapped in t-shirts, kitchen towels, or
          worse. To this we say, “no more.”
        </p>
        <p>
          Whether for yourself or that devotee of quality potent potables in
          your life, our must-have Connoisseur ’s Travel Kits are as practical
          as they are impressive. Treat yourself and your spirit(s) of choice
          with the dignity you both deserve, while leaving no doubt to those
          around you that you aren’t a “Joe SixPack” or “Bottom Shelf Betty”.
        </p>
      </div>
    </section>
  </div>
);

export default TopSection;
