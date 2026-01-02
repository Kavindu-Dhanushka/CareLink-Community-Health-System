import React from 'react';
import { Outlet } from 'react-router-dom';
import PatientNavbar from './Navigation/PatientNavbar';

const PatientLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <PatientNavbar />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default PatientLayout;