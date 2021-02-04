import React, { memo, useRef, useState } from "react";
import styles from "./card.module.css";

const Card = memo(({ card }) => {
  const { company, job, name, email, phone, theme, fileURL } = card;
  const DEFAULT_IMAGE = `${process.env.PUBLIC_URL}/images/default_logo.png`;
  const url = fileURL || DEFAULT_IMAGE;
  const [flip, setFlip] = useState(false);
  const flipRef = useRef();

  const onClick = (e) => {
    e.preventDefault();
    if (flip) {
      flipRef.current.style.cssText = "transform: rotateY(0deg)";
      setFlip(false);
    } else {
      flipRef.current.style.cssText = "transform: rotateY(180deg)";
      setFlip(true);
    }
  };

  return (
    <li className={styles.container}>
      <div ref={flipRef} className={styles.card}>
        <div className={`${styles.cardFront} ${getStyles(theme)}`}>
          {company && <p className={styles.company}>{company}</p>}
        </div>
        <div className={`${styles.cardBack} ${getStyles(theme)}`}>
          <div className={styles.info}>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.job}>{job}</p>
            {email && (
              <p className={styles.emailContainer}>
                <i className={`${styles.ico_email} far fa-envelope`}></i>
                <span className={styles.email}>{email}</span>
              </p>
            )}
            {phone && (
              <p className={styles.phoneContainer}>
                <i className={`${styles.ico_phone} fas fa-phone`}></i>
                <span className={styles.phone}>{phone}</span>
              </p>
            )}
          </div>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={url} alt="company logo" />
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={onClick}>
        <i className={`${styles.ico_flip} fas fa-sync`}></i>
      </button>
    </li>
  );
});

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "pattern_blue":
      return styles.pattern_blue;
    case "pattern_yellow":
      return styles.pattern_yellow;
    case "vintage":
      return styles.vintage;
    default:
      throw new Error(`unknown theme ${theme}`);
  }
}

export default Card;
