const StatusBadge = ({ status }) => {
  const isLow = status === "Low Stock";
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: "20px",
        fontSize: "11.5px",
        fontWeight: "600",
        background: isLow ? "#fff7ed" : "#f0fdf4",
        color: isLow ? "#c2410c" : "#15803d",
        border: `1px solid ${isLow ? "#fed7aa" : "#bbf7d0"}`,
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;