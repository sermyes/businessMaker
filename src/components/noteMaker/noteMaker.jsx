import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import Note from "../note/note";
import NoteAddButton from "../noteAddButton/noteAddButton";
import NoteDetail from "../noteDetail/noteDetail";
import NoteManager from "../noteManager/noteManager";
import styles from "./noteMaker.module.css";

const NoteMaker = ({ authService, onSignout }) => {
  const history = useHistory();
  const [userId, setUserId] = useState(
    history.location.state && history.location.state.id
  );
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedManager, setSelectedManager] = useState(false);

  const [notes, setNotes] = useState({
    1: {
      id: new Date().getTime(),
      title: "Scheduling",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      color: "yellow",
    },
    2: {
      id: new Date().getTime(),
      title: "Black Pink",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      color: "yellow",
    },
    3: {
      id: new Date().getTime(),
      title: "LaLa LAND",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      color: "yellow",
    },
  });

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

    return `${year}. ${month}. ${day}. ${str} ${hour}:${min}`;
  };

  const addNote = () => {
    const date = new Date();
    const noteId = date.getTime();

    setNotes((notes) => {
      const updated = { ...notes };
      updated[noteId] = {
        id: noteId,
        title: "",
        content: "",
        color: "",
        modificatedTime: "",
        generatedTime: getDateFormat(date),
      };
      return updated;
    });
  };

  const deleteNote = (note) => {
    setNotes((notes) => {
      const updated = { ...notes };
      delete updated[note.id];
      return updated;
    });
  };

  const updateNote = (note) => {
    setNotes((notes) => {
      const updated = { ...notes };
      updated[note.id] = note;
      return updated;
    });
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
    console.log(userId);
  });

  return (
    <section className={styles.section}>
      <Header onSignout={onSignout} goToCardMaker={goToCardMaker} />
      <section className={styles.container}>
        <h1 className={styles.title}>Note Maker</h1>
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
        {selectedNote && (
          <NoteDetail
            selectedNote={selectedNote}
            onClose={onDetailClose}
            deleteNote={deleteNote}
            updateNote={updateNote}
          />
        )}
        {selectedManager && (
          <NoteManager notes={notes} onClose={onManagerClose} />
        )}
      </section>
      <Footer />
    </section>
  );
};

export default NoteMaker;
