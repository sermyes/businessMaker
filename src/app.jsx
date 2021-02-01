import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Main from "./components/main/main";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Forgot from "./components/forgot/forgot";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Signin authService={authService} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/forgot">
            <Forgot />
          </Route>
          <Route exact path="/main">
            <Main authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
