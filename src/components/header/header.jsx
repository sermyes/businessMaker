import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const NavMenu = memo(({ goToNoteMaker, goToCardMaker }) => {
  const history = useHistory();

  const onCardMakerClick = (e) => {
    e.preventDefault();
    if (history.location.pathname === "/cardMaker") {
      return;
    }

    goToCardMaker();
  };

  const onNoteMakerClick = (e) => {
    e.preventDefault();
    if (history.location.pathname === "/noteMaker") {
      return;
    }

    goToNoteMaker();
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a className={styles.cardMaker} href="!#" onClick={onCardMakerClick}>
            <i className={`${styles.icon} far fa-id-card`}></i>
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.noteMaker} href="!#" onClick={onNoteMakerClick}>
            <i className={`${styles.icon} far fa-sticky-note`}></i>
          </a>
        </li>
      </ul>
    </nav>
  );
});

const Header = memo(({ onSignout, goToNoteMaker, goToCardMaker }) => {
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
          <NavMenu
            goToNoteMaker={goToNoteMaker}
            goToCardMaker={goToCardMaker}
          />
          <button className={styles.signout} onClick={onSignout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
});

export default Header;
