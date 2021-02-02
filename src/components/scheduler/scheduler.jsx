import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./scheduler.module.css";

const Scheduler = (props) => {
  const history = useHistory();

  const goToMain = (e) => {
    e.preventDefault();
    history.push("/main");
  };

  return (
    <section className={styles.container}>
      <div></div>
      <button onClick={goToMain}>goToMain</button>
    </section>
  );
};

export default Scheduler;
