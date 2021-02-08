import React from "react";
import styles from "./noteSubject.module.css";

const NoteSubject = ({ note, setSelectedNote, onClose }) => {
  const { title, content, color, id, generatedTime, modificatedTime } = note;

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
        <span className={styles.time}></span>
      </div>
    </li>
  );
};

export default NoteSubject;
