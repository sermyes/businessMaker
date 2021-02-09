import React, { memo, useEffect } from "react";
import styles from "./noteModal.module.css";

const NoteModal = memo(({ children }) => {
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    <div>
      <div className={styles.overlay} />
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
});

export default NoteModal;
