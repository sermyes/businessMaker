import React, { useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';
import Forgot from './components/forgot/forgot';
import NoteMaker from './components/noteMaker/noteMaker';
import CardMaker from './components/cardMaker/cardMaker';

function App({ FileInput, authService, cardRespository, noteRespository }) {
  const onSignout = useCallback(() => {
    authService.signout();
  }, [authService]);

  return (
    <div className={styles.app}>
      <BrowserRouter basename='/businessMaker'>
        <Routes>
          <Route
            exact
            path='/'
            element={<Signin authService={authService} />}
          />
          <Route
            exact
            path='/signup'
            element={<Signup authService={authService} />}
          />
          <Route
            exact
            path='/forgot'
            element={<Forgot authService={authService} />}
          />
          <Route
            exact
            path='/cardMaker'
            element={
              <CardMaker
                FileInput={FileInput}
                authService={authService}
                cardRespository={cardRespository}
                onSignout={onSignout}
              />
            }
          />
          <Route
            exact
            path='/noteMaker'
            element={
              <NoteMaker
                authService={authService}
                noteRespository={noteRespository}
                onSignout={onSignout}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
