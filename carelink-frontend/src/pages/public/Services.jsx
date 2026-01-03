import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import { 
  BeakerIcon, 
  HeartIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  EyeIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  
  const servicesList = [
    {
      title: "General Checkups",
      desc: "Routine health screenings, physical exams, and preventive care consultation.",
      icon: <UserGroupIcon className="w-8 h-8 text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "Laboratory Testing",
      desc: "On-site blood work, urinalysis, and rapid diagnostic testing for common illnesses.",
      icon: <BeakerIcon className="w-8 h-8 text-white" />,
      color: "bg-indigo-500"
    },
    {
      title: "Cardiac Care",
      desc: "ECG monitoring, blood pressure management, and heart health counseling.",
      icon: <HeartIcon className="w-8 h-8 text-white" />,
      color: "bg-rose-500"
    },
    {
      title: "Vaccinations",
      desc: "Seasonal flu shots, childhood immunizations, and travel vaccines.",
      icon: <ShieldCheckIcon className="w-8 h-8 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "Vision & Eye Health",
      desc: "Basic vision screening and referrals to community ophthalmologists.",
      icon: <EyeIcon className="w-8 h-8 text-white" />,
      color: "bg-amber-500"
    },
    {
      title: "Mental Wellness",
      desc: "Counseling sessions, stress management workshops, and support groups.",
      icon: <FaceSmileIcon className="w-8 h-8 text-white" />,
      color: "bg-sky-500"
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Medical Services" 
        description="Comprehensive care designed for your family. From prevention to treatment, we're here for you."
      />

      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition duration-300 bg-white">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Need a service not listed here?</h2>
          <p className="text-slate-600 mb-8">Contact our support team to find the right specialist for your needs.</p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-sm border border-blue-100 hover:bg-blue-600 hover:text-white transition">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;