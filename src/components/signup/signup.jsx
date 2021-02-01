import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./signup.module.css";

const Signup = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();
  const goToSignin = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <section className={styles.section}>
      <Header />
      <section className={styles.container}>
        <h2 className={styles.title}>Create a new account</h2>
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
                required
                ref={emailRef}
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
                required
                ref={passwordRef}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="passwordConfirm">
                Password Confirmation
              </label>
              <input
                className={styles.input}
                type="password"
                id="passwordConfirm"
                placeholder="Password"
                required
                ref={passwordConfirmRef}
              />
            </div>
            <div className={styles.formBtnGroup}>
              <button type="submit" className={styles.signup}>
                Sign up
              </button>
            </div>
          </fieldset>
        </form>
        <div className={styles.signinContainer}>
          <a className={styles.signin} href="!#" onClick={goToSignin}>
            I already have an account!
          </a>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Signup;
