import React from "react";
import "../styles/Map.css";

class Map extends React.Component {
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 56.949649, lng: 24.105186 },
      zoom: 11,
      mapTypeId: "roadmap"
    });
  }

  render() {
    return (
      <div id="mapSection" className="Map">
        <div id="map" />
        <div className="Map_right">
          <div className="Map_address">
            <p>Awesome Address 432</p>
            <p>ourmail@sometype.com</p>
            <p>+321(0)32 123 343 492</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
