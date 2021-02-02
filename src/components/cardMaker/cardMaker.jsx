import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CardEditor from "../cardEditor/cardEditor";
import CardPreview from "../cardPreview/cardPreview";
import styles from "./cardMaker.module.css";

const CardMaker = (props) => {
  const history = useHistory();
  const [cards, setCards] = useState({
    1: {
      id: "1",
      company: "lg",
      job: "Software Engineering",
      name: "ellie",
      email: "abc@naver.com",
      phone: "010-123-1234",
      design: "basic",
      fileName: "front",
      fileURL: "",
    },
    2: {
      id: "2",
      company: "lg",
      job: "Software Engineering",
      name: "ellie",
      email: "abc@naver.com",
      phone: "010-123-1234",
      design: "basic",
      fileName: "front",
      fileURL: "",
    },
    3: {
      id: "3",
      company: "lg",
      job: "Software Engineering",
      name: "ellie",
      email: "abc@naver.com",
      phone: "010-123-1234",
      design: "basic",
      fileName: "front",
      fileURL: "",
    },
  });

  const goToMain = (e) => {
    e.preventDefault();
    history.push("/main");
  };

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.container}>
      <CardEditor
        addOrUpdateCard={addOrUpdateCard}
        cards={cards}
        deleteCard={deleteCard}
      />
      <CardPreview cards={cards} />
    </section>
  );
};

export default CardMaker;
