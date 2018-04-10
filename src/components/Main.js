import React from "react";
import Services from "./Services";
import WebPages from "./WebPages";
import FullyResponsive from "./FullyResponsive";
import Portfolio from "./Portfolio";
import Stats from "./Stats";

const Main = () => {
  return (
    <main>
      <Services />
      <WebPages />
      <FullyResponsive />
      <Portfolio />
      <Stats />
    </main>
  );
};

export default Main;
