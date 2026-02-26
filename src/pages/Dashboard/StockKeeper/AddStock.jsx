import React, { useState } from "react";
import {
  LayoutDashboard,
  PackagePlus,
  Archive,
  FileBarChart2,
  User,
  LogOut,
  Bell,
  PlusCircle,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const navItems = [
  { label: "Overview", icon: LayoutDashboard, id: "overview" },
  { label: "Add Stock", icon: PackagePlus, id: "add-stock" },
  { label: "Inventory", icon: Archive, id: "inventory" },
  { label: "Stock Reports", icon: FileBarChart2, id: "stock-reports" },
];

const initialFormState = {
  medicationName: "",
  category: "",
  batchNumber: "",
  expiryDate: "",
  quantity: "",
  reorderLevel: "",
  unitPrice: "",
  supplier: "",
};

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────

const Sidebar = ({ activeItem, onNavigate }) => {
  return (
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
        <span
          style={{
            color: "#fff",
            fontWeight: "700",
            fontSize: "17px",
            letterSpacing: "0.3px",
          }}
        >
          PharmGuard
        </span>
      </div>

      {/* Nav Items */}
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

      {/* Bottom actions */}
      <div
        style={{
          padding: "12px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
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
};

// ─── TOPBAR ───────────────────────────────────────────────────────────────────

const TopBar = ({ title, user }) => {
  return (
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
          letterSpacing: "0.2px",
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
              flexShrink: 0,
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
            <div style={{ fontSize: "11px", color: "#7a8499" }}>
              {user.role}
            </div>
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
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        >
          <Bell size={20} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
};

// ─── FORM FIELD ───────────────────────────────────────────────────────────────

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

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

const AddStock = () => {
  const [activeItem, setActiveItem] = useState("add-stock");
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => setFormData(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Hook up your API call here
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Segoe UI', 'Inter', sans-serif",
        background: "#f4f6fb",
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
          title="Add Stock"
          user={{ name: "Alice Williams", role: "StoreKeeper" }}
        />

        <main style={{ flex: 1, padding: "28px" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "28px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
              maxWidth: "860px",
            }}
          >
            {/* Section Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              <PlusCircle size={19} color="#1a4fd6" strokeWidth={2.2} />
              <h2
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#1a202c",
                  margin: 0,
                }}
              >
                Add New Medication
              </h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "18px 24px",
                }}
              >
                <FormField
                  label="Medication Name"
                  name="medicationName"
                  placeholder="e.g., Amoxicillin 500mg"
                  value={formData.medicationName}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Batch Number"
                  name="batchNumber"
                  placeholder="e.g., AMX-2024-001"
                  value={formData.batchNumber}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Expiry Date"
                  name="expiryDate"
                  type="date"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Quantity (units)"
                  name="quantity"
                  type="number"
                  placeholder="e.g., 100"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Reorder Level"
                  name="reorderLevel"
                  type="number"
                  placeholder="e.g., 50"
                  value={formData.reorderLevel}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Unit Price ($)"
                  name="unitPrice"
                  type="number"
                  placeholder="e.g., 2.50"
                  value={formData.unitPrice}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Supplier"
                  name="supplier"
                  placeholder="e.g., PharmaCorp Ltd"
                  value={formData.supplier}
                  onChange={handleChange}
                />
              </div>

              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "12px",
                  marginTop: "28px",
                }}
              >
                <button
                  type="button"
                  onClick={handleClear}
                  style={{
                    padding: "9px 20px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    background: "#fff",
                    color: "#374151",
                    fontSize: "13.5px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f9fafb")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#fff")
                  }
                >
                  Clear Form
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "9px 22px",
                    border: "none",
                    borderRadius: "6px",
                    background: "#1a4fd6",
                    color: "#fff",
                    fontSize: "13.5px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#1540b8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#1a4fd6")
                  }
                >
                  Add Medication
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddStock;
