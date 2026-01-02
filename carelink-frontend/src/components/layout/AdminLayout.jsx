import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../layout/Navigation/AdminNavbar'; 

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <AdminNavbar />
      <main className="max-w-7xl mx-auto py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;