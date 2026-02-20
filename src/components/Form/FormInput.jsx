import React from "react";

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-primary">
          {`${label}*`}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
          error
            ? "border-red-500 bg-red-50"
            : "border-primary bg-white hover:border-primary-dark"
        }`}
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default FormInput;
