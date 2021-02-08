import React, { useEffect } from "react";
import NoteModal from "../../noteModal/noteModal";
import NoteAddButton from "../noteAddButton/noteAddButton";
import NoteColor from "../noteColor/noteColor";
import NoteSubject from "../noteSubject/noteSubject";
import styles from "./noteManager.module.css";

function NoteManager({
  onClose,
  notes,
  addNote,
  setSelectedNote,
  updateSetting,
  setting,
}) {
  const { color, size } = setting;
  const onColorChange = (eventTarget) => {
    const name = eventTarget.getAttribute("name");
    const color = eventTarget.getAttribute("data-color");

    updateSetting({
      ...setting,
      [name]: color,
    });
  };

  const onChange = (e) => {
    e.preventDefault();
    updateSetting({
      ...setting,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <NoteModal>
      <div className={styles.manager}>
        <div className={styles.header}>
          <button
            className={styles.iconContainer}
            onClick={() => onClose(null)}
          >
            <i className={`${styles.icon} fas fa-arrow-left`}></i>
          </button>
          <h2 className={styles.managerTitle}>Note Manager</h2>
          <button className={styles.iconContainer}>
            <i className={`${styles.icon} fas fa-search`}></i>
          </button>
        </div>
        <div className={styles.option}>
          <div className={styles.sortContainer}>
            <select className={styles.sort} defaultValue="modification">
              <option value="modification">Sort by modificated time</option>
              <option value="creation">Sort by generated time</option>
              <option value="title">Sort by title</option>
            </select>
          </div>

          <div className={styles.setting}>
            <h2 className={styles.settingTitle}>
              Settings <i className={`${styles.settingIcon} fas fa-cog`}></i>
            </h2>
            <div className={styles.fontContainer}>
              <span className={styles.fontTitle}>font-size </span>
              <select
                className={styles.fontSize}
                name="size"
                defaultValue={size}
                onChange={onChange}
              >
                <option value="small">small</option>
                <option value="regular">regular</option>
                <option value="big">big</option>
              </select>
            </div>
            <div className={styles.colorContainer}>
              <span className={styles.colorTitle}>color </span>
              <NoteColor onColorChange={onColorChange} color={color} />
            </div>
          </div>
        </div>
        <div className={styles.notesContainer}>
          <ul className={styles.notes}>
            {notes &&
              Object.keys(notes).map((key) => (
                <NoteSubject
                  key={key}
                  note={notes[key]}
                  setSelectedNote={setSelectedNote}
                  onClose={onClose}
                />
              ))}
            <NoteAddButton onManager={true} addNote={addNote} />
          </ul>
        </div>
      </div>
    </NoteModal>
  );
}

export default NoteManager;
