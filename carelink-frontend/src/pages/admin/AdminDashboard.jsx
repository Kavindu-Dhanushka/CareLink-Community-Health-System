import React from 'react';
import { 
  UsersIcon, 
  CalendarDaysIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  ArrowTrendingUpIcon 
} from '@heroicons/react/24/outline';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Mock Data for the Chart
const appointmentData = [
  { name: 'Week 1', visits: 45 },
  { name: 'Week 2', visits: 72 },
  { name: 'Week 3', visits: 58 },
  { name: 'Week 4', visits: 90 },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-8 bg-slate-50 min-h-screen">
      
      {/* 1. HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500">Welcome back, Administrator. Here's your daily community health summary.</p>
        </div>
        
        {/* Date Filter Buttons */}
        <div className="bg-white p-1 rounded-lg border border-slate-200 flex shadow-sm">
          <button className="px-4 py-1.5 text-sm font-semibold text-slate-800 bg-slate-100 rounded-md shadow-sm">Today</button>
          <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-800">Week</button>
          <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-800">Month</button>
        </div>
      </div>

      {/* 2. STATS CARDS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Patients" 
          value="1,240" 
          trend="+12%" 
          icon={<UsersIcon className="w-6 h-6 text-blue-600" />} 
          bg="bg-blue-50" 
        />
        <StatCard 
          title="Daily Appointments" 
          value="45" 
          trend="+5%" 
          icon={<CalendarDaysIcon className="w-6 h-6 text-sky-600" />} 
          bg="bg-sky-50" 
        />
        <StatCard 
          title="Active Staff" 
          value="28" 
          trend="Stable" 
          isNeutral 
          icon={<UserGroupIcon className="w-6 h-6 text-indigo-600" />} 
          bg="bg-indigo-50" 
        />
        <StatCard 
          title="Preventive Care Rate" 
          value="85%" 
          trend="+2%" 
          icon={<ShieldCheckIcon className="w-6 h-6 text-emerald-600" />} 
          bg="bg-emerald-50" 
        />
      </div>

      {/* 3. CHARTS & ANALYTICS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Chart (Takes 2/3 width) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">Appointment Trends</h3>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="text-sm text-slate-500">Visits</span>
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={appointmentData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#F1F5F9'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                />
                <Bar dataKey="visits" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side Distribution (Takes 1/3 width) */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Check-up Distribution</h3>
          <p className="text-sm text-slate-500 mb-6">Preventive screenings by type</p>

          <div className="space-y-6">
            <ProgressBar label="Blood Pressure" percentage={35} color="bg-blue-600" />
            <ProgressBar label="Diabetes Screening" percentage={28} color="bg-indigo-500" />
            <ProgressBar label="Dental Check" percentage={22} color="bg-emerald-500" />
            <ProgressBar label="Vision Test" percentage={15} color="bg-sky-500" />
          </div>
        </div>

      </div>
    </div>
  );
};

// --- Reusable Helper Components for this Page ---

const StatCard = ({ title, value, trend, icon, bg, isNeutral }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between h-32">
    <div className="flex justify-between items-start">
      <div className={`p-3 rounded-lg ${bg}`}>
        {icon}
      </div>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${isNeutral ? 'bg-slate-100 text-slate-600' : 'bg-green-50 text-green-700'}`}>
        {trend} { !isNeutral && <ArrowTrendingUpIcon className="w-3 h-3 inline ml-1" /> }
      </span>
    </div>
    <div>
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
    </div>
  </div>
);

const ProgressBar = ({ label, percentage, color }) => (
  <div>
    <div className="flex justify-between text-sm font-semibold text-slate-700 mb-2">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-slate-100 rounded-full h-2.5">
      <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

export default AdminDashboard;