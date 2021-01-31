import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { FaFacebookF as FacebookIcon } from "react-icons/fa";
import { FiGithub as GithubIcon } from "react-icons/fi";

const Login = (props) => {
  return (
    <section className={styles.section}>
      <Header></Header>
      <section className={styles.container}>
        <h1 className={styles.title}>Welcome Back!</h1>
        <form action="">
          <fieldset className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                className={styles.input}
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className={styles.formBtnGroup}>
              <button type="submit" className={styles.login}>
                Log in
              </button>
            </div>
          </fieldset>
        </form>

        <div className={styles.remoteLogin}>
          <p className={styles.dividerContainer}>
            <span className={styles.divider}>Or</span>
          </p>
          <span className={styles.dividerText}>Log in with</span>
          <ul className={styles.remoteList}>
            <li className={styles.remoteItem}>
              <a className={styles.google} href="">
                <GoogleIcon className={styles.icon} />
              </a>
            </li>
            <li className={styles.remoteItem}>
              <a className={styles.github} href="">
                <FacebookIcon className={styles.icon} />
              </a>
            </li>
            <li className={styles.remoteItem}>
              <a className={styles.facebook} href="">
                <GithubIcon className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.joinContainer}>
          <a className={styles.join} href="">
            Crate a new account
          </a>
        </div>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default Login;
