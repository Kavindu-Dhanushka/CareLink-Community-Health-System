import React, { useState } from "react";
import { Calendar, Bell, Clock, Trash2 } from "lucide-react";

export default function StaffDashboard() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      time: "09:00 AM",
      duration: "30 min",
      patient: "Jane Doe",
      details: "Chemotherapy Session 3 • Room 204",
      status: "Confirmed",
    },
    {
      id: 2,
      time: "10:30 AM",
      duration: "45 min",
      patient: "Robert Brown",
      details: "Post-Op Consultation • Office 1",
      status: "Confirmed",
    },
    {
      id: 3,
      time: "01:00 PM",
      duration: "60 min",
      patient: "Emily White",
      details: "Initial Screening • Room 107",
      status: "Check-in Required",
    },
  ]);

  const deleteAppointment = (id) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
  };

  const statusStyle = {
    Confirmed: "bg-green-100 text-green-700",
    "Check-in Required": "bg-orange-100 text-orange-700",
    Tentative: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-3xl font-bold">Good Morning, Dr. Smith 👋</h1>
          <p className="text-gray-600">Monday, October 23, 2023</p>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Today’s Schedule</h2>

          <div className="space-y-3">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border hover:shadow transition"
              >
                {/* Left */}
                <div className="flex gap-4">
                  <div>
                    <p className="font-semibold text-blue-600">{apt.time}</p>
                    <p className="text-xs text-gray-500">{apt.duration}</p>
                  </div>

                  <div>
                    <p className="font-semibold">{apt.patient}</p>
                    <p className="text-sm text-gray-600">{apt.details}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[apt.status]}`}
                  >
                    {apt.status}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteAppointment(apt.id)}
                    className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
                    title="Mark as done"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {appointments.length === 0 && (
              <p className="text-center text-gray-500 py-10">
                All appointments completed 🎉
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
