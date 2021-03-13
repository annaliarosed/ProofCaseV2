import React from "react";
import AddOns from "./AddOns";
import Events from "./Events";
import Footer from "./Footer";
import styles from "./HomePage.module.scss";
import TopSection from "./TopSection";
import TravelKits from "./TravelKits";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <TopSection />
      <TravelKits />
      <AddOns />
      <Events />
      <Footer />
    </div>
  );
};

export default HomePage;
