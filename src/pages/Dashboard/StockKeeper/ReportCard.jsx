import React from "react";

const ReportCard = ({title, description, onGenerate }) => (
  <div
    style={{
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      padding: "22px 22px 18px",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}
  >
    {/* Icon */}
    <div
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "8px",
        background: "#eff4ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "4px",
      }}
    >
      <Icon size={18} color="#1a4fd6" strokeWidth={2} />
    </div>

    {/* Title */}
    <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#1a202c" }}>
      {title}
    </div>

    {/* Description */}
    <div style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "10px" }}>
      {description}
    </div>

    {/* Button */}
    <button
      onClick={onGenerate}
      style={{
        width: "100%",
        padding: "8px 0",
        border: "1px solid #e5e7eb",
        borderRadius: "6px",
        background: "#fff",
        color: "#374151",
        fontSize: "12.5px",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#eff4ff";
        e.currentTarget.style.borderColor = "#1a4fd6";
        e.currentTarget.style.color = "#1a4fd6";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.borderColor = "#e5e7eb";
        e.currentTarget.style.color = "#374151";
      }}
    >
      Generate Report
    </button>
  </div>
);

export default ReportCard;
