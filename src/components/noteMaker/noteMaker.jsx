import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import Note from "../note/note";
import NoteAddButton from "../noteAddButton/noteAddButton";
import NoteDetail from "../noteDetail/noteDetail";
import NoteManager from "../noteManager/noteManager";
import styles from "./noteMaker.module.css";

const NoteMaker = ({ authService, onSignout, noteRespository }) => {
  const history = useHistory();
  const [userId, setUserId] = useState(
    history.location.state && history.location.state.id
  );
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedManager, setSelectedManager] = useState(false);

  const [notes, setNotes] = useState({});
  const [setting, setSetting] = useState({ color: "orange", size: "regular" });

  const getDateFormat = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hour = date.getHours();
    const str = hour > 12 ? "오후" : "오전";
    hour = hour === 12 ? hour : hour % 12;
    hour = hour < 10 ? `0${hour}` : hour;
    let min = date.getMinutes();
    min = min < 10 ? `0${min}` : min;
    let sec = date.getSeconds();
    sec = sec < 10 ? `0${sec}` : sec;

    return `${year}. ${month}. ${day}. ${str} ${hour}:${min}:${sec}`;
  };

  const addNote = () => {
    let color = setting.color;
    let size = setting.size;

    const date = new Date();
    const noteId = date.getTime();
    const newNote = {
      id: noteId,
      title: "",
      content: "",
      color: color,
      size: size,
      updatedTime: getDateFormat(date),
    };

    setNotes((notes) => {
      const updated = { ...notes };
      updated[noteId] = newNote;
      return updated;
    });
    noteRespository.saveNote(userId, newNote);
  };

  const deleteNote = (note) => {
    setNotes((notes) => {
      const updated = { ...notes };
      delete updated[note.id];
      return updated;
    });

    noteRespository.removeNote(userId, note);
  };

  const updateNote = (note) => {
    note["updatedTime"] = getDateFormat(new Date());

    setNotes((notes) => {
      const updated = { ...notes };
      updated[note.id] = note;
      return updated;
    });

    selectedNote && setSelectedNote(note);
    noteRespository.saveNote(userId, note);
  };

  const updateSetting = (setting) => {
    setSetting((settings) => {
      const updated = { ...settings };
      updated[setting.name] = setting;
      return updated;
    });

    noteRespository.saveNoteSetting(userId, setting);
  };

  const goToCardMaker = () => {
    history.push({
      pathname: "/cardMaker",
      state: { id: userId },
    });
  };

  const onDetailClose = () => {
    setSelectedNote(null);
  };

  const onManagerClose = () => {
    setSelectedManager(null);
  };

  useEffect(() => {
    if (!userId) {
      return;
    }

    const stopSync = noteRespository.syncNote(userId, (noteApp) => {
      if (noteApp.setting) {
        setNotes(noteApp.notes);
        setSetting(noteApp.setting);
      } else {
        setNotes(noteApp.notes);
      }
    });

    return () => stopSync();
  }, [userId, noteRespository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(userId);
      } else {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.section}>
      <Header onSignout={onSignout} goToCardMaker={goToCardMaker} />
      <section className={styles.container}>
        <h1 className={styles.title}>
          Note Maker
          <button
            className={styles.setting}
            onClick={() => {
              setSelectedManager(true);
            }}
          >
            <i className={`${styles.settingIcon} fas fa-cog`}></i>
          </button>
        </h1>
        <ul className={styles.noteContainer}>
          {notes &&
            Object.keys(notes).map((key) => (
              <Note
                key={key}
                note={notes[key]}
                setSelectedNote={setSelectedNote}
                setSelectedManager={setSelectedManager}
              />
            ))}
          <NoteAddButton addNote={addNote} />
        </ul>
        {selectedManager && (
          <NoteManager
            notes={notes}
            onClose={onManagerClose}
            addNote={addNote}
            setSelectedNote={setSelectedNote}
            updateSetting={updateSetting}
            setting={setting}
          />
        )}
        {selectedNote && (
          <NoteDetail
            selectedNote={selectedNote}
            onClose={onDetailClose}
            deleteNote={deleteNote}
            updateNote={updateNote}
            setting={setting}
          />
        )}
      </section>
      <Footer />
    </section>
  );
};

export default NoteMaker;
