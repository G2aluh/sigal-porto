import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { skills } from '../data/content';

const tabs = ['All', 'Coding', 'Design'];

export default function Skills() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredSkills = activeTab === 'All'
        ? skills
        : skills.filter((s) => s.category === activeTab.toLowerCase());

    return (
        <SectionWrapper id="skills">
            {/* Section header */}
            <div className="flex items-center gap-4 mb-12">
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-yellow-400" />
                    <div className="w-2 h-2 bg-yellow-400" />
                    <div className="w-2 h-2 bg-yellow-400" />
                </div>
                <h2 className="font-pixel text-lg sm:text-xl text-yellow-400">SKILLS</h2>
                <div className="flex-1 h-px bg-dark-600" />
            </div>

            {/* Tab bar */}
            <div className="flex gap-2 mb-10">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-5 py-2.5 text-sm font-medium transition-colors ${activeTab === tab
                                ? 'text-dark-900'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        {activeTab === tab ? (
                            <motion.div
                                layoutId="skillTabBg"
                                className="absolute inset-0 bg-yellow-400 -z-10"
                                style={{
                                    boxShadow: '4px 4px 0 0 #000, -2px -2px 0 0 #333'
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            />
                        ) : (
                            <div className="absolute inset-0 border-2 border-transparent hover:border-yellow-400/50 hover:bg-dark-800 -z-10 transition-colors border-dashed" />
                        )}
                        <span className="relative z-10 font-pixel text-[10px] tracking-widest">{tab.toUpperCase()}</span>
                    </button>
                ))}
            </div>

            {/* Skills grid */}
            <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
            >
                <AnimatePresence mode="popLayout">
                    {filteredSkills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.25 }}
                            data-cursor-hover
                            className="group border border-dark-600 hover:border-yellow-400/50 p-4 flex items-center gap-3 transition-colors"
                        >
                            {/* Pixel dot indicator */}
                            <div className="w-2 h-2 bg-yellow-400 group-hover:bg-yellow-400 shrink-0 transition-colors" />
                            <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </SectionWrapper>
    );
}
