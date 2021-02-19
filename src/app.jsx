import React, { useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Forgot from "./components/forgot/forgot";
import NoteMaker from "./components/noteMaker/noteMaker";
import CardMaker from "./components/cardMaker/cardMaker";

function App({ FileInput, authService, cardRespository, noteRespository }) {
  const onSignout = useCallback(() => {
    authService.signout();
  }, [authService]);

  return (
    <div className={styles.app}>
      <BrowserRouter basename="/businessMaker">
        <Switch>
          <Route exact path="/">
            <Signin authService={authService} />
          </Route>
          <Route exact path="/signup">
            <Signup authService={authService} />
          </Route>
          <Route exact path="/forgot">
            <Forgot authService={authService} />
          </Route>
          <Route exact path="/cardMaker">
            <CardMaker
              FileInput={FileInput}
              authService={authService}
              cardRespository={cardRespository}
              onSignout={onSignout}
            />
          </Route>
          <Route exact path="/noteMaker">
            <NoteMaker
              authService={authService}
              noteRespository={noteRespository}
              onSignout={onSignout}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
