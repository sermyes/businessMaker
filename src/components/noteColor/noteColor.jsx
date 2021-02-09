import React, { memo, useRef, useState } from "react";
import styles from "./noteColor.module.css";

const NoteColor = memo(({ onColorChange, color }) => {
  const [active, setActive] = useState(false);
  const colorListRef = useRef();

  const onColorClick = () => {
    if (active) {
      colorListRef.current.style.cssText = `display: none;`;
      setActive(false);
    } else {
      colorListRef.current.style.cssText = `display: flex;`;
      setActive(true);
    }
  };

  const selectColor = (e) => {
    onColorChange(e.currentTarget);
    colorListRef.current.style.cssText = `display: none;`;
    setActive(false);
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
    <div className={styles.colorContainer}>
      <button className={styles.colorButton} onClick={onColorClick}>
        <span
          className={`${styles.selectColor} ${getColorStyle(color)}`}
        ></span>
      </button>
      <ul ref={colorListRef} className={styles.container}>
        <li
          className={styles.item}
          name="color"
          data-color="orange"
          onClick={selectColor}
        >
          <span className={`${styles.color} ${styles.orange}`}></span>
        </li>
        <li
          className={styles.item}
          name="color"
          data-color="scarlet"
          onClick={selectColor}
        >
          <span className={`${styles.color} ${styles.scarlet}`}></span>
        </li>
        <li
          className={styles.item}
          name="color"
          data-color="green"
          onClick={selectColor}
        >
          <span className={`${styles.color} ${styles.green}`}></span>
        </li>
        <li
          className={styles.item}
          name="color"
          data-color="black"
          onClick={selectColor}
        >
          <span className={`${styles.color} ${styles.yellow}`}></span>
        </li>
        <li
          className={styles.item}
          name="color"
          data-color="cyan"
          onClick={selectColor}
        >
          <span className={`${styles.color} ${styles.cyan}`}></span>
        </li>
        <li
          className={styles.item}
          name="color"
          data-color="purple"
          onClick={selectColor}
        >
          <span className={`${styles.color} ${styles.purple}`}></span>
        </li>
        <li
          className={styles.item}
          name="color"
          data-color="white"
          onClick={selectColor}
        >
          <span className={`${styles.color} ${styles.white}`}></span>
        </li>
      </ul>
    </div>
  );
});

export default NoteColor;
