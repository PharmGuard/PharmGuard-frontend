import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNav";
import Overview from "../assets/icons/overview.svg?react";
import UserManagement from "../assets/icons/user-management.svg?react";
import AuditTrail from "../assets/icons/audit.svg?react";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getNavLinks = (role) => {
    switch (role) {
      case "admin":
        return [
          {
            to: "/dashboard",
            label: "Dashboard",
            icon: <Overview className="w-5 h-5" />,
            end: true,
          },
          {
            to: "/dashboard/audit-trail",
            label: "Audit Trail",
            icon: <AuditTrail className="w-5 h-5" />,
          },
          {
            to: "/dashboard/user-management",
            label: "User Management",
            icon: <UserManagement className="w-5 h-5" />,
          },
        ];
      case "pharmacist":
        return [
          {
            to: "/pharmacist-dashboard",
            label: "Overview",
            icon: <Overview className="w-5 h-5" />,
            end: true,
          },
          {
            to: "/pharmacist-dashboard/dispense",
            label: "Dispense",
            icon: <AuditTrail className="w-5 h-5" />,
          },
          {
            to: "/pharmacist-dashboard/inventory",
            label: "Inventory",
            icon: <UserManagement className="w-5 h-5" />,
          },
        ];
      case "storekeeper":
        return [
          {
            to: "/storekeeper-dashboard",
            label: "Overview",
            icon: <Overview className="w-5 h-5" />,
            end: true,
          },
          {
            to: "/storekeeper-dashboard/add-stock",
            label: "Add Stocks",
            icon: <AuditTrail className="w-5 h-5" />,
          },
          {
            to: "/storekeeper-dashboard/inventory",
            label: "Inventory",
            icon: <UserManagement className="w-5 h-5" />,
          },
          {
            to: "/storekeeper-dashboard/stock-reports",
            label: "Stock Reports",
            icon: <UserManagement className="w-5 h-5" />,
          },
        ];
      default:
        return [];
    }
  };

  const navLinks = getNavLinks(user?.role);

  const location = useLocation();

  // normalize pathname (remove trailing slash)
  const pathname = location.pathname.replace(/\/$/, "");

  // determine current title from navLinks
  const currentMatch = navLinks.find((link) => {
    if (link.end) {
      return pathname === "/dashboard";
    }
    return pathname === link.to;
  });

  const currentTitle = currentMatch ? currentMatch.label : "Dashboard";

  const currentUser = {
    name: user?.name || user?.username || "User",
    role: user?.role || "Guest",
    avatar: user?.avatar || "/icons/avatar.svg",
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        navLinks={navLinks}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar */}
        <DashboardNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
          user={currentUser}
          title={currentTitle}
        />

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
