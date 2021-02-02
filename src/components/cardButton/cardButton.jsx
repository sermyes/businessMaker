import React from "react";
import styles from "./cardButton.module.css";

const CardButton = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default CardButton;
