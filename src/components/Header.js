import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="headerTop">
          <div className="left">
            <img src="./img/logo.png" alt="" />
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
      </header>
    );
  }
}

export default Header;
