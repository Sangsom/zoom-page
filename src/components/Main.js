import React from "react";
import Services from "./Services";
import WebPages from "./WebPages";
import FullyResponsive from "./FullyResponsive";
import Portfolio from "./Portfolio";
import Stats from "./Stats";
import Team from "./Team";
import Quote from "./Quote";
import Newsletter from "./Newsletter";
import About from "./About";

const Main = () => {
  return (
    <main>
      <Services />
      <WebPages />
      <FullyResponsive />
      <Portfolio />
      <Stats />
      <Team />
      <Quote />
      <Newsletter />
      <About />
    </main>
  );
};

export default Main;
