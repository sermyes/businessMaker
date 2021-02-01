import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./forgot.module.css";

const Forgot = (props) => {
  const history = useHistory();
  const goToSignin = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <section className={styles.section}>
      <Header />
      <section className={styles.container}>
        <h2 className={styles.title}>Forgot your Password?</h2>
        <p className={styles.description}>
          Enter the email you signed up with and we will send you reset
          instructions.
        </p>
        <form action="">
          <fieldset className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="">
                email
              </label>
              <input
                className={styles.input}
                type="email"
                placeholder="email"
              />
            </div>
            <div className={styles.btnGroup}>
              <button className={styles.btn} type="submit">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
        <div className={styles.signinContainer}>
          <a className={styles.signin} href="!#" onClick={goToSignin}>
            I remembered the password!
          </a>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Forgot;
