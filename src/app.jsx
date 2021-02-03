import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import styles from "./app.module.css";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Forgot from "./components/forgot/forgot";
import NoteMaker from "./components/noteMaker/noteMaker";
import CardMaker from "./components/cardMaker/cardMaker";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const Main = ({ children, authService }) => {
  const history = useHistory();

  const onSignout = () => {
    authService.signout();
  };

  return (
    <section className={styles.container}>
      <Header onSignout={onSignout} />
      {children}
      <Footer />
    </section>
  );
};

function App({ FileInput, authService, cardRespository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
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
          <Main authService={authService}>
            <Route exact path="/main/cardMaker">
              <CardMaker
                FileInput={FileInput}
                authService={authService}
                cardRespository={cardRespository}
              />
            </Route>
            <Route exact path="/main/noteMaker">
              <NoteMaker
                FileInput={FileInput}
                authService={authService}
                cardRespository={cardRespository}
              />
            </Route>
          </Main>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
