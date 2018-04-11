import React from "react";

const ContactUs = () => {
  const handleButton = e => {
    e.preventDefault();
  };

  return (
    <section id="contactUs">
      <div className="wrapper">
        <h2>Contact Us</h2>
        <p>
          Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
          mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea,
          vis cu ubique referrentur, sed eu dicant expetendis.
        </p>
      </div>

      <div className="formWrapper">
        <form action="">
          <div className="halfWrapper">
            <input
              type="text"
              className="half"
              name="name"
              placeholder="Your name here"
            />
            <input
              type="email"
              className="half"
              name="email"
              placeholder="Your mail here"
            />
          </div>

          <input type="text" name="message" placeholder="Your message here" />
          <button onClick={handleButton}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
