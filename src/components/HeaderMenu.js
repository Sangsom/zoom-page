import React from "react";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <li className="active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#serviceSection">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contactUs">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
