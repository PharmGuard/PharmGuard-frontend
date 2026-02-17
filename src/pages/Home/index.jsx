import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
