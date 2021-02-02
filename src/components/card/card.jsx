import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = `${process.env.PUBLIC_URL}/images/default_logo.png`;
const Card = ({ card }) => {
  const {
    id,
    company,
    job,
    name,
    email,
    phone,
    design,
    fileName,
    fileURL,
  } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={styles.card}>
      <img className={styles.logo} src={url} alt="company logo" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.job}>{job}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.phone}>{phone}</p>
      </div>
    </li>
  );
};

export default Card;
