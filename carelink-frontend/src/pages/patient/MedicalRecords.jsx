import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  FileText,
  Activity,
  TestTube,
  Heart,
  X,
  User
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MedicalRecordsPage() {
  const [selectedRecord, setSelectedRecord] = useState(null);

  const records = [
    {
      id: 1,
      icon: <Activity className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      date: "Oct 15, 2025",
      title: "Annual Physical Exam",
      doctor: "Dr. Kevin Clark Jr.",
      location: "123 Health Center",
      time: "12:30pm",
      description:
        "Routine checkup to assess overall health. Procedures included vaccinating infant before scheduled visits and conducting minor eye test.",
      status: null,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
      fullDetails: {
        chiefComplaint: "Annual physical examination and health screening",
        vitalSigns: {
          bloodPressure: "118/76 mmHg",
          heartRate: "72 bpm",
          temperature: "98.4°F",
          weight: "165 lbs",
          height: "5'9\""
        },
        examination:
          "General appearance: Well-nourished, no acute distress. Cardiovascular: Regular rate and rhythm, no murmurs. Respiratory: Clear to auscultation bilaterally. Abdomen: Soft, non-tender.",
        assessment:
          "Patient is in good overall health. All vital signs within normal limits. No concerning findings on physical examination.",
        plan:
          "Continue current lifestyle. Return for follow-up in 12 months. Recommended annual flu vaccination.",
        medications: ["Multivitamin - Daily", "Vitamin D3 - 2000 IU daily"],
        nextAppointment: "October 2026"
      }
    },
    {
      id: 2,
      icon: <TestTube className="w-5 h-5" />,
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      date: "Aug 25, 2025",
      title: "Flu Virus Vaccination",
      doctor: "Vaccination Clinic",
      description:
        "Annual influenza vaccine received. Influenza Quadrivalent. No immediate adverse reactions observed.",
      status: "Completed",
      image: null,
      fullDetails: {
        vaccineType: "Influenza Quadrivalent (Flu Shot)",
        manufacturer: "Sanofi Pasteur",
        lotNumber: "FLU2025-X8492",
        administrationSite: "Left deltoid muscle",
        dosage: "0.5 mL",
        route: "Intramuscular injection",
        reactions: "None observed during 15-minute monitoring period",
        nextDose: "August 2026 (annual)",
        notes:
          "Patient tolerated vaccination well. Advised to monitor for any delayed reactions."
      }
    },
    {
      id: 3,
      icon: <Heart className="w-5 h-5" />,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      date: "May 22, 2025",
      title: "Dermatology Consult",
      doctor: "Dr. Maria Lee",
      description:
        "Skin screening check for upper back and shoulders. Benign appearance confirmed.",
      status: null,
      image: null,
      fullDetails: {
        reasonForVisit: "Annual skin cancer screening",
        examination: "Full body skin examination performed.",
        findings: [
          "3 benign nevi on upper back",
          "2 seborrheic keratoses on shoulders"
        ],
        dermoscopyResults: "Benign patterns observed",
        recommendations: [
          "Monthly self-exams",
          "Use SPF 30+ sunscreen",
          "Follow-up in 12 months"
        ],
        photography: "Baseline photos taken"
      }
    },
    {
      id: 4,
      icon: <FileText className="w-5 h-5" />,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      date: "Mar 30, 2025",
      title: "Comprehensive Metabolic Panel",
      doctor: "Quest Diagnostics",
      description: "All values within normal range",
      status: null,
      image: null,
      fullDetails: {
        testType: "CMP",
        orderingPhysician: "Dr. Kevin Clark Jr.",
        specimenType: "Blood",
        results: {
          glucose: "95 mg/dL",
          sodium: "140 mEq/L",
          potassium: "4.2 mEq/L"
        },
        interpretation: "Normal",
        clinicalSignificance: "No abnormalities"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/patient"
          className="text-sm text-slate-600 hover:text-blue-600"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-900 mt-2 mb-4">
          My Medical Records
        </h1>

        <div className="space-y-4">
          {records.map((record) => (
            <RecordCard
              key={record.id}
              record={record}
              onViewDetails={() => setSelectedRecord(record)}
            />
          ))}
        </div>
      </div>

      {selectedRecord && (
        <DetailModal
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
        />
      )}
    </div>
  );
}

/* ---------- Components ---------- */

function RecordCard({ record, onViewDetails }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <div className="flex gap-4">
        <div
          className={`${record.bgColor} ${record.color} w-12 h-12 rounded-xl flex items-center justify-center`}
        >
          {record.icon}
        </div>

        <div className="flex-1">
          <p className="text-xs text-slate-500">{record.doctor}</p>
          <h3 className="font-bold">{record.title}</h3>
          <p className="text-sm text-slate-600">{record.description}</p>

          <button
            onClick={onViewDetails}
            className="text-sm text-blue-600 mt-2"
          >
            View Full Details →
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailModal({ record, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white max-w-xl w-full rounded-2xl p-6">
        <button onClick={onClose} className="float-right">
          <X />
        </button>
        <h2 className="text-xl font-bold">{record.title}</h2>
        <p className="text-sm text-slate-600">{record.date}</p>
      </div>
    </div>
  );
}
