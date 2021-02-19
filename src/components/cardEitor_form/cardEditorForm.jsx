import React, { useRef } from "react";
import CardButton from "../cardButton/cardButton";
import styles from "./cardEditorForm.module.css";

const CardEditorForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const companyRef = useRef();
  const jobRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const themeRef = useRef();

  const { company, job, name, email, phone, theme, fileName } = card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    deleteCard(card);
  };

  const onChange = (e) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();

    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name ? name : ""}
        placeholder="name"
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company ? company : ""}
        placeholder="company"
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        value={theme}
        placeholder="theme"
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="vintage">Vintage</option>
        <option value="pattern_blue">Pattern_blue</option>
        <option value="pattern_yellow">Pattern_yellow</option>
      </select>
      <input
        ref={jobRef}
        className={styles.input}
        type="text"
        name="job"
        defaultValue={job ? job : ""}
        placeholder="job"
        onChange={onChange}
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email ? email : ""}
        placeholder="email"
        onChange={onChange}
      />
      <input
        ref={phoneRef}
        className={styles.input}
        type="text"
        name="phone"
        defaultValue={phone ? phone : ""}
        placeholder="phone"
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput
          name={fileName ? `${name}_logo` : ""}
          onFileChange={onFileChange}
        />
      </div>
      <CardButton name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditorForm;
