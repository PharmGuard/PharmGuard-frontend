import React from "react";
import data from "../../../utils/benefits.json";

const Benefits = () => {
  return (
    <section className="bg-white py-16" aria-label="Benefits Section">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-2" aria-label="Benefits Heading">
          <h2 className="text-primary text-3xl md:text-5xl font-bold">
            Why Choose PharmGuard?
          </h2>
          <p className="text-primary-text">
            A smarter, safer, and more efficient way to manage pharmacy
            inventory
          </p>
        </div>

        <div className="flex items-center justify-between gap-12 flex-col lg:flex-row" aria-label="Benefits Content">
          <div
            className="flex flex-col items-center gap-8"
            aria-label="Benefits List"
          >
            {data.map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-center w-full max-w-3xl gap-6"
              >
                <div>
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-primary text-xl font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-text max-w-md text-lg">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img
              src="/benefits.svg"
              alt="Benefits illustration"
              className="hidden lg:flex w-full max-w-md lg:max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
