import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="headerTop">
          <div className="left">
            <a href="/">
              <img src="./img/logo.png" alt="Zoom" />
            </a>
          </div>
          <div className="right">
            <nav className="menu">
              <ul>
                <li className="active">Home</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="headerBottom">
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
