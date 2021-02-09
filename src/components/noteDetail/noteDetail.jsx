import React, { useEffect, useRef, useState } from "react";
import NoteModal from "../../noteModal/noteModal";
import NoteColor from "../noteColor/noteColor";
import styles from "./noteDetail.module.css";

function NoteDetail({
  selectedNote,
  onClose,
  deleteNote,
  updateNote,
  setting,
}) {
  const titleRef = useRef();
  const contentRef = useRef();
  const [active, setActive] = useState(false);
  const { title, content, color, updatedTime } = selectedNote;
  const { size } = setting;
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

  const onChange = (e) => {
    if (e.currentTarget === null) {
      return;
    }
    e.preventDefault();

    updateNote({
      ...selectedNote,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onColorChange = (eventTarget) => {
    const name = eventTarget.getAttribute("name");
    const color = eventTarget.getAttribute("data-color");

    updateNote({
      ...selectedNote,
      [name]: color,
    });
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

  const getSizeStyle = (size) => {
    switch (size) {
      case "small":
        return styles.small;
      case "regular":
        return styles.regular;
      case "big":
        return styles.big;
    }
  };

  return (
    <NoteModal>
      <div className={`${styles.note} ${getColorStyle(color)}`}>
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
            name="title"
            onChange={onChange}
            defaultValue={title ? title : ""}
          />
          <NoteColor color={color} onColorChange={onColorChange} />
          <button className={styles.iconContainer} onClick={onWirteClick}>
            <i className={`${styles.icon} fas fa-pencil-alt`}></i>
          </button>
          <button className={styles.iconContainer} onClick={onDeleteClick}>
            <i className={`${styles.icon} far fa-trash-alt`}></i>
          </button>
        </div>
        <p className={styles.time}>{updatedTime}</p>
        <div className={styles.body}>
          <textarea
            ref={contentRef}
            className={`${styles.content} ${getColorStyle(
              color
            )} ${getSizeStyle(size)}`}
            name="content"
            onChange={onChange}
            defaultValue={content ? content : ""}
          />
        </div>
      </div>
    </NoteModal>
  );
}

export default NoteDetail;
