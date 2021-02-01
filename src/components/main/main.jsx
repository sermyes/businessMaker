import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";

const Main = ({ authService }) => {
  const history = useHistory();

  const onSignout = () => {
    authService.signout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section>
      <Header onSignout={onSignout} />
      <section className={styles.container}>
        <div></div>
      </section>
      <Footer />
    </section>
  );
};

export default Main;
