import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/_App.scss";
import Main from "./Main";
import Monster from "./Monster";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:monsterName" component={Monster} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
