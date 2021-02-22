import React, { memo, useRef, useState } from "react";
import styles from "./imageFileInput.module.css";

const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.secure_url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.btn} ${name ? styles.pink : styles.grey}`}
          onClick={onClick}
        >
          {name || "No file"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
});

export default ImageFileInput;
