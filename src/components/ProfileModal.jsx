import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChip, HiClock, HiCalendar, HiSparkles } from 'react-icons/hi';
import { profile } from '../data/content';

export default function ProfileModal({ isOpen, onClose }) {
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-dark-800 border-2 border-yellow-400 p-1 shadow-[8px_8px_0_0_#FACC15]"
                    >
                        {/* Header Bar */}
                        <div className="bg-yellow-400 p-2 flex justify-between items-center mb-1">
                            <span className="font-pixel text-xs text-dark-900 font-bold tracking-widest">
                                {profile.title}
                            </span>
                            <button
                                onClick={onClose}
                                className="text-dark-900 hover:bg-dark-900 hover:text-yellow-400 p-1 transition-colors"
                            >
                                <HiX size={16} />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Profile Header */}
                            <div className="flex items-center gap-6">
                                <div className="relative group">
                                    <div className="w-20 h-20 rounded-full border-4 border-yellow-400 overflow-hidden transition-all duration-300">
                                        <img
                                            src="/img/pfp02.jpg"
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-dark-900 text-[10px] font-pixel px-2 py-0.5 border border-dark-900">
                                        LVL. 21
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-pixel text-xl text-white mb-1">GALUH</h2>
                                    <p className="text-yellow-400 text-sm font-mono">{profile.role}</p>
                                    <div className="flex gap-1 mt-2">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="w-2 h-2 bg-green-500 rounded-sm" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {profile.stats.map((stat) => (
                                    <div key={stat.label} className="bg-dark-900 p-2 border border-dark-600 flex items-center justify-between">
                                        <span className="text-gray-400 text-xs font-mono">{stat.label}</span>
                                        <span className={`text-xs font-bold ${stat.color.replace('bg-', 'text-')}`}>{stat.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Info Details */}
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex items-start gap-3 text-gray-300">
                                    <HiCalendar className="text-yellow-400 mt-1 shrink-0" />
                                    <div>
                                        <span className="text-gray-500 text-xs block">Date of Birth</span>
                                        {profile.dob}
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 text-gray-300">
                                    <HiChip className="text-yellow-400 mt-1 shrink-0" />
                                    <div>
                                        <span className="text-gray-500 text-xs block">Equipped Gear</span>
                                        {profile.laptop}
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 text-gray-300">
                                    <HiClock className="text-yellow-400 mt-1 shrink-0" />
                                    <div>
                                        <span className="text-gray-500 text-xs block">Active Hours</span>
                                        {profile.activeHours}
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 text-gray-300">
                                    <HiSparkles className="text-yellow-400 mt-1 shrink-0" />
                                    <div>
                                        <span className="text-gray-500 text-xs block">Side Quests (Hobbies)</span>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {profile.hobbies.map(hobby => (
                                                <span key={hobby} className="text-xs border border-dark-600 px-2 py-0.5 rounded bg-dark-900 text-gray-400">
                                                    {hobby}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Pixel Deco */}
                        <div className="h-2 bg-yellow-400 mt-2 mx-1 mb-1 opacity-20" style={{
                            backgroundImage: 'linear-gradient(90deg, transparent 50%, #111827 50%)',
                            backgroundSize: '4px 100%'
                        }} />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
