"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck, Trophy, Users, Star, Zap } from 'lucide-react';

const features = [
    {
        title: "In-depth Market Research",
        desc: "Hum market ke trends ko gehraai se samajhte hain taake aapka faisla hamesha behtar ho.",
        icon: <BarChart3 className="text-blue-400" size={32} />,
        color: "border-blue-500/30",
        glow: "shadow-blue-500/20",
        size: "md:col-span-2 md:row-span-1"
    },
    {
        title: "Award-Winning Service",
        desc: "2024 ka best real estate agency award holder.",
        icon: <Trophy className="text-yellow-400" size={32} />,
        color: "border-yellow-500/30",
        glow: "shadow-yellow-500/20",
        size: "md:col-span-1 md:row-span-2"
    },
    {
        title: "Security Priority",
        desc: "Aapki transactions aur data 100% mehfooz hain.",
        icon: <ShieldCheck className="text-red-400" size={32} />,
        color: "border-red-500/30",
        glow: "shadow-red-500/20",
        size: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Expert Agents",
        desc: "Hamare agents 24/7 aapki rehnumai ke liye hazir hain.",
        icon: <Users className="text-green-400" size={32} />,
        color: "border-green-500/30",
        glow: "shadow-green-500/20",
        size: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Fast Process",
        desc: "Paperwork se le kar chabi milne tak, sab kuch super fast.",
        icon: <Zap className="text-purple-400" size={32} />,
        color: "border-purple-500/30",
        glow: "shadow-purple-500/20",
        size: "md:col-span-2 md:row-span-1"
    }
];

const WhyChooseUs = () => {
    return (
        <section className="bg-[#111] py-24 px-6 md:px-24 text-white">
            {/* --- HEADER --- */}
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm"
                >
                    Benefits
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-black mt-4 tracking-tight">
                    WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">CHOOSE</span> US?
                </h2>
                <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                    We are committed to providing a seamless, secure, and smart experience.
                    Discover what sets us apart from the rest.
                </p>
            </div>

            {/* --- BENTO GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className={`${item.size} group relative bg-[#1a1a1a] border ${item.color} p-8 rounded-3xl overflow-hidden shadow-2xl ${item.glow} hover:shadow-3xl transition-all duration-300`}
                    >
                        {/* Background Icon Glow */}
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            {React.cloneElement(item.icon as React.ReactElement, { size: 150 })}
                        </div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="bg-[#222] w-fit p-4 rounded-2xl border border-white/5 shadow-inner">
                                {item.icon}
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300">
                                    {item.desc}
                                </p>
                            </div>

                            <button className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-red-500 transition-all">
                                Learn More <div className="h-[1px] w-4 bg-current" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;