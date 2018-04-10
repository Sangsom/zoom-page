import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="header">
        <h2>The Design That Likes To Say Yes.</h2>
        <p>
          Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
          mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea,
          vis cu ubique referrentur, sed eu dicant expetendis.
        </p>
      </div>
      <div className="projects">
        <nav>
          <ul>
            <li>All</li>
            <li>Web</li>
            <li>Photography</li>
            <li>Graphic Design</li>
          </ul>
        </nav>
        <div className="projectWrapper">
          <div className="projectCard">
            <img src="./img/projectImg.png" alt="" />
            <div className="content">
              <h2>Web Design</h2>
              <p>
                Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas
                legere complectitur.
              </p>
            </div>
          </div>
          <div className="projectCard">
            <img src="./img/projectImg.png" alt="" />
            <div className="content">
              <h2>Photography</h2>
              <p>
                Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas
                legere complectitur.
              </p>
            </div>
          </div>
          <div className="projectCard">
            <img src="./img/projectImg.png" alt="" />
            <div className="content">
              <h2>Programming</h2>
              <p>
                Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas
                legere complectitur.
              </p>
            </div>
          </div>
          <div className="projectCard">
            <img src="./img/projectImg.png" alt="" />
            <div className="content">
              <h2>Web Design</h2>
              <p>
                Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas
                legere complectitur.
              </p>
            </div>
          </div>
          <div className="projectCard">
            <img src="./img/projectImg.png" alt="" />
            <div className="content">
              <h2>Photography</h2>
              <p>
                Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas
                legere complectitur.
              </p>
            </div>
          </div>
          <div className="projectCard">
            <img src="./img/projectImg.png" alt="" />
            <div className="content">
              <h2>Programming</h2>
              <p>
                Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas
                legere complectitur.
              </p>
            </div>
          </div>
        </div>

        <a href="">
          <i className="fas fa-arrow-alt-circle-down fa-3x" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
