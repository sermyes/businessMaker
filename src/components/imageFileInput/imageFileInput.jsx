import React, { useRef } from "react";
import styles from "./imageFileInput.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (e) => {
    e.preventDefault();
    const uploaded = await imageUploader.upload(e.target.files[0]);

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={onClick}>
        {name || "No file"}
      </button>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
    </div>
  );
};

export default ImageFileInput;
