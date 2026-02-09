"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const agents = [
    {
        id: 1,
        name: "Megan Smith",
        role: "Senior Real Estate Agent",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        bio: "10 saal ka experience jo aapko sahi ghar dilwane mein madad karega."
    },
    {
        id: 2,
        name: "Brooke Cagle",
        role: "Property Consultant",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        bio: "Market trends aur property valuation ke mahir advisor."
    },
    {
        id: 3,
        name: "Philip Martin",
        role: "Luxury Listing Expert",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        bio: "Luxury villas aur high-end apartments ke specialist."
    }
];

const AgentsSection = () => {
    return (
        <section className="bg-gray-50 py-24 px-6 md:px-24 overflow-hidden">
            {/* --- HEADER --- */}
            <div className="text-center mb-20 relative">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter"
                >
                    Our <span className="text-red-600">Agents</span>
                </motion.h2>
                <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium">
                    Hamare agents sirf ghar nahi dikhate, wo aapke sapno ko haqeeqat banane mein saath dete hain.
                </p>
            </div>

            {/* --- AGENTS GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {agents.map((agent, index) => (
                    <motion.div
                        key={agent.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="group relative"
                    >
                        {/* Main Image Card */}
                        <div className="relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src={agent.img}
                                alt={agent.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />

                            {/* Bottom Glass Card */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                                <h3 className="text-2xl font-black text-gray-900">{agent.name}</h3>
                                <p className="text-red-600 font-bold text-xs uppercase tracking-widest mt-1">{agent.role}</p>

                                <p className="text-gray-600 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-snug">
                                    {agent.bio}
                                </p>

                                {/* Socials - Reveal on Hover */}
                                <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <a href="#" className="p-2 bg-gray-900 text-white rounded-lg hover:bg-red-600 transition-colors"><Facebook size={16} /></a>
                                    <a href="#" className="p-2 bg-gray-900 text-white rounded-lg hover:bg-red-600 transition-colors"><Twitter size={16} /></a>
                                    <a href="#" className="p-2 bg-gray-900 text-white rounded-lg hover:bg-red-600 transition-colors"><Linkedin size={16} /></a>
                                    <a href="#" className="p-2 bg-red-600 text-white rounded-lg hover:bg-gray-900 transition-colors ml-auto"><Phone size={16} /></a>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-10 -right-4 w-full h-full border-2 border-red-100 rounded-[2rem] group-hover:top-6 group-hover:-right-2 transition-all duration-500" />
                    </motion.div>
                ))}
            </div>

            {/* --- CTA BUTTON --- */}
            <div className="mt-20 text-center">
                <button className="px-10 py-4 bg-gray-900 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-red-600 transition-all shadow-xl hover:shadow-red-600/20">
                    Join Our Team
                </button>
            </div>
        </section>
    );
};

export default AgentsSection;