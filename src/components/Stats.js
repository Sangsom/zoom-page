import React from "react";
import "../styles/Stats.css";

const stats = [
  {
    name: "Completed Projects",
    icon: "projects.png",
    total: 2093
  },
  {
    name: "Clicks pressed",
    icon: "mouse.png",
    total: "9 134 835"
  },
  {
    name: "Mails sent & received",
    icon: "mail.png",
    total: 7143
  },
  {
    name: "Jokes told",
    icon: "bubble.png",
    total: 427
  }
];

const Stats = () => {
  return (
    <div id="stats" className="Stats">
      {stats.map(s => (
        <div key={s.name} className="Stats_card">
          <img src={`./img/${s.icon}`} alt={s.name} />
          <h2 className="total">{s.total}</h2>
          <p>{s.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
