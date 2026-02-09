"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
    {
        id: 1,
        date: "Feb 10, 2026",
        author: "Mike Charles",
        title: "Real Estate Market Trends in 2026",
        desc: "Samiye ke naye rukh aur property ki qeematon mein honay wali tabdeeliyon ka mukammal jaiza.",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
        category: "Market"
    },
    {
        id: 2,
        date: "Feb 08, 2026",
        author: "Sarah Jane",
        title: "Luxury Living: Top 10 Villas",
        desc: "Duniya ke behtareen aur luxury villas jo aapke rehen-sehen ka tariqa badal dein ge.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
        category: "Lifestyle"
    },
    {
        id: 3,
        date: "Feb 05, 2026",
        author: "Alex Ross",
        title: "Investment Tips for Beginners",
        desc: "Property mein pehli baar invest kar rahe hain? Ye tips aapke kaam aayengi.",
        img: "https://images.unsplash.com/photo-1600607687940-4e524cb35a36?auto=format&fit=crop&q=80",
        category: "Finance"
    }
];

const BlogSection = () => {
    return (
        <section className="bg-white py-24 px-6 md:px-24">
            {/* --- HEADER --- */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6 uppercase"
                >
                    Recent <span className="text-red-600">Blog</span>
                </motion.h2>
                <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6 rounded-full" />
                <p className="text-gray-500 text-lg">
                    Hamare expert articles ke zariye real estate ki duniya se bakhabar rahein.
                    Behtareen investment aur ghar sajane ke tareeqay yahan milein ge.
                </p>
            </div>

            {/* --- BLOG GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group cursor-pointer"
                    >
                        {/* Image Container with Zoom Effect */}
                        <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                src={blog.img}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-red-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                    {blog.category}
                                </span>
                            </div>
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content Section */}
                        <div className="mt-8 px-2">
                            <div className="flex items-center gap-6 text-gray-400 text-xs font-semibold mb-4 uppercase tracking-tighter">
                                <span className="flex items-center gap-1.5 hover:text-red-600 transition-colors">
                                    <Calendar size={14} /> {blog.date}
                                </span>
                                <span className="flex items-center gap-1.5 hover:text-red-600 transition-colors">
                                    <User size={14} /> By {blog.author}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                                {blog.title}
                            </h3>

                            <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-2">
                                {blog.desc}
                            </p>

                            <motion.button
                                whileHover={{ x: 5 }}
                                className="mt-6 flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-[0.2em]"
                            >
                                Read More <ArrowRight size={16} />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;