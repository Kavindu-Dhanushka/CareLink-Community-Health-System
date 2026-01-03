import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  Stethoscope,
  LayoutDashboard 
} from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('patient'); // 'patient' or 'staff'
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // ---------------------------------------------------------
    // 🔹 MOCK AUTHENTICATION LOGIC
    // In a real app, you would send a request to your ASP.NET backend here.
    // ---------------------------------------------------------
    setTimeout(() => {
      setIsLoading(false);
      
      // Special check for Admin (just for demo purposes)
      if (formData.email.includes('admin')) {
        navigate('/admin');
      } 
      else if (role === 'staff') {
        navigate('/staff');
      } 
      else {
        navigate('/patient');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white">
      
      {/* 1. LEFT SIDE - VISUALS (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 relative overflow-hidden flex-col justify-between p-12 text-white">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>

        {/* Brand */}
        <div className="relative z-10">
          <Link to="/" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 cursor-pointer hover:bg-white/30 transition">
            <span className="text-2xl font-bold">+</span>
          </Link>
          <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-md">
            Log in to access your dashboard, manage appointments, and stay connected with your community health network.
          </p>
        </div>

        {/* Feature List */}
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3 bg-blue-500/30 p-4 rounded-xl backdrop-blur-sm border border-blue-400/30">
            <LayoutDashboard className="w-6 h-6 text-emerald-300" />
            <div>
              <p className="font-bold">Centralized Dashboard</p>
              <p className="text-xs text-blue-100">Everything you need in one place</p>
            </div>
          </div>
        </div>
        
        {/* Footer Credit */}
        <div className="relative z-10 text-xs text-blue-200">
          © 2024 CareLink Community System
        </div>
      </div>

      {/* 2. RIGHT SIDE - FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-24">
        <div className="w-full max-w-md space-y-8">
          
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-slate-900">Sign In</h1>
            <p className="text-slate-500 mt-2">Please enter your credentials to continue.</p>
          </div>

          {/* Role Toggle */}
          <div className="bg-slate-100 p-1 rounded-xl flex">
            <button 
              onClick={() => setRole('patient')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                role === 'patient' 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <User className="w-4 h-4" />
              Patient
            </button>
            <button 
              onClick={() => setRole('staff')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                role === 'staff' 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              Doctor/Staff
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  placeholder={role === 'staff' ? "doctor@carelink.com" : "patient@example.com"}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-500">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-70"
            >
              {isLoading ? (
                <span>Signing In...</span>
              ) : (
                <span className="flex items-center gap-2">
                  Sign In <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </button>
          </form>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-sm text-slate-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">
                Create one now
              </Link>
            </p>
          </div>

          {/* Helper Note for Demo */}
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-100 text-xs text-yellow-800">
            <p className="font-bold mb-1">💡 For Testing:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Select <strong>Patient</strong> to go to Patient Dashboard</li>
              <li>Select <strong>Doctor</strong> to go to Staff Dashboard</li>
              <li>Type "admin" in email to go to Admin Dashboard</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}