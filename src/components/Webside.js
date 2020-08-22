import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CornerItem from "./CornerItem";
import Button from "./Button";
import Navigation from "./Navigation";
import Course from "./Course";

function Webside() {
  function handleClick() {
    console.log("icon clicked");
  }
  return (
    <Router>
      <CornerItem onClick={handleClick} />
      <div className="container">
        <Navigation />
        <Link to="/Course">
          <Button />
        </Link>
      </div>
      <Switch>
        <Route path="/Course">
          <Course />
        </Route>
      </Switch>
    </Router>
  );
}

export default Webside;
