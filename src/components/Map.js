import React from "react";
import "../styles/Map.css";

const Map = () => {
  return (
    <div id="mapSection" className="Map">
      <div className="Map_left" />
      <div className="Map_right">
        <div className="Map_address">
          <p>Awesome Address 432</p>
          <p>ourmail@sometype.com</p>
          <p>+321(0)32 123 343 492</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
