import React from "react";
import Card from "../card/card";
import styles from "./cardPreview.module.css";

const CardPreview = ({ cards }) => {
  return (
    <div className={styles.preview}>
      <h2 className={styles.title}>Card Preview</h2>
      <ul>
        {Object.keys(cards).map((key) => (
          <Card key={key} card={cards[key]} />
        ))}
      </ul>
    </div>
  );
};

export default CardPreview;
