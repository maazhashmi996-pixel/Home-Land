"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bed, Bath, Maximize, Heart } from 'lucide-react';
import { properties } from './properties'; // Upar wala data import karein

const PropertySection = () => {
    const [filterType, setFilterType] = useState('All');
    const [offerType, setOfferType] = useState('All');
    const [city, setCity] = useState('All');

    // Filter Logic
    const filteredData = properties.filter(item => {
        return (filterType === 'All' || item.type === filterType) &&
            (offerType === 'All' || item.offer === offerType);
    });

    return (
        <section className="bg-gray-50 py-20 px-6 md:px-24">
            {/* --- FILTER BAR (VIP Dark Style) --- */}
            <div className="bg-[#2c3e50] p-8 rounded-t-lg shadow-2xl flex flex-wrap gap-6 items-end">
                <div className="flex-1 min-w-[200px]">
                    <label className="text-white text-xs font-bold uppercase mb-2 block tracking-widest">Listing Types</label>
                    <select
                        onChange={(e) => setFilterType(e.target.value)}
                        className="w-full p-3 bg-white border-none rounded text-gray-700 outline-none focus:ring-2 ring-green-500"
                    >
                        <option value="All">All Types</option>
                        <option value="Condo">Condo</option>
                        <option value="House">House</option>
                    </select>
                </div>

                <div className="flex-1 min-w-[200px]">
                    <label className="text-white text-xs font-bold uppercase mb-2 block tracking-widest">Offer Type</label>
                    <select
                        onChange={(e) => setOfferType(e.target.value)}
                        className="w-full p-3 bg-white border-none rounded text-gray-700 outline-none"
                    >
                        <option value="All">All Offers</option>
                        <option value="Sale">For Sale</option>
                        <option value="Rent">For Rent</option>
                    </select>
                </div>

                <button className="bg-[#8bc34a] hover:bg-[#7cb342] text-white font-bold py-3 px-12 rounded transition-all uppercase tracking-widest shadow-lg">
                    Search
                </button>
            </div>

            {/* --- PROPERTY GRID --- */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredData.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow group"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 uppercase">{item.offer}</span>
                                    <span className="bg-green-500 text-white text-[10px] font-bold px-3 py-1 uppercase">{item.type}</span>
                                </div>
                                <button className="absolute bottom-4 right-4 p-3 bg-white rounded-full shadow-lg text-gray-400 hover:text-red-500 transition-colors">
                                    <Heart size={20} fill="currentColor" className="fill-transparent hover:fill-red-500" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 hover:text-green-600 cursor-pointer transition-colors">{item.title}</h3>
                                <p className="text-gray-500 text-sm mt-2 flex items-center gap-1">
                                    <MapPin size={14} /> {item.address}
                                </p>
                                <div className="text-2xl font-bold text-[#8bc34a] mt-4">
                                    ${item.price.toLocaleString()}
                                </div>

                                {/* Icons Row */}
                                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 text-gray-500 font-medium text-sm">
                                    <div className="flex items-center gap-2">
                                        <Bed size={18} className="text-gray-400" /> {item.beds}+
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath size={18} className="text-gray-400" /> {item.baths}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Maximize size={18} className="text-gray-400" /> {item.sqft.toLocaleString()} Sq Ft
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredData.length === 0 && (
                <div className="text-center py-20 text-gray-500 text-xl font-medium italic">
                    No properties found matching your criteria.
                </div>
            )}
        </section>
    );
};

export default PropertySection;

// Helper components (MapPin)
const MapPin = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);