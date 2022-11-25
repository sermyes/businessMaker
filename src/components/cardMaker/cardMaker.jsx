import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardEditor from '../cardEditor/cardEditor';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './cardMaker.module.css';

const CardMaker = ({ FileInput, authService, cardRespository, onSignout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(location.state && location.state.id);

  const goToNoteMaker = () => {
    navigate('/noteMaker', { state: { id: userId } });
  };

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
  }, [userId, cardRespository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(userId);
      } else {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.section}>
      <Header onSignout={onSignout} goToNoteMaker={goToNoteMaker} />
      <section className={styles.container}>
        <CardEditor
          FileInput={FileInput}
          addOrUpdateCard={addOrUpdateCard}
          cards={cards}
          deleteCard={deleteCard}
        />
        <CardPreview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default CardMaker;
