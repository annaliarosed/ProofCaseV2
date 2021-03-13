import React from "react";
import oneOz from "../images/oneOz.png";
import twoOz from "../images/twoOz.png";
import styles from "./TravelKits.module.scss";

const TravelKits = () => {
  return (
    <>
      <h1 className={styles.header}>Travel kits</h1>
      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <h2>80 proof-er</h2>
          <div className={styles.imgWrapper}>
            <img src={oneOz} alt="1 ounce" />
            <span>1 oz</span>
          </div>

          <ul className={styles.list}>
            <li>Case (1)</li>
            <li>1 oz Foam Set (1) </li>
            <li>1 oz Boston Rounds (9)</li>
            <li>Glencairn Glass (1) </li>
          </ul>
          <h3>$64.99</h3>
          <button className={styles.button}>Buy on amazon</button>
        </div>

        <div className={styles.card}>
          <h2>100 proof-er</h2>
          <div className={styles.imgWrapper}>
            <img src={twoOz} alt="2 ounce" />
            <span>2 oz</span>
          </div>

          <ul className={styles.list}>
            <li>Case (1)</li>
            <li>2 oz Foam Set (1) </li>
            <li>2 oz Boston Rounds (9)</li>
            <li>Glencairn Glass (1) </li>
          </ul>
          <h3>$69.99</h3>
          <button className={styles.button}>Buy on amazon</button>
        </div>
        <div className={styles.card}>
          <h2>Full proof-er</h2>
          <div className={styles.imgWrapper}>
            <img src={oneOz} alt="1 ounce" />
            <span>1 oz</span>
          </div>
          <div className={styles.imgWrapper}>
            <img src={twoOz} alt="2 ounce" />
            <span>2 oz</span>
          </div>

          <ul className={styles.list}>
            <li>Case (1)</li>
            <li>1 oz Foam Set (1) </li>
            <li>2 oz Foam Set (1) </li>
            <li>1 oz Boston Rounds (9)</li>
            <li>2 oz Boston Rounds (9)</li>
            <li>Glencairn Glass (2) </li>
          </ul>
          <h3>$99.99</h3>
          <button className={styles.button}>Buy on amazon</button>
        </div>
      </div>
    </>
  );
};

export default TravelKits;
