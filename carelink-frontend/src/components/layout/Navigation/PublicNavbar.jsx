import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PublicNavbar() {
    const location = useLocation();

    // Helper to check active state
    const isActive = (path) => location.pathname === path ? "text-blue-600 font-bold" : "hover:text-blue-600";

    return (
        <nav className="w-full bg-white shadow-sm px-6 py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* 1. Logo Section (Linked to Home) */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center shadow-blue-200 shadow-sm">
                        <span className="text-white font-bold text-lg">+</span>
                    </div>
                    <h1 className="text-lg font-bold text-slate-900 leading-none">
                        Community Health
                    </h1>
                </Link>

                {/* 2. Navigation Links */}
                <ul className="hidden md:flex items-center gap-8 text-slate-600 font-medium text-sm">
                    <li><Link to="/" className={isActive("/")}>Home</Link></li>
                    <li><Link to="/services" className={isActive("/services")}>Services</Link></li>
                    <li><Link to="/health-tips" className={isActive("/health-tips")}>Health Tips</Link></li>
                    <li><Link to="/about" className={isActive("/about")}>About</Link></li>
                    <li><Link to="/contact" className={isActive("/contact")}>Contact</Link></li>
                </ul>

                {/* 3. Auth Buttons (Now using Link) */}
                <div className="flex items-center gap-3">
                    <Link 
                        to="/login" 
                        className="hidden md:block text-slate-600 font-medium hover:text-blue-600 text-sm transition"
                    >
                        Login
                    </Link>

                    <Link 
                        to="/register" 
                        className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}