import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ReviewBox from "./template/ReviewBox";
import About from "./About";

function Navigation(props) {
  const [navItems, setNavItems] = useState([
    {
      name: "Home",
      target: "/",
      active: true,
    },
    {
      name: "About",
      target: "/About",
      active: false,
    },
    {
      name: "Contact",
      target: "/Contact",
      active: false,
    },
  ]);

  function handleClick(index) {
    const navItems2 = [...navItems];
    navItems2.forEach((e) => (e.active = false));
    navItems2[index].active = true;
    setNavItems(navItems2);
  }

  return (
    <Router>
      <div id="navigation">
        <div id="navBar">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              className={"navItem " + (item.active ? "active" : "")}
              onClick={() => handleClick(i)}
              to={item.target}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Switch>
          <Route exact path="/">
            <ReviewBox />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <ReviewBox />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
