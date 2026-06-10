import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Programs", path: "/programs" },
  { name: "Subjects", path: "/subjects" },
  { name: "Results", path: "/results" },
  { name: "About", path: "/about" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl md:text-3xl font-bold text-navy serif">
            Dalton<span className="text-gold">Prep</span>
            <span className="hidden md:inline-block text-xs ml-2 bg-gold-light text-navy px-2 py-0.5 rounded-full">Global</span>
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition duration-200 ${isActive ? "text-gold border-b-2 border-gold pb-1" : "text-gray-700 hover:text-gold"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <button className="btn-primary">Book Free Consultation</button>
          </div>
          <button className="md:hidden text-2xl text-navy" onClick={() => setMobileOpen(!mobileOpen)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden pb-5 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className="text-gray-800 font-medium py-2 border-b border-gray-100">
                {item.name}
              </Link>
            ))}
            <button className="btn-primary w-full text-center">Book Free Consultation</button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}