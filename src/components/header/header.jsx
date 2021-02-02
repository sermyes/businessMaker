import React from "react";
import styles from "./header.module.css";

const Header = ({ onSignout }) => {
  return (
    <header className={styles.header}>
      {onSignout && (
        <button className={styles.signout} onClick={onSignout}>
          Logout
        </button>
      )}
      <img
        className={styles.logo}
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt="logo"
      />
      <h1 className={styles.title}>Business Management</h1>
    </header>
  );
};

export default Header;
