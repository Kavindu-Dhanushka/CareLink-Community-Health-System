import React from 'react';
import { Outlet } from 'react-router-dom';
import StaffNavbar from '../layout/Navigation/StaffNavbar'; // Import the navbar you just made

const StaffLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* 1. The Navbar stays fixed at the top */}
      <StaffNavbar />

      {/* 2. The Page Content changes here based on the URL */}
      <main className="max-w-7xl mx-auto py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default StaffLayout;