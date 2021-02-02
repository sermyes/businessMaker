import React from "react";
import CardAddForm from "../cardAdd_form/cardAddForm";
import CardEditorForm from "../cardEitor_form/cardEditorForm";
import styles from "./cardEditor.module.css";

const CardEditor = ({ FileInput, cards, addOrUpdateCard, deleteCard }) => {
  return (
    <div className={styles.editor}>
      <h2 className={styles.title}>Card Editor</h2>
      {Object.keys(cards).map((key) => (
        <CardEditorForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={addOrUpdateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm FileInput={FileInput} addCard={addOrUpdateCard} />
    </div>
  );
};

export default CardEditor;
