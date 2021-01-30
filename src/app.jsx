import React from "react";
import "./app.css";
import "./app.module.css";
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
