import React from "react";
import styles from "./Events.module.scss";

const Events = () => (
  <div className={styles.container}>
    <div className={styles.columnOne}>
      <h1 className={styles.header}>Host an event</h1>
    </div>

    <div className={styles.eventsContainer}>
      <div className={styles.eventWrapper}>
        <h2>Virtual tastings/fundraisers</h2>
        <p>
          Ask us about hosting a tasting for charitable events. We have worked
          with local non-profits to raise money for great causes. Filling these
          kits with some quality spirits and selling or rafing might help you
          raise funds for your own local causes.
        </p>
        <button className={styles.emailButton}>Email us</button>
      </div>

      <div className={styles.eventWrapper}>
        <h2>Blind tastings</h2>
        <p>
          We can work with you to prepare up to 18 kits with nine special
          bottles that are packaged up for a tasting. Ask us about packaging up
          your rare picks for a blind tasting with a sealed reveal list in a
          separate envelope to make sure that no one brings their preconceived
          notions to the table.
        </p>
        <button className={styles.emailButton}>Email us</button>
      </div>
    </div>
  </div>
);

export default Events;
