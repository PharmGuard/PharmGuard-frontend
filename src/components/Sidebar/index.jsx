import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Logo from "../../assets/icons/dashLogo.svg?react";
import Logout from "../../assets/icons/logout.svg?react";
import User from "../../assets/dashbaord-icons/user.svg?react";


const Sidebar = ({ isOpen, onClose, navLinks }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed lg:static inset-y-0 left-0 z-50",
          "w-64 text-white",
          "flex flex-col",
          "transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        style={{
          background: "linear-gradient(180deg, #155DFC 0%, #193CB8 100%)",
        }}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Logo />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => onClose && onClose()}
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-3 px-4 py-3 rounded-lg",
                  "text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-primary shadow-sm border border-white text-white"
                    : "text-white/80 hover:border hover:border-white hover:text-white",
                )
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-white">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200">
            <User className="w-6 h-6" />
            <span>Profile</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200">
            <Logout className="w-6 h-6" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
