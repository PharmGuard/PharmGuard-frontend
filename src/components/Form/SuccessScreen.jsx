import React from "react";

const SuccessScreen = ({ title, message, buttons, imageUrl }) => {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      {/* Success Image */}
      <div className="w-20 h-20 rounded-full bg-success-10 flex items-center justify-center">
        <img src={imageUrl} alt={title} />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-primary">{title}</h2>

      {/* Message */}
      <p className="text-primary-text max-w-md">{message}</p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              button.primary
                ? "bg-primary text-white hover:bg-blue-700"
                : "bg-white text-primary-text border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuccessScreen;
