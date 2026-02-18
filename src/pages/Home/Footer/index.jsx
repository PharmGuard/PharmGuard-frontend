import React from 'react'

const Footer = () => {
  return (
    <footer aria-label="Footer section" className="bg-primary-dark px-10 py-12">
      <div
        className="container mx-auto px-4 py-8"
        aria-label="Main footer section"
      >
        <div
          aria-label="Footer content"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 border-b-1 border-white-fade pb-12"
        >
          <div className="space-y-6 text-white-fade w-full lg:w-auto" aria-label="Company Info">
            <img
              src="/footer-logo.svg"
              alt="PharmGuard Logo"
              className="h-auto w-40 lg:w-52"
            />
            <p>Pharmaceutical inventory management for emerging markets</p>
          </div>
          <ul className="text-white-fade space-y-2" aria-label="Product List">
            <li className="font-semibold mb-2 text-white">Product</li>
            <li>Features</li>
            <li>Dashboard</li>
            <li>Support</li>
            <li>Pricing</li>
          </ul>
          <ul className="text-white-fade space-y-2" aria-label="Company List">
            <li className="font-semibold mb-2 text-white">Company</li>
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Blog</li>
          </ul>
          <ul className="text-white-fade space-y-2" aria-label="Legal List">
            <li className="font-semibold mb-2 text-white">Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Compliance</li>
          </ul>
        </div>
        <div>
            <p className="text-white-fade mt-8">
                &copy; {new Date().getFullYear()} PharmGuard. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer