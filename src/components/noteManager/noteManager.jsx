import React, { useEffect } from "react";
import styles from "./noteManger.module.css";

function Modal({ children, onClose }) {
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
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <button className={styles.iconBtn} onClick={() => onClose(null)}>
            <FontAwesomeIcon className={styles.icon} icon={faTimes} />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
