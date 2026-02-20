import React from "react";

const FormButton = ({ children, loading = false, className = "" }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      style={{
        background: "linear-gradient(180deg, #155DFC 0%, #193CB8 100%)",
      }}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default FormButton;
