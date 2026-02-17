import React from "react";
import data from "../../utils/features.json";
import {Card, CardDescription, CardHeader} from "../Card";

const Features = () => {
  return (
    <section className="py-20 bg-white" aria-label="Features Section">
      <div className="containers">
        <div className="text-center mx-auto px-4" aria-label="Features Heading">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Smart Tools at a Glance
          </h2>
          <p className="text-primary-text max-w-lg mx-auto">
            Everything you need to track, predict and stay right on top of your
            pharmacy stock
          </p>
        </div>
        <div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Features List"
        >
          {data.map((feature) => (
            <Card
              key={feature.id}
              className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader className="items-center space-y-6">
              <img
                src={feature.icon}
                alt={`${feature.title} Icon`}
                className="h-16 w-16"
              />
              <h3 className="text-xl font-semibold text-primary">
                {feature.title}
              </h3>
              </CardHeader>
              <CardDescription className="text-primary-text max-w-md text-lg text-center">{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
