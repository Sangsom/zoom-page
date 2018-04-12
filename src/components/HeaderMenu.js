import React, { Fragment } from "react";
import MediaQuery from "react-responsive";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <Fragment>
      <MediaQuery minDeviceWidth={1024}>
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
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1023}>
        <p>Hamburegr</p>
      </MediaQuery>
    </Fragment>
  );
};

export default Navigation;
