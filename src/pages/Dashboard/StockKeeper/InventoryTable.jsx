import StatusBadge from "../../../components/dashboard/StatusBadge";

const InventoryTable = ({ data, onView, onEdit, onDelete }) => {
  const thStyle = {
    padding: "10px 16px",
    fontSize: "12.5px",
    fontWeight: "500",
    color: "#6b7280",
    textAlign: "left",
    borderBottom: "1px solid #e5e7eb",
    whiteSpace: "nowrap",
    background: "#fff",
  };

  const tdStyle = {
    padding: "16px 16px",
    fontSize: "13.5px",
    color: "#374151",
    borderBottom: "1px solid #f0f0f0",
    verticalAlign: "middle",
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px" }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Medication</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Batch</th>
            <th style={thStyle}>Expiry</th>
            <th style={thStyle}>Quantity</th>
            <th style={thStyle}>Status</th>
            <th style={{ ...thStyle, textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f8faff")
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              <td style={tdStyle}>
                <div
                  style={{
                    fontWeight: "600",
                    color: "#1a202c",
                    fontSize: "13.5px",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: "11.5px",
                    color: "#9ca3af",
                    marginTop: "2px",
                  }}
                >
                  {item.price}
                </div>
              </td>
              <td style={tdStyle}>{item.category}</td>
              <td style={tdStyle}>{item.batch}</td>
              <td style={tdStyle}>{item.expiry}</td>
              <td style={{ ...tdStyle, fontWeight: "600" }}>{item.quantity}</td>
              <td style={tdStyle}>
                <StatusBadge status={item.status} />
              </td>
              <td style={{ ...tdStyle, textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  {/* View */}
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#3b82f6",
                      padding: "4px",
                      borderRadius: "4px",
                      display: "flex",
                    }}
                    title="View"
                    onClick={() => onView(item)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#eff6ff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "none")
                    }
                  >
                    <Eye size={16} strokeWidth={2} />
                  </button>
                  {/* Edit */}
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#10b981",
                      padding: "4px",
                      borderRadius: "4px",
                      display: "flex",
                    }}
                    title="Edit"
                    onClick={() => onEdit(item)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#ecfdf5")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "none")
                    }
                  >
                    <Pencil size={15} strokeWidth={2} />
                  </button>
                  {/* Delete */}
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#ef4444",
                      padding: "4px",
                      borderRadius: "4px",
                      display: "flex",
                    }}
                    title="Delete"
                    onClick={() => onDelete(item)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#fef2f2")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "none")
                    }
                  >
                    <Trash2 size={15} strokeWidth={2} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;