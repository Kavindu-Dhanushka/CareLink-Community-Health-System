import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartIcon, 
  BeakerIcon, 
  UserPlusIcon, 
  CalendarDaysIcon, 
  ClipboardDocumentCheckIcon 
} from '@heroicons/react/24/solid';
import {images} from '../../assets/image';

const Home = () => {
  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section >
        <div className="container mx-auto px-4 md:px-6 relative z-10 mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-22 items-center">
            
            {/* Text Content */}
            <div className="space-y-3 max-w-2xl ">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase">
                Official Community Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight ">
                Empowering Our Community Through <span className="text-blue-600">Preventive Care</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Join thousands of neighbors prioritizing their health. Accessible, affordable, and aligned with global sustainability goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/patient/book" className="inline-flex justify-center items-center px-6 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                  Book Appointment
                </Link>
                <Link to="/health-tips" className="inline-flex justify-center items-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                  View Health Tips
                </Link>
              </div>

              {/* Trust Badge */}
              
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl blur-2xl opacity-50 "></div>
              <img 
                src={images.HomeBanner}
                alt="Doctor consulting patient" 
                className="relative rounded-2xl shadow-2xl w-[495px]  object-cover -mt-12 -"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SDG GOALS ALIGNMENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Description */}
            <div className="lg:col-span-5 space-y-6">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Global Goals Alignment</h4>
              <h2 className="text-3xl font-bold text-slate-900">Committed to a Sustainable Future</h2>
              <p className="text-slate-600 leading-relaxed">
                Our clinic isn't just about treating illness; it's about building a healthier society. We actively measure our impact against UN Sustainable Development Goals.
              </p>
            </div>

            {/* SDG Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: SDG 3 */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                  <HeartIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">SDG 3: Good Health</h3>
                <p className="text-slate-600 text-sm">Ensuring healthy lives and promoting well-being for all at all ages through preventive screenings.</p>
              </div>

              {/* Card 2: SDG 9 */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  <BeakerIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">SDG 9: Innovation</h3>
                <p className="text-slate-600 text-sm">Building resilient infrastructure and fostering innovation in community healthcare delivery systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16">
            Your path to better health is simple, transparent, and designed around your community lifestyle.
          </p>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 border-4 border-slate-50">
                <UserPlusIcon className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Create Profile</h3>
              <p className="text-slate-600 text-sm px-4">Register online in minutes with your local ID to join the community health network.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 border-4 border-slate-50">
                <CalendarDaysIcon className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Choose Service</h3>
              <p className="text-slate-600 text-sm px-4">Select from preventive check-ups, vaccinations, or wellness consultations.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 border-4 border-slate-50">
                <ClipboardDocumentCheckIcon className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. Get Care</h3>
              <p className="text-slate-600 text-sm px-4">Visit our clinic or meet your community specialist for personalized care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center md:text-left relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to prioritize your health?</h2>
                <p className="text-blue-100 text-lg">
                  Our specialists are ready to help you build a personalized wellness plan today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/patient/book" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-slate-100 transition">
                  Book Appointment
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;