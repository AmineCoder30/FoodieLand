// File: src/components/Directions.js

import React from "react";
import steps from "../../../constants/steps";
const Directions = () => {
  return (
    <div className="w-full py-6 bg-white">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Directions</h2>

      {/* Steps */}
      <div className="space-y-12 px-3">
        {steps.map((step) => (
          <div key={step.number} className="space-y-4">
            {/* Step Header */}
            <div className="flex items-center">
              <h3 className="text-lg font-bold text-gray-800 ">
                {step.number}.{step.title}
              </h3>
            </div>
            {/* Description */}
            <p className="text-gray-600">{step.description}</p>
            {/* Image */}
            {step.image && (
              <img
                src={step.image}
                loading="lazy"
                alt={`Step ${step.number}`}
                className="w-full rounded-lg object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directions;
