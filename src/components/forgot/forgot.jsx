import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './forgot.module.css';

const Forgot = ({ authService }) => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const goToSignin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const onForgot = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    if (emailRef.current.value === '') {
      setError('Please, Enter your email');
    } else {
      authService
        .resetPassword(emailRef.current.value)
        .then((_) => {
          setLoading(false);
          window.alert('sent by your e-mail');
          navigate('/');
        })
        .catch((_) => {
          setLoading(false);
          setError(`your email can't found!`);
        });
    }
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
        {error && <p className={styles.alert}>{error}</p>}
        <form action=''>
          <fieldset className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor=''>
                email
              </label>
              <input
                className={styles.input}
                type='email'
                placeholder='email'
                ref={emailRef}
              />
            </div>
            <div className={styles.btnGroup}>
              <button className={styles.btn} onClick={onForgot} type='submit'>
                Submit
              </button>
            </div>
          </fieldset>
        </form>
        <div className={styles.signinContainer}>
          <a className={styles.signin} href='!#' onClick={goToSignin}>
            I remembered the password!
          </a>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Forgot;
