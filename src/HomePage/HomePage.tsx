import React from "react";
import AddOns from "./AddOns";
import Events from "./Events";
import Footer from "./Footer";
import styles from "./HomePage.module.scss";
import TopSection from "./TopSection";
import TravelKits from "./TravelKits";
import backgroundPhoto from "../images/backgroundPhoto.png";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <img
        src={backgroundPhoto}
        alt="background"
        className={styles.backgroundPhoto}
      />
      <TopSection />
      <TravelKits />
      <AddOns />
      <Events />
      <Footer />
    </div>
  );
};

export default HomePage;
