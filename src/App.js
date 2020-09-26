import React from "react";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar/Navbar";
import Explorer from "./components/Explorer";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Explorer />
    </React.Fragment>
  );
}

export default App;
