import React, { useRef, useEffect, useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./signin.module.css";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { FaFacebookF as FacebookIcon } from "react-icons/fa";
import { FiGithub as GithubIcon } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Signin = ({ authService }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const goToMain = (userId) => {
    history.push({
      pathname: "/main",
      state: { id: userId },
    });
  };

  const goToSignup = (e) => {
    e.preventDefault();
    history.push("/signup");
  };

  const goToForgot = (e) => {
    e.preventDefault();
    history.push("/forgot");
  };

  const onRemoteSignin = (e) => {
    e.preventDefault();
    authService
      .remoteSignin(e.currentTarget.id)
      .then((data) => goToMain(data.user.uid))
      .catch((e) => setError(e.message));
  };

  const onSignin = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }

    setLoading(true);
    authService
      .signin(emailRef.current.value, passwordRef.current.value)
      .then((data) => {
        goToMain(data.user.uid);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMain(user.uid);
    });
  });

  return (
    <section className={styles.section}>
      <Header></Header>
      <section className={styles.container}>
        <h1 className={styles.title}>Welcome Back!</h1>
        {error && <p className={styles.alert}>{error}</p>}
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
                ref={passwordRef}
                required
              />
            </div>
            <div className={styles.forgotContainer}>
              <a href="!#" className={styles.forgot} onClick={goToForgot}>
                Forgot your password?
              </a>
            </div>
            <div className={styles.formBtnGroup}>
              <button
                type="submit"
                className={styles.signin}
                onClick={onSignin}
              >
                Sign in
              </button>
            </div>
          </fieldset>
        </form>

        <div className={styles.remoteLogin}>
          <p className={styles.dividerContainer}>
            <span className={styles.divider}>Or</span>
          </p>
          <span className={styles.dividerText}>Sign in with</span>
          <ul className={styles.remoteList}>
            <li className={styles.remoteItem}>
              <a
                className={styles.google}
                id="Google"
                onClick={onRemoteSignin}
                href="!#"
              >
                <GoogleIcon className={styles.icon} />
              </a>
            </li>
            <li className={styles.remoteItem}>
              <a
                className={styles.github}
                id="Github"
                onClick={onRemoteSignin}
                href="!#"
              >
                <GithubIcon className={styles.icon} />
              </a>
            </li>
            <li className={styles.remoteItem}>
              <a
                className={styles.facebook}
                id="Facebook"
                onClick={onRemoteSignin}
                href="!#"
              >
                <FacebookIcon className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.signupContainer}>
          <a className={styles.signup} href="!#" onClick={goToSignup}>
            Crate a new account
          </a>
        </div>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default Signin;
