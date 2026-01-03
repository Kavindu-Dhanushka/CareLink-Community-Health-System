import React, { useState } from "react";

export default function AddPatientModal({ isOpen, onClose, onSave }) {
    const [form, setForm] = useState({
        name: "",
        age: "",
        gender: "",
        status: "Active",
    });

    if (!isOpen) return null;

    const handleSubmit = () => {
        onSave(form);

        // reset form
        setForm({
            name: "",
            age: "",
            gender: "",
            status: "Active",
        });

        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    Add New Patient
                </h2>

                {/* Name */}
                <input
                    placeholder="Full Name"
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                {/* Age */}
                <input
                    placeholder="Age"
                    type="number"
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                />

                {/* Gender */}
                <select
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={form.gender}
                    onChange={(e) => setForm({ ...form, gender: e.target.value })}
                >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>

                {/* Status */}
                <select
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                    <option>Active</option>
                    <option>Admitted</option>
                    <option>Pending</option>
                    <option>Discharged</option>
                </select>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Save Patient
                    </button>
                </div>
            </div>
        </div>
    );
}
