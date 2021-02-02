import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CardEditor from "../cardEditor/cardEditor";
import CardPreview from "../cardPreview/cardPreview";
import styles from "./cardMaker.module.css";

const CardMaker = (props) => {
  const history = useHistory();
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

  const goToMain = (e) => {
    e.preventDefault();
    history.push("/main");
  };

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.container}>
      <CardEditor addCard={addCard} cards={cards} />
      <CardPreview cards={cards} />
    </section>
  );
};

export default CardMaker;
