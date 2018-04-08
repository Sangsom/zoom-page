import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div id="logo">Logo</div>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
