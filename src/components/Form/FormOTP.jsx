import React, { useRef } from "react";

const FormOTP = ({ value, onChange, error, length = 4 }) => {
  const inputRefs = useRef([]);

  const handleChange = (index, inputValue) => {
    if (inputValue.length > 1) return;

    const newValue = value.split("");
    newValue[index] = inputValue;
    onChange(newValue.join(""));

    if (inputValue && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 justify-center">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={`w-12 h-14 text-center text-xl font-semibold rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
              error
                ? "border-red-500 bg-red-50"
                : "border-gray-300 bg-white hover:border-gray-400"
            }`}
          />
        ))}
      </div>
      {error && (
        <span className="text-sm text-red-600 text-center">{error}</span>
      )}
    </div>
  );
};

export default FormOTP;
