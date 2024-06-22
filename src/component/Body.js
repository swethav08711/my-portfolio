import React from "react";
import Header from "./Header";
import About from "./About";
import Technology from "./Technology";
import Project from "./Project";
import Contact from "./Contact";

const Body = () => {
  return (
    <div>
      <Header />
      <About />
      <Technology />
      <Project/>
      <Contact/>
    </div>
  );
};

export default Body;
