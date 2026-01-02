import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function PatientNavbar() {
  const location = useLocation();
  
  // Mock Patient Data
  const user = {
    name: "Alex Johnson",
    role: "Patient",
    imageUrl: "https://i.pravatar.cc/150?img=12" // Patient avatar
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600";
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-slate-100 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/patient" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">+</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-none">Community Health</h1>
            <span className="text-xs font-bold text-emerald-600 tracking-wide uppercase">Patient Portal</span>
          </div>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1">
          <li>
            <Link to="/patient" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/patient')}`}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/patient/book" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/patient/book')}`}>
              Book Appointment
            </Link>
          </li>
          <li>
            <Link to="/patient/records" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/patient/records')}`}>
              My Records
            </Link>
          </li>
        </ul>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900">{user.name}</p>
            <p className="text-xs text-slate-500">{user.role}</p>
          </div>
          <img src={user.imageUrl} alt="Profile" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" />
        </div>
      </div>
    </nav>
  );
}