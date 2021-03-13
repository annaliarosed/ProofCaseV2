import React from "react";
import styles from "./Footer.module.scss";
import smallLogo from "../images/smallLogo.png";

const Footer = () => (
  <div className={styles.container}>
    <p>
      Disclaimers and legal verbiage. I will come up with some disclaimers and
      legal verbiage (especially in connection with the tastings), as well as
      some form contracts/ waivers that we will probably have to use, to keep us
      out of legal trouble. ;-)
    </p>
    <img src={smallLogo} alt="small logo" />
  </div>
);

export default Footer;
