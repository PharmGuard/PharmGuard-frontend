import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNav";
import Overview from "../assets/icons/overview.svg?react";
import UserManagement from "../assets/icons/user-management.svg?react";
import AuditTrail from "../assets/icons/audit.svg?react";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    {
      to: "/dashboard",
      label: "Overview",
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

  const user = {
    name: "Dr. Sarah Johnson",
    role: "Admin",
    avatar: "/icons/avatar.svg",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
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
          user={user}
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
