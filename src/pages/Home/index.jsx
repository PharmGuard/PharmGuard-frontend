import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Overview from "./Overview";
import Benefits from "./Benefits";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Overview />
      <Benefits />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
