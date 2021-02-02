import React from "react";
import CardEditorForm from "../cardEitor_form/cardEditorForm";
import styles from "./cardEditor.module.css";

const CardEditor = ({ cards }) => {
  return (
    <div className={styles.editor}>
      <h2 className={styles.title}>Card Editor</h2>
      {cards.map((card) => (
        <CardEditorForm card={card} />
      ))}
    </div>
  );
};

export default CardEditor;
