import React, { memo, useState } from "react";
import { useRef } from "react";
import CardButton from "../cardButton/cardButton";
import styles from "./cardAddForm.module.css";
import { v4 as uuidv4 } from "uuid";

const CardAddForm = memo(({ FileInput, addCard }) => {
  const companyRef = useRef();
  const jobRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const themeRef = useRef();
  const formRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: uuidv4(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      job: jobRef.current.value || "",
      email: emailRef.current.value || "",
      phone: phoneRef.current.value || "",
      theme: themeRef.current.value,
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };

    formRef.current.reset();
    addCard(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="company"
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="theme"
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
        placeholder="job"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
      />
      <input
        ref={phoneRef}
        className={styles.input}
        type="text"
        name="phone"
        placeholder="phone"
      />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <CardButton name="Add" onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
