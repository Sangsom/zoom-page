import React from "react";
import "../styles/Quote.css";

const Quote = () => {
  return (
    <section id="quote" className="Quote">
      <img src="./img/quote.png" alt="Quote" />
      <h2>We realize and actualize your vision</h2>
      <h3>John Doe CEO</h3>
      <div className="Quote_arrows">
        <img
          src="./img/left-arrow.png"
          className="Quote_arrow"
          alt="Left arrow"
        />
        <img
          src="./img/right-arrow.png"
          className="Quote_arrow"
          alt="Right arrow"
        />
      </div>
    </section>
  );
};

export default Quote;
