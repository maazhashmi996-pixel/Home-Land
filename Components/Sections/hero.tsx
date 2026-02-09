"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Menu, X, Phone, ArrowRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "Find Your Luxury Dream Home",
        location: "625 S. BERENDO ST, LOS ANGELES",
        price: "$1,000,500",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    },
    {
        id: 2,
        title: "Modern Living in the Suburbs",
        location: "992 NORTH HILLS, NEW YORK",
        price: "$2,450,000",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    },
    {
        id: 3,
        title: "Exquisite Villa with Private Pool",
        location: "MAJESTIC BAY, MIAMI",
        price: "$3,200,000",
        img: "https://images.unsplash.com/photo-1600607687940-4e524cb35a36?q=80&w=2070",
    }
];

const TypingEffect = ({ text }: { text: string }) => {
    const [currentText, setCurrentText] = useState("");
    useEffect(() => {
        setCurrentText("");
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setCurrentText((prev) => prev + text.charAt(i));
                i++;
            } else clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, [text]);
    return <span>{currentText}<span className="animate-pulse ml-1 text-red-500">|</span></span>;
};

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        // Main wrapper with bg-black to prevent white flashes
        <div className="relative h-screen w-full overflow-hidden font-sans bg-black text-white">

            {/* --- VIP NAVBAR --- */}
            <nav className="absolute top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-12 py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
                <div className="text-2xl md:text-3xl font-black tracking-tighter flex items-center gap-1">
                    HOME<span className="text-red-600 border-b-4 border-red-600 leading-none">LAND</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex gap-10 font-bold uppercase text-[12px] tracking-[0.2em]">
                    {['Home', 'Buy', 'Rent', 'Properties', 'Blog', 'About'].map((item) => (
                        <a key={item} href="#" className="hover:text-red-500 transition-all duration-300 relative group">
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <div className="flex flex-col items-end mr-4 border-r border-white/20 pr-6">
                        <span className="text-[10px] uppercase tracking-widest text-gray-400">Call Us Now</span>
                        <span className="text-sm font-bold">+1 (234) 567 890</span>
                    </div>
                    <button className="bg-red-600 hover:bg-white hover:text-black transition-all duration-500 px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-sm">
                        Contact
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </nav>

            {/* --- SMOOTH SLIDER (Black Base) --- */}
            <div className="absolute inset-0 z-0 bg-black">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        {/* Background with subtle auto-zoom */}
                        <motion.div
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 7 }}
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slides[current].img})` }}
                        />
                        {/* Dark Overlays - cinemetic look */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent md:bg-black/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* --- HERO CONTENT --- */}
            <div className="relative z-10 flex h-full flex-col items-center md:items-start justify-center text-center md:text-left px-6 md:px-24">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="mb-6 flex items-center gap-3 bg-red-600 px-5 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-red-600/20"
                >
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Available Now
                </motion.div>

                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 max-w-4xl leading-[1.1]">
                    <TypingEffect text={slides[current].title} />
                </h1>

                <motion.div
                    key={`loc-${current}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-center md:justify-start gap-3 text-lg md:text-2xl font-medium tracking-wide text-gray-300 mb-2"
                >
                    <div className="p-2 bg-white/10 rounded-full backdrop-blur-md">
                        <MapPin className="text-red-600" size={20} />
                    </div>
                    {slides[current].location}
                </motion.div>

                <motion.div
                    key={`price-${current}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-4xl md:text-6xl font-black text-green-500 drop-shadow-lg"
                >
                    {slides[current].price}
                </motion.div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-12 flex flex-col md:flex-row gap-5 w-full md:w-auto"
                >
                    <button className="group relative border-2 border-white px-12 py-5 font-black uppercase tracking-widest transition-all overflow-hidden">
                        <span className="relative z-10 group-hover:text-black">See Details</span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                    <button className="bg-red-600 px-12 py-5 font-black uppercase tracking-widest transition-all hover:bg-red-700 hover:scale-105 flex items-center justify-center gap-3">
                        Enquire Now <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>

            {/* --- PROGRESS INDICATORS --- */}
            <div className="absolute bottom-12 left-6 md:left-24 z-20 flex flex-col gap-6">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className="cursor-pointer group flex items-center gap-4"
                    >
                        <span className={`text-[10px] font-bold transition-all ${index === current ? "text-red-600 scale-125" : "text-white/40"}`}>
                            0{index + 1}
                        </span>
                        <div className={`h-[2px] transition-all duration-500 rounded-full ${index === current ? "w-16 bg-red-600" : "w-8 bg-white/20 group-hover:bg-white/50"}`} />
                    </div>
                ))}
            </div>

            {/* Scroll Down Hint */}
            <div className="absolute bottom-10 right-12 hidden lg:flex flex-col items-center gap-4">
                <span className="uppercase text-[10px] tracking-[0.4em] rotate-90 mb-8 origin-right text-gray-500">Scroll Down</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-white/50 to-transparent" />
            </div>
        </div>
    );
};

export default Hero;