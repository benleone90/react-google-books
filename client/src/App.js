import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
      </div>
    </Router>
  );
}

export default App;
