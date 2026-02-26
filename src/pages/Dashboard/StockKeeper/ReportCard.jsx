import React from "react";
import { FileText } from "lucide-react";

const ReportCard = ({
  title,
  description,
  onGenerate,
  loading,
  Icon = FileText,
}) => (
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
      disabled={loading}
      style={{
        width: "100%",
        padding: "8px 0",
        border: "1px solid #e5e7eb",
        borderRadius: "6px",
        background: "#fff",
        color: "#374151",
        fontSize: "12.5px",
        fontWeight: "500",
        cursor: loading ? "wait" : "pointer",
        transition: "all 0.2s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        opacity: loading ? 0.7 : 1,
      }}
      onMouseEnter={(e) => {
        if (!loading) {
          e.currentTarget.style.background = "#eff4ff";
          e.currentTarget.style.borderColor = "#1a4fd6";
          e.currentTarget.style.color = "#1a4fd6";
        }
      }}
      onMouseLeave={(e) => {
        if (!loading) {
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.borderColor = "#e5e7eb";
          e.currentTarget.style.color = "#374151";
        }
      }}
    >
      {loading && (
        <svg
          className="animate-spin"
          style={{ width: "14px", height: "14px" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {loading ? "Generating..." : "Generate Report"}
    </button>
  </div>
);

export default ReportCard;
