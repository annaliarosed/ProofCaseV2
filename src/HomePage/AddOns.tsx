import React from "react";
import oneOz from "../images/oneOz.png";
import twoOz from "../images/twoOz.png";
import styles from "./AddOns.module.scss";

const AddOns = () => (
  <>
    <h1 className={styles.header}>Add ons</h1>
    <div className={styles.cardsWrapper}>
      <div className={styles.card}>
        <h2>1 oz foam kit</h2>
        <div className={styles.imgWrapper}>
          <img src={oneOz} alt="1 ounce" />
          <span>1 oz</span>
        </div>
        <ul className={styles.list}>
          <li> 1 oz Foam Set (1) </li>
          <li>1 oz Boston Rounds (9)</li>
          <li>Glencairn Glass (1) </li>
        </ul>
        <h3>$37.99</h3>
        <button className={styles.button}>Buy on amazon</button>
      </div>
      <div className={styles.card}>
        <h2>2 oz foam kit</h2>
        <div className={styles.imgWrapper}>
          <img src={twoOz} alt="2 ounce" />
          <span>2 oz</span>
        </div>
        <ul className={styles.list}>
          <li> 2 oz Foam Set (1) </li>
          <li>2 oz Boston Rounds (9)</li>
          <li>Glencairn Glass (1) </li>
        </ul>
        <h3>$42.99</h3>
        <button className={styles.button}>Buy on amazon</button>
      </div>
      <div className={styles.bulkCard}>
        <div>
          <h2>Bulk orders</h2>
          <p>Ask us about bulk and wholesale pricing for large orders. </p>
        </div>
        <button className={styles.emailButton}>Buy on amazon</button>
      </div>
    </div>
  </>
);
export default AddOns;
