import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function PatientDetailsModal({ patient, onClose, onSave }) {
    const [form, setForm] = useState(null);

    useEffect(() => {
        setForm(patient);
    }, [patient]);

    if (!patient || !form) return null;

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white max-w-md w-full rounded-lg p-6">
                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-semibold">Patient Details</h2>
                    <button onClick={onClose}>
                        <X />
                    </button>
                </div>

                <div className="space-y-4">
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="number"
                            name="age"
                            value={form.age}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />
                        <select
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        >
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <input
                        name="contact"
                        value={form.contact}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option>Active</option>
                        <option>Admitted</option>
                        <option>Pending</option>
                    </select>

                    <div className="flex gap-3 pt-4">
                        <button
                            onClick={onClose}
                            className="flex-1 border py-2 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => onSave(form)}
                            className="flex-1 bg-blue-600 text-white py-2 rounded"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
