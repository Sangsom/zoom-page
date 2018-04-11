import React from "react";
import "../styles/Team.css";

const teamMembers = [
  {
    photo: "team.png",
    name: "John Doe",
    title: "Graphic Designer",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu."
  },
  {
    photo: "team.png",
    name: "John Doe",
    title: "Graphic Designer",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu."
  },
  {
    photo: "team.png",
    name: "John Doe",
    title: "Graphic Designer",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu."
  },
  {
    photo: "team.png",
    name: "John Doe",
    title: "Graphic Designer",
    description:
      "Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu."
  }
];

const Team = () => {
  return (
    <section id="team" className="Team">
      <div className="Team_wrapper">
        <h2>Behold the Power of Team.</h2>
        <p>
          Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
          mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea,
          vis cu ubique referrentur, sed eu dicant expetendis.
        </p>
      </div>

      <div className="Team_membersWrapper">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <img src={`./img/${member.photo}`} alt={member.name} />
            <div className="memberDetails">
              <h2>{member.name}</h2>
              <h3>{member.title}</h3>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
