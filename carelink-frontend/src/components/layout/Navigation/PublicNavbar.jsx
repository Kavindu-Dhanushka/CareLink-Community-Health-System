import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full bg-white shadow-sm px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">+</span>
                    </div>
                    <h1 className="text-lg font-semibold text-gray-900">
                        Community Health Hub
                    </h1>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
                    <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                    <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
                    <li><Link to="/health-tips" className="hover:text-blue-600">Health Tips</Link></li>
                    <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
                </ul>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <button className="hidden md:block text-blue-600 font-medium hover:underline">
                        Login
                    </button>

                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    );
}
