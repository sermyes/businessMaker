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
      name: "ellie",
      email: "abc@naver.com",
      phone: "010-123-1234",
      job: "Software Engineering",
      design: "basic",
      fileName: "ellie",
      fileURL: "",
    },
    {
      id: "2",
      company: "lg",
      name: "ellie",
      email: "abc@naver.com",
      phone: "010-123-1234",
      job: "Software Engineering",
      design: "basic",
      fileName: "ellie",
      fileURL: "",
    },
    {
      id: "3",
      company: "lg",
      name: "ellie",
      email: "abc@naver.com",
      phone: "010-123-1234",
      job: "Software Engineering",
      design: "basic",
      fileName: "ellie",
      fileURL: "",
    },
  ]);

  const goToMain = (e) => {
    e.preventDefault();
    history.push("/main");
  };

  return (
    <section className={styles.container}>
      <CardEditor cards={cards} />
      <CardPreview cards={cards} />
    </section>
  );
};

export default CardMaker;
