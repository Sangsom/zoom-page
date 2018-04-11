import React, { Component } from "react";
import "../styles/Header.css";
import Navigation from "./HeaderMenu";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header_top">
          <div className="Header_left">
            <a href="/">
              <img src="./img/logo.png" alt="Zoom" />
            </a>
          </div>
          <div className="Header_right">
            <Navigation />
          </div>
        </div>
        <div className="Header_bottom">
          <h1>Try Design, You'll Like It.</h1>
          <a href="" className="actionButton">
            Show me then !!!
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
