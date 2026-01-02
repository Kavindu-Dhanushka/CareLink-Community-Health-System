import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import { images } from '../../assets/image';
import { UserGroupIcon, BuildingOffice2Icon, HeartIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. Header Section */}
      <PageHeader 
        title="Our Mission & Values" 
        description="Dedicated to building a healthier, more resilient community through accessible care and education."
        // You can add a specific background image here if you have one
        // backgroundImage={images.aboutBg}
      />

      {/* 2. Our Story / Mission */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">More Than Just a Clinic</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 2024, CareLink Community Health Hub was born from a simple idea: quality healthcare should be accessible to everyone, right where they live.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We bridge the gap between modern medical expertise and community well-being. By partnering with local specialists and prioritizing preventive care, we ensure that every resident has the support they need to thrive.
            </p>
          </div>
          <div className="relative">
            {/* Using the hero image or another image from your assets */}
            <img 
              src={images.hero} 
              alt="Community meeting" 
              className="rounded-2xl shadow-xl w-full object-cover h-96"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-xl shadow-lg hidden md:block">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm font-medium opacity-90">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Stats */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <UserGroupIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-slate-900 mb-2">12k+</h3>
            <p className="text-slate-600">Patients Served</p>
          </div>
          <div className="p-6">
            <BuildingOffice2Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-slate-900 mb-2">3</h3>
            <p className="text-slate-600">Community Centers</p>
          </div>
          <div className="p-6">
            <HeartIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-slate-900 mb-2">98%</h3>
            <p className="text-slate-600">Patient Satisfaction</p>
          </div>
        </div>
      </section>

      {/* 4. Simple Team Preview */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Meet Our Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* We map through a few avatars to show the team */}
           {[1, 2, 3].map((item, index) => (
             <div key={index} className="bg-white border border-slate-100 p-6 rounded-xl hover:shadow-lg transition">
                <img 
                  src={`https://i.pravatar.cc/150?img=${index + 10}`} 
                  alt="Doctor" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-slate-900">Dr. Name Here</h4>
                <p className="text-blue-600 font-medium">Specialist</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default About;