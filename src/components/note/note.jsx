import React from "react";
import styles from "./note.module.css";

const Note = ({ note }) => {
  console.log(note);
  const onManager = () => {};
  const onDetail = () => {};

  return (
    <li className={styles.note}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{note.title}</h2>
        <div className={styles.iconContainer} onClick={onManager}>
          <i className={`${styles.icon} fas fa-caret-down`}></i>
        </div>
      </div>
      <div className={styles.contentContainer} onClick={onDetail}>
        <p className={styles.content}>{note.content}</p>
      </div>
    </li>
  );
};

export default Note;
