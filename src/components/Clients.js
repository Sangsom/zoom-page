import React from "react";

const clientData = [
  {
    name: "Anya Stoen",
    profession: "Graphic Designer",
    description:
      "“Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea.”"
  },
  {
    name: "Anya Stoen",
    profession: "Graphic Designer",
    description:
      "“Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea.”"
  },
  {
    name: "Anya Stoen",
    profession: "Graphic Designer",
    description:
      "“Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea.”"
  }
];

const Clients = () => {
  return (
    <section id="clients">
      <div className="wrapper">
        <h2>What clients say</h2>
        <p>
          Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
          mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea,
          vis cu ubique referrentur, sed eu dicant expetendis.
        </p>
      </div>
      <div className="clientsWrapper">
        {clientData.map((client, index) => (
          <div key={index} className="card">
            <h2 className="name">{client.name}</h2>
            <h3 className="profession">{client.profession}</h3>
            <p className="description">{client.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
