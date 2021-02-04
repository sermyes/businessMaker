import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./noteMaker.module.css";

const NoteMaker = ({ authService, onSignout }) => {
  return (
    <section className={styles.section}>
      <Header onSignout={onSignout} />
      <section className={styles.container}>
        <h1>Note Maker</h1>
      </section>
      <Footer />
    </section>
  );
};

export default NoteMaker;
