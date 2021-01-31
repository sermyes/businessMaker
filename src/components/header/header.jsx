import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      <button className={styles.logout} onClick={onLogout}>
        Log out
      </button>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Management</h1>
    </header>
  );
};

export default Header;
