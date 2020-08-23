import React, { Component } from "react";
import CornerItem from "./components/CornerItem";
import WebSide from "./components/Webside";

class App extends Component {
  render() {
    return (
      <div>
        <CornerItem />
        <WebSide />
        <div id="intro">
          <p>Monika Jangir</p>
          <p>Recommended for Indian Army and Indian Air Force (Flying)</p>
        </div>
      </div>
    );
  }
}

export default App;
