import React from "react";
import "../styles/Portfolio.css";

const projects = [
  {
    img: "projectImg.png",
    title: "Web Design",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur."
  },
  {
    img: "projectImg.png",
    title: "Photography",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur."
  },
  {
    img: "projectImg.png",
    title: "Programming",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur."
  },
  {
    img: "projectImg.png",
    title: "Web Design",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur."
  },
  {
    img: "projectImg.png",
    title: "Photography",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur."
  },
  {
    img: "projectImg.png",
    title: "Programming",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur."
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="Portfolio">
      <div className="Portfolio_header">
        <h2>The Design That Likes To Say Yes.</h2>
        <p>
          Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
          mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea,
          vis cu ubique referrentur, sed eu dicant expetendis.
        </p>
      </div>
      <div className="Portfolio_projects">
        <nav>
          <ul>
            <li>All</li>
            <li>Web</li>
            <li>Photography</li>
            <li>Graphic Design</li>
          </ul>
        </nav>
        <div className="Portfolio_projectWrapper">
          {projects.map((project, index) => (
            <div key={index} className="Portfolio_projectCard">
              <img src={`./img/${project.img}`} alt={project.title} />
              <div className="content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="">
          <i className="fas fa-arrow-alt-circle-down fa-3x" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
