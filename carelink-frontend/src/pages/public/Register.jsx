
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Shield } from "lucide-react";

const Register = () => {
    const [userType, setUserType] = useState("patient");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        specialization: "",
    });
    const [loading, setLoading] = useState(false); // for API call
    const [message, setMessage] = useState(""); // success/error message

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        // Basic validation
        if (
            !formData.fullName ||
            !formData.email ||
            !formData.phone ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            setMessage("Please fill in all required fields.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        const registerData = {
            userType,
            ...formData,
        };

        try {
            setLoading(true);
            setMessage("");
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(registerData),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("Registration successful! You can now login.");
                setFormData({
                    fullName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    phone: "",
                    specialization: "",
                });
            } else {
                setMessage(data.error || "Registration failed. Try again.");
            }
        } catch (err) {
            console.error(err);
            setMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600 p-12 flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 to-teal-500/30"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-blue-700 text-2xl font-bold">+</span>
                        </div>
                        <h1 className="text-2xl font-bold">Community Health</h1>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold mb-4">Your partner in preventive care.</h2>
                        <p className="text-blue-100 text-lg leading-relaxed">
                            Join our community to access personalized health plans and connect with providers.
                        </p>
                    </div>
                </div>
                <div className="relative z-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <div className="w-10 h-10 rounded-full bg-blue-300 border-2 border-white"></div>
                            <div className="w-10 h-10 rounded-full bg-teal-300 border-2 border-white"></div>
                            <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white"></div>
                        </div>
                        <div>
                            <div className="font-semibold">4.9/5 Rating</div>
                            <div className="text-sm text-blue-100">from our community</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                        <p className="text-gray-600">Please enter your details to sign up.</p>
                    </div>

                    {/* User Type Selection */}
                    <div className="flex gap-3 mb-6">
                        {["patient", "doctor", "staff"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setUserType(type)}
                                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${userType === type
                                    ? "bg-white text-blue-600 shadow-md border-2 border-blue-600"
                                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300"
                                    }`}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 000-0000"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Doctor Specialization */}
                        {userType === "doctor" && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleChange}
                                    placeholder="e.g., Cardiology"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        )}

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* API Message */}
                        {message && <p className="text-center text-red-500 mt-2">{message}</p>}

                        {/* Sign Up Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Creating..." : "Create Account"} <span>→</span>
                        </button>

                        {/* Security Badge */}
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                            <Shield className="w-4 h-4 text-green-600" />
                            <span>Encrypted & HIPAA Compliant</span>
                        </div>

                        {/* Sign In Link */}
                        <div className="text-center mt-6 pt-6 border-t border-gray-200">
                            <p className="text-gray-600">
                                Already have an account?{" "}
                                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                                    Sign In
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;


