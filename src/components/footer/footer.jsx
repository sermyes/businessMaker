import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo((props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>
        Created by <span className={styles.name}>Lee sehoon</span>
      </p>
      <div className={styles.contactContainer}>
        <a href="mailto:sermyes@gmail.com" className={styles.contact}>
          <i className={`${styles.icon} far fa-envelope`}></i>
        </a>
        <a href="tel:010-6807-5339" className={styles.contact}>
          <i className={`${styles.icon} fas fa-phone-alt`}></i>
        </a>
        <a
          href="https://github.com/sermyes/businessMaker"
          className={styles.contact}
        >
          <i className={`${styles.icon} fab fa-github`}></i>
        </a>
      </div>
    </footer>
  );
});

export default Footer;
