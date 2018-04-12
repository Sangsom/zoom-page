import React from "react";

const Hamburger = props => {
  const { active, onClick } = props;
  return (
    <button
      className={`hamburger hamburger--collapse ${active ? "is-active" : ""}`}
      type="button"
      onClick={onClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};

export default Hamburger;
