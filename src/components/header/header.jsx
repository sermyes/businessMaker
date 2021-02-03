import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const NavMenu = () => {
  const history = useHistory();

  const goToCardMaker = (e) => {
    e.preventDefault();
    history.push("/main/cardMaker");
  };

  const goToNoteMaker = (e) => {
    e.preventDefault();
    history.push("/main/noteMaker");
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a className={styles.cardMaker} href="!#" onClick={goToCardMaker}>
            <i className={`${styles.icon} far fa-id-card`}></i>
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.noteMaker} href="!#" onClick={goToNoteMaker}>
            <i className={`${styles.icon} far fa-sticky-note`}></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Header = ({ onSignout }) => {
  return (
    <header className={styles.header}>
      {!onSignout && (
        <div className={styles.signoutContainer}>
          <img
            className={styles.logo}
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
          />
          <h1 className={styles.title}>Business Management</h1>
        </div>
      )}
      {onSignout && (
        <div className={styles.signinContainer}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <h1 className={styles.title}>Business Management</h1>
          </div>
          <NavMenu />
          <button className={styles.signout} onClick={onSignout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
