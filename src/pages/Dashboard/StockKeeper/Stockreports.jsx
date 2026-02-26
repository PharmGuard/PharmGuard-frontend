import { useState } from "react";
import {
  LayoutDashboard,
  PackagePlus,
  Archive,
  FileBarChart2,
  User,
  LogOut,
  Bell,
  TrendingUp,
  BarChart2,
  ShoppingCart,
  CalendarClock,
  CheckCircle2,
  Truck,
  CheckCircle,
  Info,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const navItems = [
  { label: "Overview", icon: LayoutDashboard, id: "overview" },
  { label: "Add Stock", icon: PackagePlus, id: "add-stock" },
  { label: "Inventory", icon: Archive, id: "inventory" },
  { label: "Stock Reports", icon: FileBarChart2, id: "stock-reports" },
];

const reports = [
  {
    id: "stock-movement",
    icon: TrendingUp,
    title: "Stock Movement Report",
    description: "In/out transactions",
  },
  {
    id: "inventory-valuation",
    icon: BarChart2,
    title: "Inventory Valuation",
    description: "Total stock value",
  },
  {
    id: "reorder-analysis",
    icon: ShoppingCart,
    title: "Reorder Analysis",
    description: "Purchase order history",
  },
  {
    id: "expiry-report",
    icon: CalendarClock,
    title: "Expiry Report",
    description: "Near-expiry medications",
  },
  {
    id: "stock-accuracy",
    icon: CheckCircle2,
    title: "Stock Accuracy",
    description: "Physical vs system count",
  },
  {
    id: "supplier-performance",
    icon: Truck,
    title: "Supplier Performance",
    description: "Delivery & quality metrics",
  },
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

const TopBar = ({ title, user, toast, onDismissToast }) => (
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

    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
      {/* Toast notification */}
      {toast && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "7px 14px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: "12.5px",
            color: "#374151",
          }}
        >
          <Info size={14} color="#1a4fd6" />
          <span>{toast}</span>
        </div>
      )}

      {/* User */}
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

// ─── REPORT CARD ──────────────────────────────────────────────────────────────

const ReportCard = ({ icon: Icon, title, description, onGenerate }) => (
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

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export default function StockReports() {
  const [activeItem, setActiveItem] = useState("stock-reports");
  const [toast, setToast] = useState(
    "Your report has been generated successfully.",
  );

  const handleGenerate = () => {
    setToast("Your report has been generated successfully.");
    setTimeout(() => setToast(null), 4000);
  };

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
          title="Stock Reports"
          user={{ name: "Alice Williams", role: "StoreKeeper" }}
          toast={toast}
          onDismissToast={() => setToast(null)}
        />

        <main style={{ flex: 1, padding: "28px", background: "#fff" }}>
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
          <p
            style={{ fontSize: "13px", color: "#9ca3af", margin: "0 0 24px 0" }}
          >
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
                  icon={r.icon}
                  title={r.title}
                  description={r.description}
                  onGenerate={handleGenerate}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
