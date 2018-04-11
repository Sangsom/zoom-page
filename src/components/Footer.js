import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <p>
        &copy; {new Date().getFullYear()} - <a href="/">Zoom</a> All Right
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
