import React, { memo } from "react";
import styles from "./cardButton.module.css";

const CardButton = memo(({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
});

export default CardButton;
