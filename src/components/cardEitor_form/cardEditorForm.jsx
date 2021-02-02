import React from "react";
import CardButton from "../cardButton/cardButton";
import ImageFileInput from "../imageFileInput/imageFileInput";
import styles from "./cardEditorForm.module.css";

const CardEditorForm = ({ card }) => {
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

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name ? name : ""}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company ? company : ""}
      />
      <select
        className={styles.select}
        name="design"
        defaultValue={design ? design : "light"}
      >
        <option value="light">Light</option>
        <option value="black">Black</option>
        <option value="gold">Gold</option>
        <option value="silver">Silver</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="job"
        defaultValue={job ? job : ""}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email ? email : ""}
      />
      <input
        className={styles.input}
        type="text"
        name="phone"
        defaultValue={phone ? phone : ""}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <CardButton name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditorForm;
