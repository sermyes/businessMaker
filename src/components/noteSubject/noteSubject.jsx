import React, { memo } from "react";
import styles from "./noteSubject.module.css";

const NoteSubject = memo(({ note, setSelectedNote }) => {
  const { title, color, updatedTime } = note;

  const onClick = () => {
    setSelectedNote(note);
  };

  const getColorStyle = (color) => {
    switch (color) {
      case "scarlet":
        return styles.scarlet;
      case "orange":
        return styles.orange;
      case "green":
        return styles.green;
      case "cyan":
        return styles.cyan;
      case "yellow":
        return styles.yellow;
      case "white":
        return styles.white;
      case "purple":
        return styles.purple;
      default:
        return styles.orange;
    }
  };

  return (
    <li className={`${styles.note} ${getColorStyle(color)}`} onClick={onClick}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.timeContainer}>
        <span className={styles.time}>
          {updatedTime.substring(0, updatedTime.length - 3)}
        </span>
      </div>
    </li>
  );
});

export default NoteSubject;
