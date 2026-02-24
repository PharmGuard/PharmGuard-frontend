import React from "react";
import Button from "/src/components/Button";
import Login from "/src/assets/icons/login.svg?react";
import ArrowLeft from "/src/assets/icons/arrow-left.svg?react";

const Hero = () => {
  return (
    <section className="bg-secondary-bg pt-14" aria-label="Hero Section">
      <div className="containers py-20 flex items-center justify-between gap-12">
        <div
          className="w-full lg:max-w-2/4 space-y-8"
          aria-label="Hero Content"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl max-w-screen-sm lg:max-w-screen-md leading-tight font-bold">
            Manage Pharmacy stock{" "}
            <span className="text-primary">effortlessly</span>
          </h1>
          <p className="text-primary-text text-xl max-w-2xl leading-relaxed">
            PharmGuard digitizes medication tracking for pharmacies with
            AI-powered predictions, real time alerts, and tamper-proof audit
            trails. Keep essential medications available at all times.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 max-w-lg">
            <Button to="/auth/login" variant="primary" className="w-full">
              <Login className="w-6 h-6" />
              Login
            </Button>
            <Button
              to="/auth/verify-account"
              variant="outline"
              className="w-full"
            >
              Verify Account
              <ArrowLeft className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <div aria-label="Hero Image" className="hidden lg:flex">
          <img
            src="/hero.svg"
            alt="Pharmacy stock management illustration"
            className="w-full max-w-5xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
