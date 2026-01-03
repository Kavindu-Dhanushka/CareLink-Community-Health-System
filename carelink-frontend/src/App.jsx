import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// 1. Import Layouts
import PublicLayout from "./components/layout/PublicLayout";
import StaffLayout from "./components/layout/StaffLayout";
import AdminLayout from "./components/layout/AdminLayout";
import PatientLayout from "./components/layout/PatientLayout"; // <--- ADD THIS

// 2. Import Public Pages
import HomePage from "./pages/public/Home";
import HealthAwareness from "./pages/public/HealthAwareness";
import Login from "./pages/public/Login";
import About from "./pages/public/About";
import Services from "./pages/public/Services";
import Register from "./pages/public/Register";

// 3. Import Staff Pages
import StaffDashboard from "./pages/staff/StaffDashboard";
import AppointmentManagement from "./pages/staff/AppointmentManagement";
import PatientDirectory from "./pages/staff/PatientDirectory";

// 4. Import Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import HealthContentManagement from "./pages/admin/HealthContentManagement";

// 5. Import Patient Pages
import BookAppointment from "./pages/patient/BookAppoinment";
import PatientDashboard from "./pages/patient/PatientDashboard";
import MedicalRecords from "./pages/patient/MedicalRecords";


function App() {
  return (
    <Routes>

      {/* --- PUBLIC SECTION --- */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/health-tips" element={<HealthAwareness />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Route>

      {/* --- PATIENT SECTION (MISSING IN YOUR CODE) --- */}
      <Route path="/patient" element={<PatientLayout />}>
        <Route index element={<PatientDashboard />} />
        <Route path="book" element={<BookAppointment />} />
        <Route path="records" element={<MedicalRecords />} />
      </Route>

      {/* --- STAFF SECTION --- */}
      <Route path="/staff" element={<StaffLayout />}>
        <Route index element={<StaffDashboard />} />
        <Route path="appointments" element={<AppointmentManagement />} />
        <Route path="patients" element={<PatientDirectory />} />
      </Route>

      {/* --- ADMIN SECTION --- */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="content" element={<HealthContentManagement />} />
      </Route>

      {/* --- CATCH ALL --- */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;