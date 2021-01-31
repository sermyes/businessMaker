import React from "react";
import styles from "./app.module.css";
import Home from "./components/home/home";
import Login from "./components/login/login";

function App() {
  return (
    <div className={styles.app}>
      <Login />
      <Home />
    </div>
  );
}
export default App;
