import React from "react";

const WebPages = () => {
  return (
    <section id="webpages">
      <div className="wrapper">
        <h2>The Design That Likes To Say Yes.</h2>
        <p>
          Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
          mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea,
          vis cu ubique referrentur, sed eu dicant expetendis.
        </p>
      </div>

      <div className="browserWrapper">
        <div className="browser leftBrowser">
          <img src="./img/left-browser.png" alt="Left Browser" />
        </div>
        <div className="browser middleBrowser">
          <img src="./img/middle-browser.png" alt="Middle Browser" />
        </div>
        <div className="browser rightBrowser">
          <img src="./img/right-browser.png" alt="Right Browser" />
        </div>
      </div>
    </section>
  );
};

export default WebPages;
