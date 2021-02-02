import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./mainContent.module.css";

const MainContent = (props) => {
  const history = useHistory();

  const goToMaker = (e) => {
    e.preventDefault();
    history.push("/main/cardMaker");
  };

  const goToScheduler = (e) => {
    e.preventDefault();
    history.push("/main/scheduler");
  };

  return (
    <section className={styles.container}>
      <button className={styles.makerBtn} onClick={goToMaker}>
        card maker
      </button>
      <button className={styles.scheduleBtn} onClick={goToScheduler}>
        scheduling
      </button>
    </section>
  );
};

export default MainContent;
