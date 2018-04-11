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
import Add from "./Add";
import Clients from "./Clients";
import ContactUs from "./ContactUs";

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
      <Add />
      <Clients />
      <ContactUs />
    </main>
  );
};

export default Main;
