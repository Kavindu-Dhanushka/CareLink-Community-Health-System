import React, { useState } from "react";
import { Plus } from "lucide-react";
import AddPatientModal from "./AddPatientModal";
import PatientDetailsModal from "./PatientDetailsModal";

/* ---------------- STATUS COLOR ---------------- */
const getStatusColor = (status) => {
    const map = {
        Active: "bg-blue-100 text-blue-700",
        Admitted: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
        Discharged: "bg-gray-100 text-gray-700",
    };
    return map[status] || "bg-gray-100 text-gray-700";
};

export default function PatientDirectory() {
    const [patients, setPatients] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);

    /* ---------------- ADD PATIENT ---------------- */
    const addPatient = (data) => {
        const newPatient = {
            id: Date.now(),
            ...data,
            lastVisit: new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            }),
        };

        setPatients((prev) => [...prev, newPatient]);

        // 🔹 BACKEND READY
        // fetch("/api/patients", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(data),
        // });
    };

    /* ---------------- UPDATE PATIENT ---------------- */
    const updatePatient = (updatedPatient) => {
        setPatients((prev) =>
            prev.map((p) =>
                p.id === updatedPatient.id ? updatedPatient : p
            )
        );

        // 🔹 BACKEND READY
        // fetch(`/api/patients/${updatedPatient.id}`, {
        //   method: "PUT",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(updatedPatient),
        // });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* ---------- HEADER ---------- */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Patient Directory
                        </h1>
                        <p className="text-gray-600">
                            Manage and update patient records
                        </p>
                    </div>

                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
                    >
                        <Plus size={18} />
                        Add Patient
                    </button>
                </div>

                {/* ---------- TABLE ---------- */}
                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="p-4 text-left font-semibold">
                                    Patient Name
                                </th>
                                <th className="p-4 text-left font-semibold">
                                    Age
                                </th>
                                <th className="p-4 text-left font-semibold">
                                    Gender
                                </th>
                                <th className="p-4 text-left font-semibold">
                                    Status
                                </th>
                                <th className="p-4 text-left font-semibold">
                                    Last Visit
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {patients.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="p-6 text-center text-gray-500"
                                    >
                                        No patients available
                                    </td>
                                </tr>
                            )}

                            {patients.map((patient) => (
                                <tr
                                    key={patient.id}
                                    onClick={() => setSelectedPatient(patient)}
                                    className="border-t hover:bg-blue-50 cursor-pointer transition"
                                >
                                    <td className="p-4 font-medium text-gray-900">
                                        {patient.name}
                                    </td>
                                    <td className="p-4">{patient.age}</td>
                                    <td className="p-4">{patient.gender}</td>
                                    <td className="p-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                                patient.status
                                            )}`}
                                        >
                                            {patient.status}
                                        </span>
                                    </td>
                                    <td className="p-4">{patient.lastVisit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ---------- MODALS ---------- */}
            <AddPatientModal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                onSave={addPatient}
            />

            <PatientDetailsModal
                patient={selectedPatient}
                onClose={() => setSelectedPatient(null)}
                onSave={updatePatient}
            />
        </div>
    );
}
