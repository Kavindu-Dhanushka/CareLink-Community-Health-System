import React, { useState } from "react";
import { Calendar, MapPin, FileText, Activity, TestTube, Heart, X, User, Clock, Building } from "lucide-react";

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
      description: "Routine checkup to assess overall health. Procedures included vaccinating infant before scheduled visits and conducting minor eye test.",
      status: null,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
      fullDetails: {
        chiefComplaint: "Annual physical examination and health screening",
        vitalSigns: {
          bloodPressure: "118/76 mmHg",
          heartRate: "72 bpm",
          temperature: "98.4°F",
          weight: "165 lbs",
          height: "5'9\""
        },
        examination: "General appearance: Well-nourished, no acute distress. Cardiovascular: Regular rate and rhythm, no murmurs. Respiratory: Clear to auscultation bilaterally. Abdomen: Soft, non-tender.",
        assessment: "Patient is in good overall health. All vital signs within normal limits. No concerning findings on physical examination.",
        plan: "Continue current lifestyle. Return for follow-up in 12 months. Recommended annual flu vaccination.",
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
      description: "Annual influenza vaccine received. Influenza Quadrivalent. No immediate adverse reactions observed.",
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
        notes: "Patient tolerated vaccination well. Advised to monitor for any delayed reactions and contact clinic if concerns arise."
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
      description: "Skin screening check for upper back and shoulders. Benign appearance confirmed. Follow-up recommended in 12 months.",
      status: null,
      image: null,
      fullDetails: {
        reasonForVisit: "Annual skin cancer screening and mole evaluation",
        examination: "Full body skin examination performed. Multiple benign nevi noted on back and shoulders. No atypical lesions identified.",
        findings: [
          "3 benign compound nevi on upper back (stable)",
          "2 seborrheic keratoses on shoulders",
          "No dysplastic or suspicious lesions"
        ],
        dermoscopyResults: "All examined lesions show benign patterns",
        recommendations: [
          "Continue monthly self-skin examinations",
          "Use broad-spectrum SPF 30+ sunscreen daily",
          "Avoid excessive sun exposure",
          "Return for follow-up screening in 12 months"
        ],
        photography: "Baseline photographs taken for comparison"
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
      description: "Glucose: 95 mg/dL · Sodium: 140 mg/dL",
      status: null,
      image: null,
      fullDetails: {
        testType: "Comprehensive Metabolic Panel (CMP)",
        orderingPhysician: "Dr. Kevin Clark Jr.",
        specimenType: "Blood serum",
        results: {
          glucose: "95 mg/dL (Normal: 70-100)",
          sodium: "140 mEq/L (Normal: 136-145)",
          potassium: "4.2 mEq/L (Normal: 3.5-5.0)",
          chloride: "102 mEq/L (Normal: 98-107)",
          co2: "25 mEq/L (Normal: 23-29)",
          bun: "15 mg/dL (Normal: 7-20)",
          creatinine: "0.9 mg/dL (Normal: 0.7-1.3)",
          calcium: "9.5 mg/dL (Normal: 8.5-10.5)",
          totalProtein: "7.2 g/dL (Normal: 6.0-8.3)",
          albumin: "4.5 g/dL (Normal: 3.5-5.5)"
        },
        interpretation: "All values within normal reference ranges. Kidney and liver function normal. Electrolytes balanced.",
        clinicalSignificance: "Results indicate normal metabolic function with no concerning abnormalities."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
            <span>← Back to Dashboard</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            My Medical Records
          </h1>
          <p className="text-slate-600">
            Complete history of past health encounters and treatments. All records are 
            <span className="font-medium"> 100% encrypted</span>.
          </p>
        </div>

        {/* Records List */}
        <div className="space-y-4">
          {records.map((record) => (
            <RecordCard 
              key={record.id} 
              record={record} 
              onViewDetails={() => setSelectedRecord(record)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-slate-400 mt-8">
          Full records for 2023
        </div>

        <div className="text-center text-xs text-slate-400 mt-8 pb-4">
          © 2024 Community Health System. All rights reserved.
        </div>
      </div>

      {/* Full Details Modal */}
      {selectedRecord && (
        <DetailModal 
          record={selectedRecord} 
          onClose={() => setSelectedRecord(null)} 
        />
      )}
    </div>
  );
}

function RecordCard({ record, onViewDetails }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
      <div className="flex gap-6">
        {/* Left Section - Icon and Content */}
        <div className="flex-1">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className={`${record.bgColor} ${record.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
              {record.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {record.doctor}
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs text-slate-500">{record.date}</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {record.title}
              </h3>

              {record.location && (
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {record.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {record.time}
                  </span>
                </div>
              )}

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {record.description}
              </p>

              <div className="flex items-center gap-3">
                <button 
                  onClick={onViewDetails}
                  className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  View Full Details →
                </button>
                {record.status && (
                  <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full font-medium">
                    ✓ {record.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image (if exists) */}
        {record.image && (
          <div className="flex-shrink-0">
            <img
              src={record.image}
              alt={record.title}
              className="w-32 h-32 object-cover rounded-xl shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function DetailModal({ record, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className={`${record.bgColor} p-6 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors shadow-md"
          >
            <X className="w-5 h-5 text-slate-700" />
          </button>
          
          <div className="flex items-start gap-4">
            <div className={`${record.bgColor} ${record.color} w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-white shadow-lg`}>
              {record.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-1">
                {record.title}
              </h2>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {record.doctor}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {record.date}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {record.id === 1 && (
            <PhysicalExamDetails details={record.fullDetails} />
          )}
          {record.id === 2 && (
            <VaccinationDetails details={record.fullDetails} />
          )}
          {record.id === 3 && (
            <DermatologyDetails details={record.fullDetails} />
          )}
          {record.id === 4 && (
            <LabResultsDetails details={record.fullDetails} />
          )}
        </div>
      </div>
    </div>
  );
}

function PhysicalExamDetails({ details }) {
  return (
    <div className="space-y-6">
      <Section title="Chief Complaint">
        <p className="text-slate-700">{details.chiefComplaint}</p>
      </Section>

      <Section title="Vital Signs">
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(details.vitalSigns).map(([key, value]) => (
            <div key={key} className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p className="text-sm font-semibold text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Physical Examination">
        <p className="text-slate-700">{details.examination}</p>
      </Section>

      <Section title="Assessment">
        <p className="text-slate-700">{details.assessment}</p>
      </Section>

      <Section title="Plan">
        <p className="text-slate-700">{details.plan}</p>
      </Section>

      <Section title="Current Medications">
        <ul className="space-y-2">
          {details.medications.map((med, idx) => (
            <li key={idx} className="flex items-center gap-2 text-slate-700">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              {med}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Next Appointment">
        <p className="text-slate-700">{details.nextAppointment}</p>
      </Section>
    </div>
  );
}

function VaccinationDetails({ details }) {
  return (
    <div className="space-y-6">
      <Section title="Vaccine Information">
        <InfoRow label="Vaccine Type" value={details.vaccineType} />
        <InfoRow label="Manufacturer" value={details.manufacturer} />
        <InfoRow label="Lot Number" value={details.lotNumber} />
        <InfoRow label="Dosage" value={details.dosage} />
      </Section>

      <Section title="Administration">
        <InfoRow label="Site" value={details.administrationSite} />
        <InfoRow label="Route" value={details.route} />
      </Section>

      <Section title="Post-Vaccination">
        <InfoRow label="Reactions" value={details.reactions} />
        <InfoRow label="Next Dose" value={details.nextDose} />
      </Section>

      <Section title="Clinical Notes">
        <p className="text-slate-700">{details.notes}</p>
      </Section>
    </div>
  );
}

function DermatologyDetails({ details }) {
  return (
    <div className="space-y-6">
      <Section title="Reason for Visit">
        <p className="text-slate-700">{details.reasonForVisit}</p>
      </Section>

      <Section title="Examination">
        <p className="text-slate-700 mb-3">{details.examination}</p>
      </Section>

      <Section title="Findings">
        <ul className="space-y-2">
          {details.findings.map((finding, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-700">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></span>
              {finding}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Dermoscopy Results">
        <p className="text-slate-700">{details.dermoscopyResults}</p>
      </Section>

      <Section title="Recommendations">
        <ul className="space-y-2">
          {details.recommendations.map((rec, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-700">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></span>
              {rec}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Documentation">
        <p className="text-slate-700">{details.photography}</p>
      </Section>
    </div>
  );
}

function LabResultsDetails({ details }) {
  return (
    <div className="space-y-6">
      <Section title="Test Information">
        <InfoRow label="Test Type" value={details.testType} />
        <InfoRow label="Ordering Physician" value={details.orderingPhysician} />
        <InfoRow label="Specimen Type" value={details.specimenType} />
      </Section>

      <Section title="Results">
        <div className="space-y-2">
          {Object.entries(details.results).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className="text-sm font-semibold text-slate-900">{value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Interpretation">
        <p className="text-slate-700">{details.interpretation}</p>
      </Section>

      <Section title="Clinical Significance">
        <p className="text-slate-700">{details.clinicalSignificance}</p>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-start py-2 border-b border-slate-100 last:border-0">
      <span className="text-sm text-slate-500 font-medium">{label}</span>
      <span className="text-sm text-slate-900 font-semibold text-right max-w-xs">{value}</span>
    </div>
  );
}