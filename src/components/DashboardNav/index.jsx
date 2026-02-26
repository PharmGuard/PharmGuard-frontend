import React, { useState, useEffect } from "react";
import Notification from "../../assets/icons/notification.svg?react";
import authService from "../../services/authService";

const DashboardNavbar = ({ onMenuClick, user: propUser, title }) => {
  const [fetchedUser, setFetchedUser] = useState(null);
  const user = propUser || fetchedUser;

  useEffect(() => {
    if (!propUser) {
      const fetchUser = async () => {
        try {
          const data = await authService.getProfile();
          setFetchedUser({
            name: data.name || data.username,
            role: data.role,
            avatar: data.avatarUrl,
          });
        } catch (error) {
          console.error("Failed to fetch user for navbar", error);
        }
      };
      fetchUser();
    }
  }, [propUser]);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden flex items-center justify-center p-2 text-primary-text hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Page Title - Hidden on mobile when we have user info */}
        <h1 className="text-xl font-semibold text-primary-text hidden md:block">
          {title || "Dashboard"}
        </h1>

        {/* Spacer for mobile */}
        <div className="flex-1 lg:hidden" />

        <div className="flex items-center gap-4">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <img
              src={user?.avatar || "https://via.placeholder.com/40"}
              alt={user?.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-primary-text">
                {user?.name || "Loading..."}
              </p>
              <p className="text-xs text-gray-500">
                {user?.role
                  ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
                  : ""}
              </p>
            </div>
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-primary-text hover:text-primary transition-colors">
            <Notification className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
