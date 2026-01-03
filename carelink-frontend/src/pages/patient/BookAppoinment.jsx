import React, { useState } from "react";

// Dummy doctors list - can be fetched from backend
const doctorsList = ["Dr. Sarah Jenkins", "Dr. John Doe", "Dr. Emily Smith"];

export default function BookAppointment() {
    const [doctors, setDoctors] = useState(doctorsList);
    const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [visitType, setVisitType] = useState("In-Person Visit");
    const [reason, setReason] = useState("");

    const timeSlots = [
        "09:00 AM",
        "09:30 AM",
        "10:00 AM",
        "11:15 AM",
        "01:00 PM",
        "02:30 PM",
        "03:00 PM",
        "04:45 PM",
    ];

    const handleConfirm = async () => {
        if (!selectedDoctor || !selectedDate || !selectedTime) {
            alert("Please select doctor, date, and time.");
            return;
        }

        const payload = { doctor: selectedDoctor, date: selectedDate, time: selectedTime, visitType, reason };

        try {
            const res = await fetch("/api/appointments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Failed to book appointment");

            const data = await res.json();
            alert("Appointment booked successfully!");
            console.log(data);
        } catch (err) {
            console.error(err);
            alert("Error booking appointment");
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Book an Appointment</h1>
            <p className="text-gray-500 mb-8">Schedule your visit for preventive care and check-ups.</p>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column: Form */}
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                    {/* Step 1: Select Doctor */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-3 text-gray-700">1. Select Provider</h2>
                        <select
                            value={selectedDoctor}
                            onChange={(e) => setSelectedDoctor(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            {doctors.map((doc, i) => (
                                <option key={i} value={doc}>{doc}</option>
                            ))}
                        </select>
                    </div>

                    {/* Step 2: Select Date & Time */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-3 text-gray-700">2. Select Date & Time</h2>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {timeSlots.map((time, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedTime(time)}
                                    className={`px-4 py-2 border rounded-lg transition-colors duration-200 ${selectedTime === time
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                                        }`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 3: Appointment Details */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-3 text-gray-700">3. Appointment Details</h2>
                        <select
                            value={visitType}
                            onChange={(e) => setVisitType(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option>In-Person Visit</option>
                            <option>Telehealth</option>
                        </select>

                        <textarea
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            placeholder="Briefly describe your symptoms or reason for appointment..."
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows={4}
                            maxLength={200}
                        />
                    </div>
                </div>

                {/* Right Column: Booking Summary */}
                <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Booking Summary</h2>
                        <p className="mb-3"><span className="font-semibold text-gray-600">Doctor:</span> {selectedDoctor}</p>
                        <p className="mb-3"><span className="font-semibold text-gray-600">Date:</span> {selectedDate || "--"}</p>
                        <p className="mb-3"><span className="font-semibold text-gray-600">Time:</span> {selectedTime || "--"}</p>
                        <p className="mb-3"><span className="font-semibold text-gray-600">Visit Type:</span> {visitType}</p>
                        {reason && <p className="mb-3 text-gray-500"><span className="font-semibold text-gray-600">Reason:</span> {reason}</p>}
                    </div>

                    <button
                        onClick={handleConfirm}
                        className="mt-6 w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-200"
                    >
                        Confirm Appointment
                    </button>
                </div>
            </div>
        </div>
    );
}
