import React, { useState } from "react";
import { clsx } from "clsx";
import Button from "../../../components/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="w-full shadow-sm py-4 fixed bg-white top-0 left-0 right-0z-50"
      aria-label="Primary Navigation"
    >
      <div className="containers">
        <div
          className="flex items-center justify-between w-full max-w-8xl mx-auto"
          aria-label="main-nav"
        >
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="PharmGuard Logo"
              className="h-auto w-40 lg:w-52"
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-10 text-primary-text text-lg font-medium">
            <li>
              <a
                href="/"
                className="hover:text-primary transition-colors duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="hover:text-primary transition-colors duration-200"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-primary transition-colors duration-200"
              >
                About
              </a>
            </li>
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button to="/auth/login" variant="neutral">
              Login
            </Button>
            <Button to="/auth/signup" variant="primary">
              Sign Up
            </Button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="lg:hidden flex items-center justify-center p-2 text-primary-text hover:text-primary transition-colors"
          >
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>
        </div>
        <div
          className={clsx(
            "lg:hidden w-full overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0",
          )}
        >
          {/* Mobile Links */}
          <ul className="flex flex-col gap-1 pb-6 border-b border-gray-200">
            <li>
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-primary-text text-lg font-medium rounded-lg hover:bg-gray-50 hover:text-primary transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-primary-text text-lg font-medium rounded-lg hover:bg-gray-50 hover:text-primary transition-colors"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-primary-text text-lg font-medium rounded-lg hover:bg-gray-50 hover:text-primary transition-colors"
              >
                About
              </a>
            </li>
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-3 pt-6">
            <Button to="/auth/login" variant="neutral" className="w-full">
              Login
            </Button>
            <Button to="/auth/signup" variant="primary" className="w-full">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
