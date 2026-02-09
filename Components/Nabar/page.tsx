"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0a0a0a] text-white pt-24 pb-12 overflow-hidden">
            {/* --- BACKGROUND DECORATION --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />

            <div className="container mx-auto px-6 md:px-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-8">
                        <div className="text-3xl font-black tracking-tighter">
                            HOME<span className="text-red-600 underline decoration-4 underline-offset-8">LAND</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Hum sirf deewaren nahi banate, hum aapke sapno ki buniyaad rakhte hain. Homeland 2015 se behtareen luxury lifestyle faraham kar raha hai.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -5, color: '#dc2626' }}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors text-gray-400"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigations */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 flex items-center gap-2 uppercase tracking-widest text-red-500">
                            <div className="w-2 h-2 bg-red-600 rounded-full" /> Quick Links
                        </h4>
                        <ul className="grid grid-cols-1 gap-4 text-gray-400 font-medium">
                            {['Home', 'Buy Properties', 'Rent Houses', 'Our Agents', 'Latest Blog', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block flex items-center gap-2 group text-sm">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-red-600" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 flex items-center gap-2 uppercase tracking-widest text-red-500">
                            <div className="w-2 h-2 bg-red-600 rounded-full" /> Contact
                        </h4>
                        <div className="space-y-6 text-sm">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-red-600/10 text-red-500 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                                    <MapPin size={20} />
                                </div>
                                <p className="text-gray-400 leading-snug">625 S. Berendo St Unit 607,<br />Los Angeles, CA 90005</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-red-600/10 text-red-500 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                                    <Phone size={20} />
                                </div>
                                <p className="text-gray-400">+1 (234) 567 890</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-red-600/10 text-red-500 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <p className="text-gray-400">info@homeland.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="relative">
                        <h4 className="text-lg font-bold mb-8 flex items-center gap-2 uppercase tracking-widest text-red-500">
                            <div className="w-2 h-2 bg-red-600 rounded-full" /> Newsletter
                        </h4>
                        <p className="text-gray-400 text-sm mb-6">Naye gharon ki updates seedha apne inbox mein payein.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-red-600 transition-all text-sm"
                            />
                            <button className="absolute right-2 top-2 p-2.5 bg-red-600 rounded-xl hover:bg-red-700 transition-all">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-[0.2em]">
                        Copyright ©{currentYear} All rights reserved
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 font-medium uppercase tracking-widest">
                        Made with <Heart size={12} className="text-red-600 fill-red-600 animate-pulse" /> by <span className="text-white hover:text-red-600 cursor-pointer">GEMINI AI</span>
                    </div>
                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>
                </div>
            </div>

            {/* Subtle Bottom Glow */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[120px] rounded-full" />
        </footer>
    );
};

export default Footer;