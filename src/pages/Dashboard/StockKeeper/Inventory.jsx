import { useState } from "react";
import { Search, Eye, Pencil, Trash2, ChevronDown } from "lucide-react";
import {medications, categories} from '../../../utils/utils'
import InventoryTable from "./InventoryTable";



export default function Inventory() {
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

  const handleView = (item) => {
    console.log("View item:", item);
  };

  const handleEdit = (item) => {
    console.log("Edit item:", item);
  };

  const handleDelete = (item) => {
    console.log("Delete item:", item);
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
                    background: selectedCategory === cat ? "#eff6ff" : "#fff",
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
        <InventoryTable
          data={filtered}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
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
    </div>
  );
}
