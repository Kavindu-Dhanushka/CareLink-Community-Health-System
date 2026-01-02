import React from 'react';
import { Outlet } from 'react-router-dom';
import PublicNavbar from '../layout/Navigation/PublicNavbar'; 
import Footer from './Footer';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <PublicNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;