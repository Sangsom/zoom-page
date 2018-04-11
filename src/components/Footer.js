import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} -{" "}
        <a className="footerLink" href="/">
          Zoom
        </a>{" "}
        All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
