import React from "react";
import styles from "./noteSubject.module.css";

const NoteSubject = ({ note }) => {
  console.log(note);
  return (
    <li className={styles.note}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{note.title}</h3>
      </div>
      <div className={styles.timeContainer}>
        <span className={styles.time}></span>
      </div>
    </li>
  );
};

export default NoteSubject;
