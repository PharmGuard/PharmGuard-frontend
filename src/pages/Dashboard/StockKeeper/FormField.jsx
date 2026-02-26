
const FormField = ({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        htmlFor={name}
        style={{ fontSize: "13px", fontWeight: "500", color: "#374151" }}
      >
        {label}
        {required && (
          <span style={{ color: "#e53e3e", marginLeft: "3px" }}>*</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          padding: "9px 12px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          fontSize: "13.5px",
          color: "#1a202c",
          background: "#fff",
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "#1a4fd6";
          e.target.style.boxShadow = "0 0 0 3px rgba(26,79,214,0.1)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#d1d5db";
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
};

export default FormField;