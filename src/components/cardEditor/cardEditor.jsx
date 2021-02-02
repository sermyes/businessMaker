import React from "react";
import CardAddForm from "../cardAdd_form/cardAddForm";
import CardEditorForm from "../cardEitor_form/cardEditorForm";
import styles from "./cardEditor.module.css";

const CardEditor = ({ cards, addCard }) => {
  return (
    <div className={styles.editor}>
      <h2 className={styles.title}>Card Editor</h2>
      {cards.map((card) => (
        <CardEditorForm key={card.id} card={card} />
      ))}
      <CardAddForm addCard={addCard} />
    </div>
  );
};

export default CardEditor;
