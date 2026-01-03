import React, { useState } from "react";
import { Calendar, Clock, User, Filter, Plus, X, Check, XCircle, Search } from "lucide-react";

export default function AppointmentManagement() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "Sarah Jenkins",
      patientInitials: "SJ",
      date: "Oct 24, 2025",
      time: "10:00 AM",
      reason: "Chemotherapy Follow-up",
      status: "Pending"
    },
    {
      id: 2,
      patientName: "Robert Miller",
      patientInitials: "RM",
      date: "Oct 25, 2025",
      time: "2:30 PM",
      reason: "Initial Consultation",
      status: "Approved"
    },
    {
      id: 3,
      patientName: "Emily Chen",
      patientInitials: "EC",
      date: "Oct 26, 2025",
      time: "9:00 AM",
      reason: "Routine Checkup",
      status: "Rejected"
    },
    {
      id: 4,
      patientName: "David Kim",
      patientInitials: "DK",
      date: "Oct 27, 2025",
      time: "11:15 AM",
      reason: "Symptoms Review - Urgent",
      status: "Pending"
    },
    {
      id: 5,
      patientName: "Maria Garcia",
      patientInitials: "MG",
      date: "Oct 27, 2025",
      time: "1:45 PM",
      reason: "Lab Results Review",
      status: "Pending"
    }
  ]);

  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const handleApprove = (id) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status: "Approved" } : apt
    ));
  };

  const handleReject = (id) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status: "Rejected" } : apt
    ));
  };

  const handleCreateAppointment = (newAppointment) => {
    const appointment = {
      id: appointments.length + 1,
      ...newAppointment,
      patientInitials: newAppointment.patientName.split(' ').map(n => n[0]).join(''),
      status: "Approved"
    };
    setAppointments([...appointments, appointment]);
    setShowNewAppointment(false);
  };

  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apt.reason.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || apt.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const pendingCount = appointments.filter(apt => apt.status === "Pending").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Incoming Appointment Requests
          </h1>
          <p className="text-slate-600">
            Manage and review patient appointment applications. Prioritize urgent cases and coordinate with the oncology department schedule.
          </p>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 min-w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by patient name or reason..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Filter */}
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>

            <button
              onClick={() => setShowNewAppointment(true)}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-5 h-5" />
              New Request
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Patient Name
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Date & Time
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Reason
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredAppointments.map((appointment) => (
                <AppointmentRow
                  key={appointment.id}
                  appointment={appointment}
                  onApprove={handleApprove}
                  onReject={handleReject}
                />
              ))}
            </tbody>
          </table>

          {filteredAppointments.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No appointments found matching your criteria.
            </div>
          )}

          {/* Footer */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <p className="text-sm text-slate-600">
              Showing <span className="font-semibold">1-{filteredAppointments.length}</span> of{" "}
              <span className="font-semibold">{appointments.length}</span> requests
            </p>
            <div className="flex gap-1">
              <button className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-white rounded-lg transition-colors">
                ‹
              </button>
              <button className="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-lg">
                1
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-white rounded-lg transition-colors">
                2
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-white rounded-lg transition-colors">
                3
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-white rounded-lg transition-colors">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Appointment Modal */}
      {showNewAppointment && (
        <NewAppointmentModal
          onClose={() => setShowNewAppointment(false)}
          onCreate={handleCreateAppointment}
        />
      )}
    </div>
  );
}

function AppointmentRow({ appointment, onApprove, onReject }) {
  const statusConfig = {
    Pending: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
    Approved: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
    Rejected: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" }
  };

  const config = statusConfig[appointment.status];

  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
            {appointment.patientInitials}
          </div>
          <span className="font-medium text-slate-900">{appointment.patientName}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm">
          <div className="text-slate-900 font-medium">{appointment.date}</div>
          <div className="text-slate-500">{appointment.time}</div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-slate-700">{appointment.reason}</span>
      </td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
          {appointment.status}
        </span>
      </td>
      <td className="px-6 py-4">
        {appointment.status === "Pending" ? (
          <div className="flex gap-2">
            <button
              onClick={() => onApprove(appointment.id)}
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              title="Approve"
            >
              <Check className="w-5 h-5" />
            </button>
            <button
              onClick={() => onReject(appointment.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Reject"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <span className="text-sm text-slate-400">No actions needed</span>
        )}
      </td>
    </tr>
  );
}

function NewAppointmentModal({ onClose, onCreate }) {
  const [formData, setFormData] = useState({
    patientName: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleSubmit = () => {
    if (formData.patientName && formData.date && formData.time && formData.reason) {
      onCreate(formData);
      setFormData({ patientName: "", date: "", time: "", reason: "" });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl">
        {/* Modal Header */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">New Appointment</h2>
              <p className="text-blue-100 text-sm">Create a new appointment request</p>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Patient Name
            </label>
            <input
              type="text"
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter patient name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Reason for Visit
            </label>
            <textarea
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Enter reason for appointment"
              rows="3"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Create Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}