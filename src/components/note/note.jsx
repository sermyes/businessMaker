import React from "react";
import styles from "./note.module.css";

const Note = ({ note, setSelectedNote, setSelectedManager }) => {
  const { title, content, color, id, generatedTime, modificatedTime } = note;

  const onManager = () => {
    setSelectedManager(true);
  };
  const onDetail = () => {
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
    <li className={styles.note}>
      <div className={`${styles.titleContainer} ${getColorStyle(color)}`}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.iconContainer} onClick={onManager}>
          <i className={`${styles.icon} fas fa-caret-down`}></i>
        </div>
      </div>
      <div
        className={`${styles.contentContainer} ${getColorStyle(color)}`}
        onClick={onDetail}
      >
        <textarea
          className={styles.content}
          value={content ? content : ""}
          readOnly
        />
      </div>
    </li>
  );
};

export default Note;
