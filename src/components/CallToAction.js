import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Course from "./Course";

function CallToAction() {
  return (
    <Router>
      <div id="callToAction">
        <div id="title">SSX101.in</div>
        <div>Essential ideas for Service Selection Board Interview.</div>
        <div>
          <Link to="/Course">
            <div className="button">Start Course</div>
          </Link>
        </div>
      </div>

      <Switch>
        <Route path="/Course">
          <Course />
        </Route>
      </Switch>
    </Router>
  );
}

export default CallToAction;
