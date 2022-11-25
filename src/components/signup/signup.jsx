import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './signup.module.css';

const Signup = ({ authService }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const goToSignin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const onSignup = (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match.');
    }

    setError('');
    setLoading(true);
    authService
      .signup(emailRef.current.value, passwordRef.current.value)
      .catch((e) => {
        setLoading(false);
        setError(e.message.replace(/Firebase:/, ''));
      });
  };

  return (
    <section className={styles.section}>
      <Header />
      <section className={styles.container}>
        <h2 className={styles.title}>Create a new account</h2>
        {error && <p className={styles.alert}>{error}</p>}
        <form action=''>
          <fieldset className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='email'>
                Email
              </label>
              <input
                className={styles.input}
                type='email'
                id='email'
                placeholder='Email'
                required
                ref={emailRef}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='password'>
                Password
              </label>
              <input
                className={styles.input}
                type='password'
                id='password'
                placeholder='Password'
                autoComplete='on'
                required
                ref={passwordRef}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='passwordConfirm'>
                Password Confirmation
              </label>
              <input
                className={styles.input}
                type='password'
                id='passwordConfirm'
                placeholder='Password'
                autoComplete='on'
                required
                ref={passwordConfirmRef}
              />
            </div>
            <div className={styles.formBtnGroup}>
              <button
                type='submit'
                className={styles.signup}
                onClick={onSignup}
              >
                Sign up
              </button>
            </div>
          </fieldset>
        </form>
        <div className={styles.signinContainer}>
          <a className={styles.signin} href='!#' onClick={goToSignin}>
            I already have an account!
          </a>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Signup;
