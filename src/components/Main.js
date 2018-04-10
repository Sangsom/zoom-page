import React from "react";
import Services from "./Services";
import WebPages from "./WebPages";
import FullyResponsive from "./FullyResponsive";
import Portfolio from "./Portfolio";
import Stats from "./Stats";
import Team from "./Team";

const Main = () => {
  return (
    <main>
      <Services />
      <WebPages />
      <FullyResponsive />
      <Portfolio />
      <Stats />
      <Team />
    </main>
  );
};

export default Main;
