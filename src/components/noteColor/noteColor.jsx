import React, { memo, useRef, useState } from "react";
import styles from "./noteColor.module.css";

const NoteColor = memo(({ onColor, onManager }) => {
  const [active, setActive] = useState(false);
  const colorRef = useRef();

  const onColorClick = () => {
    if (active) {
      colorRef.current.style.cssText = `display: none;`;
      setActive(false);
    } else {
      colorRef.current.style.cssText = `display: flex;`;
      setActive(true);
    }
  };

  return (
    <div className={styles.colorContainer}>
      <button className={styles.colorButton} onClick={onColorClick}>
        <span className={styles.selectColor}></span>
      </button>
      <ul ref={colorRef} className={styles.container}>
        <li className={styles.item} data-color="orange">
          <span className={`${styles.color} ${styles.orange}`}></span>
        </li>
        <li className={styles.item} data-color="scarlet">
          <span className={`${styles.color} ${styles.scarlet}`}></span>
        </li>
        <li className={styles.item} data-color="green">
          <span className={`${styles.color} ${styles.green}`}></span>
        </li>
        <li className={styles.item} data-color="black">
          <span className={`${styles.color} ${styles.yellow}`}></span>
        </li>
        <li className={styles.item} data-color="cyan">
          <span className={`${styles.color} ${styles.cyan}`}></span>
        </li>
        <li className={styles.item} data-color="purple">
          <span className={`${styles.color} ${styles.purple}`}></span>
        </li>
        <li className={styles.item} data-color="white">
          <span className={`${styles.color} ${styles.white}`}></span>
        </li>
      </ul>
    </div>
  );
});

export default NoteColor;
