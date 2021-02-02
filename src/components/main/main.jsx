import React, { useEffect } from "react";
import { useHistory, BrowserRouter, Route, Switch } from "react-router-dom";
import CardMaker from "../cardMaker/cardMaker";
import Footer from "../footer/footer";
import Header from "../header/header";
import MainContent from "../mainContent/mainContent";
import Scheduler from "../scheduler/scheduler";
import styles from "./main.module.css";

const Main = ({ authService, FileInput }) => {
  const history = useHistory();

  const onSignout = () => {
    authService.signout();
  };

  // history.location.uid

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.container}>
      <Header onSignout={onSignout} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/main">
            <MainContent />
          </Route>
          <Route exact path="/main/cardMaker">
            <CardMaker FileInput={FileInput} />
          </Route>
          <Route exact path="/main/scheduler">
            <Scheduler />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </section>
  );
};

export default Main;
