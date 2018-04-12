import React, { Component, Fragment } from "react";
import "../styles/Navigation_responsive.css";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";

class ResponsiveNavbar extends Component {
  state = {
    open: false
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    const { toggleOpen } = this;

    return (
      <Fragment>
        {!open && <Hamburger active={open} onClick={toggleOpen} />}

        {open && (
          <nav className="Navigation_responsive">
            <NavLinks />
            <Hamburger active={open} onClick={toggleOpen} />
          </nav>
        )}
      </Fragment>
    );
  }
}

export default ResponsiveNavbar;
