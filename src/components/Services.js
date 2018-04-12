import React from "react";
import "../styles/Services.css";

const services = [
  {
    title: "Web Design",
    img: "web-design.png",
    description:
      "Eum cu tantas legere complectitur.Tantas legere complectitur, hinc utamur ea eam ustolion mplectitur, hinc utal."
  },
  {
    title: "Graphic Design",
    img: "graphic-design.png",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas      legere complectitur.Tantas legere complectitur ustolion mplectitur, hinc utal."
  },
  {
    title: "Programming",
    img: "programming.png",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea e cu tantas legere com , eam ustolion mplectitur, hinc utal."
  },
  {
    title: "Photography",
    img: "photography.png",
    description:
      "Eum cu tantas legere complectitur.Tantas legere complectitur, hinc utamur ea eam ustolion mplectitur, hinc utal."
  }
];

const Services = () => {
  return (
    <div id="serviceSection">
      <div className="Services">
        {services.map((service, index) => (
          <div key={index} className="Services_card">
            <img src={`./img/${service.img}`} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <a href="" className="actionButton">
        Need service?
      </a>
    </div>
  );
};

export default Services;
