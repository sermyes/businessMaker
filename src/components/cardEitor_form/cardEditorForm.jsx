import React, { useRef } from "react";
import CardButton from "../cardButton/cardButton";
import styles from "./cardEditorForm.module.css";

const CardEditorForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const companyRef = useRef();
  const jobRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const designRef = useRef();

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

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(card);
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
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company ? company : ""}
        onChange={onChange}
      />
      <select
        ref={designRef}
        className={styles.select}
        name="design"
        defaultValue={design ? design : "light"}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="black">Black</option>
        <option value="gold">Gold</option>
        <option value="silver">Silver</option>
      </select>
      <input
        ref={jobRef}
        className={styles.input}
        type="text"
        name="job"
        defaultValue={job ? job : ""}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email ? email : ""}
        onChange={onChange}
      />
      <input
        ref={phoneRef}
        className={styles.input}
        type="text"
        name="phone"
        defaultValue={phone ? phone : ""}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={name} onFileChange={onFileChange} />
      </div>
      <CardButton name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditorForm;
