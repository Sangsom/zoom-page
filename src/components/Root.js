import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";

class Root extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default Root;
