import React, { useEffect, useRef, useState } from "react";
import NoteModal from "../../noteModal/noteModal";
import NoteColor from "../noteColor/noteColor";
import styles from "./noteDetail.module.css";

function NoteDetail({ selectedNote, onClose, deleteNote, updateNote }) {
  const titleRef = useRef();
  const contentRef = useRef();
  const [active, setActive] = useState(false);

  const onWirteClick = () => {
    if (active) {
      titleRef.current.classList.remove("active");
      contentRef.current.blur();
      setActive(false);
    } else {
      titleRef.current.classList.add("active");
      contentRef.current.focus();
      setActive(true);
    }
  };

  const onDeleteClick = () => {
    deleteNote(selectedNote);
    onClose(null);
  };

  return (
    <NoteModal>
      <div className={styles.note}>
        <div className={styles.header}>
          <button
            className={styles.iconContainer}
            onClick={() => onClose(null)}
          >
            <i className={`${styles.icon} fas fa-arrow-left`}></i>
          </button>
          <input
            ref={titleRef}
            className={`${styles.title} noteDetail__title`}
            type="text"
          />
          <NoteColor />
          <button className={styles.iconContainer} onClick={onWirteClick}>
            <i className={`${styles.icon} fas fa-pencil-alt`}></i>
          </button>
          <button className={styles.iconContainer} onClick={onDeleteClick}>
            <i className={`${styles.icon} far fa-trash-alt`}></i>
          </button>
        </div>
        <div className={styles.body}>
          <textarea
            ref={contentRef}
            className={styles.content}
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </NoteModal>
  );
}

export default NoteDetail;
