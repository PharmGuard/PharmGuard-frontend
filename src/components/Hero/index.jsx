import React from "react";
import Button from "../Button";
import Login from "../../assets/icons/login.svg?react";
import ArrowLeft from "../../assets/icons/arrow-left.svg?react";

const Hero = () => {
  return (
    <section className="bg-secondary-bg py-14" aria-label="Hero Section">
      <div className="containers py-20 flex items-center justify-between gap-12">
        <div className="w-full lg:max-w-2/4 space-y-6" aria-label="Hero Content">
          <h1 className="text-5xl md:text-7xl max-w-screen-sm leading-tight font-bold">
            Manage Pharmacy stock{" "}
            <span className="text-primary">effortlessly</span>
          </h1>
          <p className="text-primary-text text-lg max-w-xl">
            PharmGuard digitizes medication tracking for pharmacies with
            AI-powered predictions, real time alerts, and tamper-proof audit
            trails. Keep essential medications available at all times.
          </p>

          <div className="flex gap-4">
            <Button to="/login" variant="primary">
              <Login className="w-6 h-6"/>
              Login
            </Button>
            <Button to="/signup" variant="outline">
              Sign Up
              <ArrowLeft className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <div aria-label="Hero Image" className="hidden lg:flex">
          <img
            src="/hero.svg"
            alt="Pharmacy stock management illustration"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
