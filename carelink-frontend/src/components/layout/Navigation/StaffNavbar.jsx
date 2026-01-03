import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  UserCircleIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

export default function StaffNavbar() {
  const location = useLocation();

  // Mock User Data (In a real app, this comes from AuthContext)
  const user = {
    name: "Dr. Sarah Smith",
    role: "General Practitioner",
    // Ensure this image exists in your assets or use a placeholder link
    imageUrl: "https://i.pravatar.cc/150?img=5" 
  };

  // Helper to check active link for styling
  const isActive = (path) => {
    return location.pathname === path ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600";
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-slate-100 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* 1. Logo Section */}
        <Link to="/staff" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center shadow-sm shadow-blue-200">
            <span className="text-white font-bold text-lg">+</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-none">
              Community Health
            </h1>
            <span className="text-xs font-bold text-blue-600 tracking-wide uppercase">
              Staff Portal
            </span>
          </div>
        </Link>

        {/* 2. Navigation Links (Staff Specific) */}
        <ul className="hidden md:flex items-center gap-1">
          <li>
            <Link 
              to="/staff" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/staff')}`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/staff/appointments" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/staff/appointments')}`}
            >
              Appointment Management
            </Link>
          </li>
          <li>
            <Link 
              to="/staff/patients" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/staff/patients')}`}
            >
              Patient Management
            </Link>
          </li>
        </ul>

        {/* 3. Right Side: Just the Profile Image & Details */}
        <div className="flex items-center">
          
          {/* User Profile trigger */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 leading-tight">
                {user.name}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                {user.role}
              </p>
            </div>
            
            
            
           
          </div>

        </div>

      </div>
    </nav>
  );
}