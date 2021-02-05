import React from "react";
import styles from "./noteAddButton.module.css";

const NoteAddButton = ({ addNote }) => {
  const onClick = (e) => {
    e.preventDefault();
    addNote();
  };

  return (
    <li className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        <i className={`${styles.icon} fas fa-plus`}></i>
      </button>
    </li>
  );
};

export default NoteAddButton;
