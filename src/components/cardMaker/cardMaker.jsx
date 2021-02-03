import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardEditor from "../cardEditor/cardEditor";
import CardPreview from "../cardPreview/cardPreview";
import styles from "./cardMaker.module.css";

const CardMaker = ({ FileInput, authService, cardRespository }) => {
  const history = useHistory();
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(
    history.location.state && history.location.state.id
  );

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });

    cardRespository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });

    cardRespository.removeCard(userId, card);
  };

  useEffect(() => {
    if (!userId) {
      return;
    }

    const stopSync = cardRespository.syncCard(userId, (cards) => {
      setCards(cards);
    });

    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      } else {
        setUserId(user.uid);
      }
    });
  });

  return (
    <section className={styles.container}>
      <CardEditor
        FileInput={FileInput}
        addOrUpdateCard={addOrUpdateCard}
        cards={cards}
        deleteCard={deleteCard}
      />
      <CardPreview cards={cards} />
    </section>
  );
};

export default CardMaker;
