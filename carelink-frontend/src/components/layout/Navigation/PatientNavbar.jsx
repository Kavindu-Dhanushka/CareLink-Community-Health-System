import React, { useState, useEffect } from "react";

export default function PatientNavbar() {
    const [patient, setPatient] = useState(null); // store patient info

    useEffect(() => {
        // Fetch patient info from backend
        const fetchPatient = async () => {
            try {
                const res = await fetch("/api/current-patient", {
                    credentials: "include", // if you use cookies for auth
                });
                if (!res.ok) throw new Error("Failed to fetch patient info");
                const data = await res.json();
                setPatient(data); // set patient data
            } catch (error) {
                console.error(error);
            }
        };

        fetchPatient();
    }, []);

    return (
        <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* ---------- LOGO ---------- */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg font-bold">+</span>
                    </div>
                    <h1 className="text-lg font-semibold text-gray-900">
                        Community Health Hub
                    </h1>
                </div>

                {/* ---------- NAV LINKS ---------- */}
                <ul className="flex items-center gap-8 text-gray-600 font-medium">
                    <li className="cursor-pointer hover:text-blue-600 transition">
                        Dashboard
                    </li>
                    <li className="cursor-pointer hover:text-blue-600 transition">
                        Appointments
                    </li>
                    <li className="cursor-pointer hover:text-blue-600 transition">
                        Medical Records
                    </li>
                </ul>

                {/* ---------- PATIENT NAME ---------- */}
                <div className="text-gray-700 font-medium">
                    {patient ? patient.name : "Loading..."}
                </div>
            </div>
        </nav>
    );
}
