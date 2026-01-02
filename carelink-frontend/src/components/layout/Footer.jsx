import React, { useState } from "react";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Globe,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (!email) return;
        alert(`Subscribed with: ${email}`);
        setEmail("");
    };

    return (
        <footer className="bg-gray-50 pt-12 pb-6 px-6">
            <div className="max-w-7xl mx-auto">

                {/* GRID */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* LOGO + ABOUT */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                            <h2 className="text-lg font-bold text-gray-900">
                                CareLink
                            </h2>
                        </div>

                        <p className="text-sm text-gray-600 mb-4">
                            A community-focused digital healthcare system supporting prevention, accessibility, and healthy living.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a href="#" className="social-btn"><Globe size={18} /></a>
                            <a href="#" className="social-btn"><Facebook size={18} /></a>
                            <a href="#" className="social-btn"><Instagram size={18} /></a>
                            <a href="#" className="social-btn"><Twitter size={18} /></a>
                            <a href="#" className="social-btn"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="footer-link">About Us</a></li>
                            <li><a href="#" className="footer-link">Services</a></li>
                            <li><a href="#" className="footer-link">Health Blog</a></li>
                            <li><a href="#" className="footer-link">Careers</a></li>
                            <li><a href="#" className="footer-link">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="footer-title">Contact</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex gap-2">
                                <MapPin size={18} className="text-blue-600" />
                                Passara Road , Badulla 90000
                            </li>
                            <li className="flex gap-2">
                                <Phone size={18} className="text-blue-600" />
                                +94 76 389 6726
                            </li>
                            <li className="flex gap-2">
                                <Mail size={18} className="text-blue-600" />
                                care@communityhealth.org
                            </li>
                        </ul>
                    </div>

                    {/* NEWSLETTER */}
                    <div>
                        <h3 className="footer-title">Stay Healthy</h3>
                        <p className="text-sm text-gray-600 mb-3">
                            Get weekly health tips & updates.
                        </p>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                        />

                        <button
                            onClick={handleSubscribe}
                            className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Subscribe
                        </button>
                    </div>

                </div>

                {/* FOOTER BOTTOM */}
                <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} CareLink Community. All rights reserved.
                </div>
            </div>

            {/* Tailwind reusable classes */}
            <style>
                {`
          .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 9999px;
            background-color: #e5e7eb;
            transition: all 0.3s;
          }

          .social-btn:hover {
            background-color: #2563eb;
            color: white;
          }

          .footer-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #111827;
          }

          .footer-link {
            color: #4b5563;
            transition: color 0.3s;
          }

          .footer-link:hover {
            color: #2563eb;
          }
        `}
            </style>
        </footer>
    );
}
