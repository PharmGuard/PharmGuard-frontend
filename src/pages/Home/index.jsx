import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Overview from "./Overview";
import Benefits from "./Benefits";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Overview />
      <Benefits />
    </div>
  );
};

export default Home;
