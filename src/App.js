import React, { Component } from "react";

import FoodContainer from "./components/FoodContainer/FoodContainer";
import Header from "./components/Header/Header"


class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <FoodContainer />
      </div>
    );
  }
}

export default App;
