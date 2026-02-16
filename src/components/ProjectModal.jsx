import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />

                {/* Modal content */}
                <motion.div
                    className="relative w-full max-w-2xl bg-dark-800 border border-dark-600 overflow-hidden z-10 max-h-[85vh] overflow-y-auto"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                    {/* Header bar */}
                    <div className="flex items-center justify-between p-5 border-b border-dark-600">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-yellow-400" />
                                <div className="w-2 h-2 bg-yellow-400" />
                            </div>
                            <h3 className="font-pixel text-sm text-yellow-400">{project.title}</h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-yellow-400 transition-colors p-1"
                            aria-label="Close modal"
                        >
                            <HiX size={20} />
                        </button>
                    </div>

                    {/* Project detail placeholder image area */}
                    <div className="w-full h-48 sm:h-56 bg-dark-700 flex items-center justify-center border-b border-dark-600">
                        <div className="flex gap-2 items-center text-gray-500">
                            <div className="grid grid-cols-4 gap-1">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="w-3 h-3 bg-dark-600" />
                                ))}
                            </div>
                            <span className="text-sm ml-3">Project Preview</span>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-5">
                        <p className="text-gray-300 leading-relaxed">{project.details}</p>

                        {/* Tech stack */}
                        <div>
                            <h4 className="font-pixel text-[10px] text-yellow-400 mb-3">TECH STACK</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs bg-dark-700 text-gray-300 px-3 py-1.5 border border-dark-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 pt-2">
                            {project.liveUrl && project.liveUrl !== '#' && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-yellow-400 text-dark-900 px-5 py-2.5 text-sm font-bold hover:bg-yellow-500 transition-colors"
                                >
                                    <span className="font-pixel text-[9px]">LIVE DEMO</span>
                                </a>
                            )}
                            <button
                                onClick={onClose}
                                className="border border-dark-600 text-gray-400 px-5 py-2.5 text-sm hover:border-yellow-400/50 hover:text-yellow-400 transition-colors"
                            >
                                <span className="font-pixel text-[9px]">CLOSE</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
