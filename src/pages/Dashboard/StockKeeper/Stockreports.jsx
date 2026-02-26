import React from "react";
import ReportCard from "./ReportCard";
import { reports } from "../../../utils/utils";

export default function StockReports() {
  const handleGenerate = () => {
    console.log("Generate report clicked");
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "10px",
        padding: "28px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
      }}
    >
      {/* Page heading */}
      <h2
        style={{
          fontSize: "18px",
          fontWeight: "700",
          color: "#1a202c",
          margin: "0 0 4px 0",
        }}
      >
        Reports
      </h2>
      <p style={{ fontSize: "13px", color: "#9ca3af", margin: "0 0 24px 0" }}>
        Generate inventory and stock reports
      </p>

      {/* Available Reports section */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          padding: "20px 24px 28px",
          background: "#fff",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#1a202c",
              marginBottom: "3px",
            }}
          >
            Available Reports
          </div>
          <div style={{ fontSize: "12.5px", color: "#9ca3af" }}>
            Select a report type to generate
          </div>
        </div>

        {/* 2-column responsive grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {reports.map((r) => (
            <ReportCard
              key={r.id}
              Icon={r.icon}
              title={r.title}
              description={r.description}
              onGenerate={handleGenerate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
