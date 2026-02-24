import React from "react";
import Button from "../../../components/Button";
import ArrowLeft from "../../../assets/icons/arrow-left.svg?react";
import Login from "../../../assets/icons/login.svg?react";

const CallToAction = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-4 py-14 space-y-12">
        <div aria-label="Call To Action Heading" className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white text-center leading-tight">
            Start managing your pharmacy smarter today!
          </h2>
          <p className="text-white text-center mt-2">
            Join hundreds of pharmacies already using PharmGuard to streamline
            their operations
          </p>
        </div>
        <div
          aria-label="Call To Action Buttons"
          className="flex flex-col sm:flex-row items-center justify-center gap-6 border-b-2 border-blue-500 pb-12 max-w-5xl mx-auto mb-12"
        >
          <Button to="/auth/verify-account" variant="outline" className="w-full">
            Verify Account
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <Button to="/auth/login" className="w-full" variant="blue">
            <Login className="w-6 h-6" />
            Login
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
