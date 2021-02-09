import React, { memo } from "react";
import styles from "./noteAddButton.module.css";

const NoteAddButton = memo(({ addNote, onManager }) => {
  const onClick = (e) => {
    e.preventDefault();
    addNote();
  };

  return (
    <>
      {!onManager && (
        <li className={styles.maker}>
          <button className={styles.makerButton} onClick={onClick}>
            <i className={`${styles.makerIcon} fas fa-plus`}></i>
          </button>
        </li>
      )}
      {onManager && (
        <li className={styles.manager}>
          <button className={styles.managerButton} onClick={onClick}>
            <i className={`${styles.managerIcon} fas fa-plus`}></i>
          </button>
        </li>
      )}
    </>
  );
});

export default NoteAddButton;
