import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // <--- 1. Import Link
import {
  CalendarDays,
  Plus,
  FileText,
  MessageCircle,
} from "lucide-react";

export default function PatientDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 🔹 Mock backend response
    setData({
      user: { name: "Nirmal" },
      date: "Wednesday, Oct 24",
      nextAppointment: {
        time: "10:00 AM",
        day: "Tomorrow",
        department: "Oncology Dept",
        room: "302",
        doctor: {
          name: "Dr. Sarah Smith",
          specialty: "General Checkup",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
      },
      quickActions: [
        // 2. Added 'path' to your data so we know where to link
        { id: 1, type: "book", label: "Book Appointment", path: "/patient/book" },
        { id: 2, type: "records", label: "Medical Records", path: "/patient/records" },
        { id: 3, type: "contact", label: "Contact Doctor", path: "/contact" }, 
      ],
      wellnessTip:
        "Drink enough water throughout the day to support recovery.",
    });
  }, []);

  if (!data) {
    return <div className="p-6 text-slate-500">Loading dashboard...</div>;
  }

  const icons = {
    book: <Plus className="w-6 h-6" />,
    records: <FileText className="w-6 h-6" />,
    contact: <MessageCircle className="w-6 h-6" />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Good morning, {data.user.name} 👋
        </h1>
        <p className="text-sm text-slate-600 flex items-center gap-2 mt-1">
          <CalendarDays className="w-4 h-4" />
          {data.date}
        </p>
      </header>

      {/* Appointment Card */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-lg mb-8">
        <p className="text-xs font-semibold opacity-90">
          NEXT APPOINTMENT
        </p>

        <h2 className="text-4xl font-bold mt-3">
          {data.nextAppointment.time}
        </h2>
        <p className="text-sm opacity-90">
          {data.nextAppointment.day}
        </p>

        <p className="text-sm mt-2 opacity-90">
          📍 {data.nextAppointment.department}, Room{" "}
          {data.nextAppointment.room}
        </p>

        <div className="flex justify-between items-center mt-6 bg-white/10 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <img
              src={data.nextAppointment.doctor.avatar}
              alt="Doctor"
              className="w-11 h-11 rounded-full border-2 border-white"
            />
            <div>
              <p className="font-semibold">
                {data.nextAppointment.doctor.name}
              </p>
              <p className="text-sm opacity-90">
                {data.nextAppointment.doctor.specialty}
              </p>
            </div>
          </div>

          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-50 transition">
            View Details
          </button>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-8">
        <h3 className="font-semibold text-lg text-slate-900 mb-4">
          Quick Actions
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {data.quickActions.map((action) => (
            // 3. Changed <div> to <Link> for navigation
            <Link
              to={action.path} 
              key={action.id}
              className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition cursor-pointer group"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
                {icons[action.type]}
              </div>
              <p className="font-medium text-slate-800">
                {action.label}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Wellness Tip */}
      <section className="bg-emerald-50 border border-emerald-100 p-5 rounded-xl">
        <h4 className="font-semibold text-emerald-700">
          Daily Wellness Tip
        </h4>
        <p className="text-sm text-emerald-700 mt-2">
          {data.wellnessTip}
        </p>
      </section>
    </div>
  );
}