import { useState } from "react";
import {
  LayoutDashboard,
  PackagePlus,
  Archive,
  FileBarChart2,
  User,
  LogOut,
  Bell,
  Search,
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const navItems = [
  { label: "Overview", icon: LayoutDashboard, id: "overview" },
  { label: "Add Stock", icon: PackagePlus, id: "add-stock" },
  { label: "Inventory", icon: Archive, id: "inventory" },
  { label: "Stock Reports", icon: FileBarChart2, id: "stock-reports" },
];

const medications = [
  {
    id: 1,
    name: "Amoxicillin 500mg",
    price: "$2.5 per unit",
    category: "Antibiotics",
    batch: "AMX-2024-001",
    expiry: "6/14/2025",
    quantity: 150,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Paracetamol 500mg",
    price: "$0.5 per unit",
    category: "Analgesics",
    batch: "PCM-2024-005",
    expiry: "12/19/2025",
    quantity: 35,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Ibuprofen 400mg",
    price: "$1.2 per unit",
    category: "Analgesics",
    batch: "IBU-2024-003",
    expiry: "4/29/2024",
    quantity: 80,
    status: "In Stock",
  },
  {
    id: 4,
    name: "Metformin 850mg",
    price: "$0.8 per unit",
    category: "Antidiabetics",
    batch: "MET-2024-007",
    expiry: "8/9/2025",
    quantity: 120,
    status: "In Stock",
  },
  {
    id: 5,
    name: "Omeprazole 20mg",
    price: "$1.8 per unit",
    category: "Gastrointestinal",
    batch: "OME-2024-002",
    expiry: "3/24/2025",
    quantity: 25,
    status: "Low Stock",
  },
];

const categories = [
  "All Categories",
  "Antibiotics",
  "Analgesics",
  "Antidiabetics",
  "Gastrointestinal",
];

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────

const Sidebar = ({ activeItem, onNavigate }) => (
  <aside
    style={{
      width: "220px",
      minWidth: "220px",
      background: "linear-gradient(180deg, #1a4fd6 0%, #1a3fbf 100%)",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      position: "sticky",
      top: 0,
      boxShadow: "4px 0 12px rgba(26,79,214,0.15)",
    }}
  >
    {/* Logo */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "16px 20px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          background: "rgba(255,255,255,0.18)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "#fff", fontWeight: "800", fontSize: "15px" }}>
          P
        </span>
      </div>
      <span style={{ color: "#fff", fontWeight: "700", fontSize: "17px" }}>
        PharmGuard
      </span>
    </div>

    {/* Nav */}
    <nav style={{ flex: 1, padding: "10px 12px", overflowY: "auto" }}>
      {navItems.map(({ label, icon: Icon, id }) => {
        const isActive = activeItem === id;
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              padding: "9px 14px",
              marginBottom: "2px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: isActive ? "rgba(255,255,255,0.18)" : "transparent",
              color: "#fff",
              fontSize: "13.5px",
              fontWeight: isActive ? "600" : "400",
              textAlign: "left",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              if (!isActive)
                e.currentTarget.style.background = "rgba(255,255,255,0.09)";
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.background = "transparent";
            }}
          >
            <Icon size={17} strokeWidth={2} />
            {label}
          </button>
        );
      })}
    </nav>

    {/* Bottom */}
    <div
      style={{ padding: "12px", borderTop: "1px solid rgba(255,255,255,0.1)" }}
    >
      {[
        { label: "Profile", icon: User },
        { label: "Logout", icon: LogOut },
      ].map(({ label, icon: Icon }) => (
        <button
          key={label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            padding: "10px 14px",
            marginBottom: "2px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "transparent",
            color: "rgba(255,255,255,0.8)",
            fontSize: "14px",
            textAlign: "left",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.09)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <Icon size={17} strokeWidth={2} />
          {label}
        </button>
      ))}
    </div>
  </aside>
);

// ─── TOPBAR ───────────────────────────────────────────────────────────────────

const TopBar = ({ title, user }) => (
  <header
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 28px",
      height: "62px",
      background: "#fff",
      borderBottom: "1px solid #e8edf3",
      position: "sticky",
      top: 0,
      zIndex: 10,
    }}
  >
    <h1
      style={{
        fontSize: "18px",
        fontWeight: "700",
        color: "#1a202c",
        margin: 0,
      }}
    >
      {title}
    </h1>
    <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "700",
            fontSize: "13px",
          }}
        >
          {user.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div style={{ lineHeight: "1.3" }}>
          <div
            style={{ fontSize: "13px", fontWeight: "600", color: "#1a202c" }}
          >
            {user.name}
          </div>
          <div style={{ fontSize: "11px", color: "#7a8499" }}>{user.role}</div>
        </div>
      </div>
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#7a8499",
          display: "flex",
          alignItems: "center",
          padding: "6px",
          borderRadius: "8px",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
      >
        <Bell size={20} strokeWidth={2} />
      </button>
    </div>
  </header>
);

// ─── STATUS BADGE ─────────────────────────────────────────────────────────────

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

// ─── INVENTORY TABLE ──────────────────────────────────────────────────────────

const InventoryTable = ({ data }) => {
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

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export default function Inventory() {
  const [activeItem, setActiveItem] = useState("inventory");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filtered = medications.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase()) ||
      m.batch.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "All Categories" || m.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      <Sidebar activeItem={activeItem} onNavigate={setActiveItem} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <TopBar
          title="Inventory"
          user={{ name: "Alice Williams", role: "StoreKeeper" }}
        />

        <main style={{ flex: 1, padding: "24px 28px", background: "#fff" }}>
          {/* Page heading */}
          <h2
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: "#1a202c",
              margin: "0 0 18px 0",
            }}
          >
            Medication Inventory
          </h2>

          {/* Search + Filter bar */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* Search */}
            <div style={{ position: "relative", flex: 1, minWidth: "220px" }}>
              <Search
                size={15}
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
              />
              <input
                type="text"
                placeholder="Search by name, category, or batch number..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "9px 12px 9px 34px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  fontSize: "13px",
                  color: "#374151",
                  outline: "none",
                  background: "#fff",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1a4fd6";
                  e.target.style.boxShadow = "0 0 0 3px rgba(26,79,214,0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Category dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setDropdownOpen((p) => !p)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 14px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  background: "#fff",
                  cursor: "pointer",
                  fontSize: "13px",
                  color: "#374151",
                  whiteSpace: "nowrap",
                  minWidth: "150px",
                  justifyContent: "space-between",
                }}
              >
                {selectedCategory}
                <ChevronDown
                  size={14}
                  style={{
                    color: "#9ca3af",
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {dropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 4px)",
                    right: 0,
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    zIndex: 50,
                    minWidth: "160px",
                    overflow: "hidden",
                  }}
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setDropdownOpen(false);
                      }}
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "9px 14px",
                        border: "none",
                        background:
                          selectedCategory === cat ? "#eff6ff" : "#fff",
                        color: selectedCategory === cat ? "#1a4fd6" : "#374151",
                        fontSize: "13px",
                        textAlign: "left",
                        cursor: "pointer",
                        fontWeight: selectedCategory === cat ? "600" : "400",
                      }}
                      onMouseEnter={(e) => {
                        if (selectedCategory !== cat)
                          e.currentTarget.style.background = "#f9fafb";
                      }}
                      onMouseLeave={(e) => {
                        if (selectedCategory !== cat)
                          e.currentTarget.style.background = "#fff";
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Table */}
          <div style={{ background: "#fff", overflow: "hidden" }}>
            <InventoryTable data={filtered} />
          </div>

          {/* Footer count */}
          <p
            style={{
              fontSize: "12.5px",
              color: "#6b7280",
              margin: "14px 0 0 0",
            }}
          >
            Showing {filtered.length} of {medications.length} medications
          </p>
        </main>
      </div>
    </div>
  );
}
