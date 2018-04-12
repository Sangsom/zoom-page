import React, { Fragment } from "react";
import MediaQuery from "react-responsive";
import ResponsiveNavbar from "./ResponsiveNavbar";
import "../styles/hamburgers.css";
import "../styles/Navigation.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <Fragment>
      <MediaQuery minDeviceWidth={1024}>
        <nav className="Navigation">
          <NavLinks />
        </nav>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1023}>
        <ResponsiveNavbar />
      </MediaQuery>
    </Fragment>
  );
};

export default Navigation;
